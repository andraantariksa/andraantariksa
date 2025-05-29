---
title: "Functor, Applicative, dan Monad dengan Gambar"
date: "2020-03-12"
---

Ada sebuan nilai (_value_) dasar:

![](http://adit.io/imgs/functors/value.png)

Dan kita tahu bagaimana cara mengaplikasikan suatu fungsi pada nilai tersebut:

![](http://adit.io/imgs/functors/value_apply.png)

Cukup mudah. Mari kita perdalam hal ini dengan menganggap bahwa suatu nilai dapat berada di dalam suatu konteks. Sekarang Anda cukup menganggap bahwa konteks itu sebagai kotak yang dapat Anda berikan suatu nilai di dalamnya:

![](http://adit.io/imgs/functors/value_and_context.png)

Sekarang, ketika Anda mengaplikasikan suatu fungsi kepada nilai tersebut, Anda akan mendapatkan hasil yang berbeda bergantung dengan konteks yang ada. Ide ini merupakan awal mula munculnya _Funtor_, _Applicative_, _Monad_, _Arrow_, dan lainnya. Salah satunya tipe data Maybe yang memiliki dua konteks yang saling berhubungan:

![](http://adit.io/imgs/functors/context.png)

```
data Maybe a = Nothing | Just a
```

Pada bagian kedua kita akan melihat bagaimana fungsi bisa memberikan sesuatu yang berbeda ketika diapliaksikan ke `Just a` dan `Nothing`. Pertama, mari kita diskusikan Functor!

## Functor

Ketika suatu nilai terbungkus dalam suatu konteks, Anda tidak dapat mengaplikasikan fungsi pada biasanya:

![](http://adit.io/imgs/functors/no_fmap_ouch.png)

Disaat inilah `fmap` muncul. `fmap` tahu bagaimana caranya mengaplikasikan fungsi ke suatu nilai yang terbungkus oleh suatu konteks. Contohnya, jika Anda ingin mengaplikasikan fungsi `(+3)` ke `Just 2` menggunakan `fmap`:

```
> fmap (+3) (Just 2)
Just 5
```

Bam! fmap menunjukan kita hasilnya! Tapi bagaimana `fmap` tahu cara mengaplikasikan fungsi tersebut?

## Sebenarnya, apa sih Functor itu?

_Functor_ merupakan suatu _typeclass_. Di bawah ini merupakan definisi dari _Functor_:

![](http://adit.io/imgs/functors/functor_def.png)

_Functor_ adalah suatu tipe data yang mendefinisikan bagaimana `fmap` mengaplikasikan tipe data tersebut. Ini bagaimana cara `fmap` bekerja:

![](http://adit.io/imgs/functors/fmap_def.png)

Jadi kita bisa melakukan ini:

```
> fmap (+3) (Just 2)
Just 5
```

Dan `fmap` secara ajaib mengaplikasikan fungsi tersebut, karena `Maybe` merupakan _Functor_. _Functor_ mendefinisikan bagaimana `fmap` dapat berlaku pada `Just` dan `Nothing`:

```
instance Functor Maybe where
    fmap func (Just val) = Just (func val)
    fmap func Nothing = Nothing
```

Sebenarnya, ini yang terjadi di balik layar ketika kita menulis `fmap (+3) (Just 2)`:

![](http://adit.io/imgs/functors/fmap_just.png)

Jadi seperti, "Oke `fmap`, tolong dong aplikasikan `(+3)` ke `Nothing`"

![](http://adit.io/imgs/functors/fmap_nothing.png)

```
> fmap (+3) Nothing
Nothing
```

![Bill O'Reilly being totally ignorant about the Maybe functor](http://adit.io/imgs/functors/bill.png)

Seperti Morpheus di film Matrix, `fmap` tahu apa yang harus ia lakukan; pada awalnya anda memulai dengan `Nothing`, dan anda berakhir dengan `Nothing`! Sekarang semua menjadi masuk akal, mengapa ada tipe data `Maybe`. Sebagai contoh, ini bagaimana Anda bekerja dengan _database_ di bahasa pemrograman yang tidak memiliki sintaks `Maybe`:

```
post = Post.find_by_id(1)
if post
  return post.title
else
  return nil
end
```

Tapi, di Haskell:

```
fmap (getPostTitle) (findPost 1)
```

Jika `findPost` mengembalikan `post`, kita akan mendapatkan `title`-nya dengan `getPostTitle`. Jika `findPost` mengembalikan `Nothing`, kita akan mengembalikan `Nothing`! Cukup elegan kan? Fungsi `<$>` merupakan `fmap` versi infiks dari `fmap`, jadi Anda akan lebih sering menemukannya seperti ini:

```
getPostTitle <$> (findPost 1)
```

Contoh lain: apa yang terjadi ketika Anda mengaplikasikan fungsi ke list?

![](http://adit.io/imgs/functors/fmap_list.png)

List ternyata merupakan _functor_ juga! Di bawah ini merupakan definisi _Functor_ dari list

```
instance Functor [] where
    fmap = map
```

Oke, oke, satu contoh terakhir: apa yang terjadi ketika Anda mengaplikasikan fungsi ke fungsi lain?

```
fmap (+3) (+1)
```

Ini adalah ilustrasi dari fungsi:

![](http://adit.io/imgs/functors/function_with_value.png)

Ini adalah ilustrasi saat fungsi diaplikasikan ke fungsi lain:

![](http://adit.io/imgs/functors/fmap_function.png)

Hasilnya merupakan fungsi lain!

```
> import Control.Applicative
> let foo = fmap (+3) (+2)
> foo 10
15
```

Jadi fungsi merupakan Functor juga!

```
instance Functor ((->) r) where
    fmap f g = f . g
```

Ketika Anda menggunakan `fmap` pada sebuah fungsi, itu sama saja dengan melakukan melakukan fungsi komposisi!

## Applicative

_Applicative_ membuat semuanya menjadi lebih menarik. Mirip seperti Functor, nilai yang dibuat yang terbungkus oleh konteks

![](http://adit.io/imgs/functors/value_and_context.png)

Tetapi fungsinya juga terbungkus di dalam konteks juga!

![](http://adit.io/imgs/functors/function_and_context.png)

Yah. Begitulah. Applicative benar-benar menarik. Fungsi `<*>` didefinisikan di `Control.Applicative`, yang mana fungsi tersebut dapat mengaplikasikan fungsi yang terbungkus di suatu konteks ke suatu nilai yang terbungkus di suatu konteks:

![](http://adit.io/imgs/functors/applicative_just.png)

i.e:

```
Just (+3) <*> Just 2 == Just 5
```

`<*>` dapat menjadi lebih menarik dalam situasi tertentu. Contohnya:

```
> [(*2), (+3)] <*> [1, 2, 3]
[2, 4, 6, 4, 5, 6]
```

![](http://adit.io/imgs/functors/applicative_list.png)

Ada beberapa hal yang dapat _Applicative_ lakukan dan tidak dapat dilakukan oleh _Functor_. Bagaimana caranya mengaplikasikan fungsi yang memiliki dua argumen ke dua nilai yang terbungkus

Here's something you can do with Applicatives that you can't do with Functors. How do you apply a function that takes two arguments to two wrapped values?

```
> (+) <$> (Just 5)
Just (+5)
> Just (+5) <$> (Just 4)
ERROR ??? MENGAPA ???
```

_Applicative_:

```
> (+) <$> (Just 5)
Just (+5)
> Just (+5) <*> (Just 3)
Just 8
```

_Applicative_ mengalahkan _Functor_ dalam hal ini. "Pria besar bisa menggunakan fungsi dengan berapapun jumlah argumennya", katanya _Applicative_. "Dengan `<$>` dan `<*>`, aku bisa menggunakan fungsi yang membutuhkan nilai yang terbungkus. Dan aku bisa mengaplikasikan semua nilainya, dan aku akan mendapatkan nilainya terbungkus kembali! HAHAHAHA!"

```
> (*) <$> Just 5 <*> Just 3
Just 15
```

Dan, hei! Sebenarnya ada fungsi `liftA2` yang melakukan hal yang sama:

```
> liftA2 (*) (Just 5) (Just 3)
Just 15
```

## Monad

Langkah-langkah memahami _Monad_:

- Punya gelar S3 di bidang ilmu komputer.
- Buang gelar itu, karena Anda tidak memerlukan itu untuk memahami _Monad_!

_Monad_ membuat semuanya menjadi lebih menarik.

_Functor_ mengaplikasikan fungsi ke nilai yang terbungkus:

![](http://adit.io/imgs/functors/fmap.png)

_Applicative_ mengaplikasikan fungsi yang terbungkus ke nilai yang terbungkus:

![](http://adit.io/imgs/functors/applicative.png)

Monad mengaplikasikan fungsi yang mengembalikan nilai yang terbungkus ke nilai yang terbungkus. _Monad_ memiliki fungsi `>>=` (Baca: _bind_) untuk melakukan hal tersebut.

Mari kita lihat contohnya. `Maybe` merupakan Monad:

![Just a monad hanging out](http://adit.io/imgs/functors/context.png)

Anggap `half` merupakan fungsi yang hanya dapat bekerja dengan bilangan genap:

```
half x = if even x
           then Just (x `div` 2)
           else Nothing
```

![](http://adit.io/imgs/functors/half.png)

Bagaimana jika kita mengaplikasikan nilai yang terbungkus pada fungsi `half`?

![](http://adit.io/imgs/functors/half_ouch.png)

Kita perlu menggunakan `>>=` untuk "menyedot" nilai yang terbungkus dan akan diaplikasikan ke dalam fungsi `half`. Di bawah ini merupakan foto dari `>>=`:

![](http://adit.io/imgs/functors/plunger.jpg)

Beginilah cara fungsi `>>=` bekerja:

```
> Just 3 >>= half
Nothing
> Just 4 >>= half
Just 2
> Nothing >>= half
Nothing
```

Apa yang terjadi sebenarnya? _Monad_ adalah _typeclass_ lain. Di bawah ini merupakan sebagian definisi dari _Monad_:

```
class Monad m where
    (>>=) :: m a -> (a -> m b) -> m b
```

Dimana `>>=` adalah:

![](http://adit.io/imgs/functors/bind_def.png)

Jadi `Maybe` adalah Monad:

```
instance Monad Maybe where
    Nothing >>= func = Nothing
    Just val >>= func  = func val
```

Ini yang terjadi dengan `Just 3`!

![](http://adit.io/imgs/functors/monad_just.png)

Dan jika Anda memasukan `Nothing` ke dalam fungsi tersebut.

![](http://adit.io/imgs/functors/monad_nothing.png)

Anda juga bisa menggabungkan fungsi tersebut:

```
> Just 20 >>= half >>= half >>= half
Nothing
```

![](http://adit.io/imgs/functors/monad_chain.png)

Keren! Sekarang kita tahu kalau `Maybe` merupakan _Functor_, _Applicative_, dan juga _Monad_.
Sekarang mari kita membahas contoh lainnya: _Monad_ `IO`:

![](http://adit.io/imgs/functors/io.png)

Kita akan membahas tiga fungsi yang umum digunakan. `getLine` yang tidak memiliki argumen dan mengambil input dari pengguna:

![](http://adit.io/imgs/functors/getLine.png)

```
getLine :: IO String
```

`readFile` menerima string (berupa nama berkas) dan mengembalikan konten berkas:

![](http://adit.io/imgs/functors/readFile.png)

```
readFile :: FilePath -> IO String
```

`putStrLn` menerima string dan menampilkannya:

![](http://adit.io/imgs/functors/putStrLn.png)

```
putStrLn :: String -> IO ()
```

Ketiga fungsi di atas menerima nilai biasa (atau tidak) dan mengembalikan nilai yang terbungkus. Kita dapat menggabungkan operasi ketiganya menggunakan `>>=`!

![](http://adit.io/imgs/functors/monad_io.png)

```
getLine >>= readFile >>= putStrLn
```

Mantap! Ajegile _Monad_!

Haskell juga menyediakan kita dengan _syntatic sugar_ untuk _Monad_, namanya notasi `do`:

```
foo = do
    filename <- getLine
    contents <- readFile filename
    putStrLn contents
```

## Kesimpulan

1. _Functor_ merupakan tipe data yang mengimplementasikan _typeclass_ _Functor_.
2. _Applicative_ merupakan tipe data yang mengimplementasikan _typeclass_ _Applicative_.
3. _Monad_ merupakan tipe data yang mengimplementasikan _typeclass_ _Monad_.
4. _Maybe_ mengimplementasikan ketiga-tiganya, jadi _Maybe_ adalah _Functor_, _Applicative_, sekaligus _Monad_.

Apa perbedaan diantara ketiga-tiganya?

![](http://adit.io/imgs/functors/recap.png)

_functors_: anda mengaplikasikan fungsi ke data yang terbungkus menggunakan `fmap` atau `<$>`
_applicatives_: anda mengaplikasikan fungsi yang terbungkus ke data yang terbungkus menggunakan `<$>` atau `liftA`
_monads_: anda mengaplikasikan fungsi yang mengembalikan nilai yang terbungkus dengan nilai yang terbungkus menggunakan `>>=` atau `liftM`

---

Entri ini merupakan terjemahan dari [Functors, Applicatives, And Monads In Pictures](http://adit.io/posts/2013-04-17-functors,_applicatives,_and_monads_in_pictures.html) oleh Aditya Bhargava
