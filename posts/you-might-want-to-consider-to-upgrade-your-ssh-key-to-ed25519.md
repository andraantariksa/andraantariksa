---
title: "You Might Want to Consider to Upgrade Your SSH Key to Ed25519"
date: "2022-01-14"
is_published: true
---

## Introduction

As of today, RSA is the most widely used, but Ed25519 has become the newly recommended public key algorithm to use. Ed25519 it uses [Twisted Edwards curve](https://en.wikipedia.org/wiki/Twisted_Edwards_curve).

## Why Ed25519

- **Better performance**. Since it uses a better algorithm.
- **Compact signature**. My Ed25519 public key only consisted of less than 30 characters and less than 400 for the secret key. Compared with my RSA key, which consists of 700 and 3300-ish characters for the secret key.
- **More secure**, as it does not require any random input and has some other details. This benefit is not important for average users.

## Generating the Key

```
ssh-keygen -t ed25519 -f ~/.ssh/id_ed25519 -C "andra@example.com"
```

- `-t` specify the type we're using, in our case ed25519.
- `-f` specify the filename of the generated key file.
- `-C` (Optional) specify the comment inside the key, it is usually filled with `<user>@<hostname>`.

Additionally, you can add `-a NUMBER` flag to customize the key derivation function rounds to slow down the passphrase verification, which can slow down any brute force attempt (and also slow you down).

## Conclusion

With the minor benefit above, you should consider making a new key using Ed25519. However, it doesn't mean you need to switch immediately, you could just add the new key without having to remove your old key type.

---

References

- https://man.openbsd.org/ssh-keygen.1
- https://blog.peterruppel.de/ed25519-for-ssh/
