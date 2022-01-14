---
title: "Speedup Rust Compile Time"
date: "2022-01-14"
is_published: false
---

Rust is notoriously known for being slow to compile. This was caused by several problems. I will list the current overhead that the Rust compiler has

### Macro expansion

Code generation using macro

### Monomorphization

This is a process of duplication a polymorphic function (a function that act as an interface to many types or generics) to an individual monomorphic function.

```
fn id<T>(x: T) -> T {
    return x;
}

fn main() {
    let int = id(10);
    let string = id("some text");
    println!("{0}, {1}", int, string);
}
```

The code above has a function `id`, which were called using 2 different types of arguments, `&str` and `i32`. The compiler will then compile the function `id` as a 2 different function for each generic type as follows.

```
fn id_i32(x: i32) -> i32 {
    return x;
}

fn id_str(x: &str) -> &str {
    return x;
}

fn main() {
    let int = id_i32(10);
    let string = id_str("some text");
    println!("{0}, {1}", int, string);
}
```

### Linking

Technically this is not relevant with the compilation, linking occurs after the compilation to link the project with other libraries. The current Rust default linker is slow and there is a [work going on to switch the default linker to LLD](https://github.com/rust-lang/rust/issues/39915).

#### Windows

You can install it directly from cargo

```
cargo install -f cargo-binutils
rustup component add llvm-tools-preview
```

or install it from Scoop

```
scoop install lld
```

or install it from Winget

```
winget install -e --id LLVM.LLVM
```

**~/.cargo/config**

```
[target.wasm32-unknown-unknown]
linker = "rust-lld"
```

### Modularize the Project

By modularizing the project.

You can even further speedup to compile a core subproject that are not often modified by compile it as a dynamic library. The code below shows the example of a project configuration to make it as dynamic library.

**Config.toml**

```
# ...

[lib]
crate-type = ["dylib"]

# ...
```

---

References

- https://doc.rust-lang.org/book/ch10-01-syntax.html
- https://bevyengine.org/learn/book/getting-started/setup/
