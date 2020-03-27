+++
title = "Algorima Pengacakan Fisher—Yates"
date = 2020-03-12

[taxonomies]
categories = [
  "programming",
  "computer science",
  "algorithm"
]
tags = [
  "programming",
  "algorithm"
]
+++

Algoritma pengacakan Fisher—Yates merupakan algoritma yang menghasilkan permutasi acak dari suatu koleksi. Algoritma ini merupakan algoritma pengacakan paling efektif. Nama Fisher—Yates berasal dari Ronald Fisher dan Frank Yates. Algoritma ini juga dikenal sebagai algoritma pengacakan Knuth yang mempopulerkan algoritma ini di bukunya.

Di algoritma pengacakan Fisher—Yates, elemen yang sudah teracak posisinya tidak akan diacak lagi.

## Kode

```
#include <bits/stdc++.h>

void fisher_yates_shuffle(int arr[], int n)
{
  for (int i = 0; i < n; ++i)
  {
    int j = (rand() % n) + 1;
    std::swap(arr[j], arr[i]);
  }
}

// atau

void fisher_yates_shuffle_reversed(int arr[], int n)
{
  for (int i = n - 1; i >= 1; --i)
  {
    int j = rand() % (i + 1);
    std::swap(arr[j], arr[i]);
  }
}
```

Dengan *time complexity* O(n) dan *space complexity* O(1) (dengan asumsi fungsi `rand()` memiliki *time complexity* O(1))

## Visualisasi

<div id="fisher-yates-visualizer" style="position: relative;"></div>
<script type="text/javascript" src="/assets/js/p5.min.js"></script>
<script type="text/javascript" src="/assets/misc/fisher-yates/index.js"></script>

Embed this

```
<div id="fisher-yates-visualizer" style="position: relative;"></div>
<script type="text/javascript" src="https://andraantariksa.github.io/assets/js/p5.min.js"></script>
<script type="text/javascript" src="https://andraantariksa.github.io/assets/misc/fisher-yates/index.js"></script>
```

---

**Referensi dan bacaan lanjut**

- https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
- https://www.i-programmer.info/programming/theory/2744-how-not-to-shuffle-the-kunth-fisher-yates-algorithm.html