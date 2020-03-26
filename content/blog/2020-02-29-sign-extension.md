+++
title = "Sign Extension"
date = 2020-02-29
# thumbnail = "https://images.unsplash.com/photo-1506287375451-bb850eba44d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80"

[taxonomies]
categories = [
  "programming"
]
tags = [
  "programming",
  "binary"
]
+++

From Wikipedia

> Sign extension is the operation, in computer arithmetic, of increasing the number of bits of a binary number while preserving the number's sign (positive/negative) and value. This is done by appending digits to the most significant side of the number, following a procedure dependent on the particular signed number representation used.

# Changing the Bit Size

You can't move signed 2's complement integer to another datatype with a different size without sign extension.

Sign extending means copying the sign value to the extended bit.

For example 8-bit encoding of -51 (In 2's complement) in binary is

```
51 = 00110011 (32 + 16 + 2 + 1)

then

-51 = 11001100 + 00000001 (Invert all bits and add it with 1)

So

-51 = 11001101
```

When the bits are extended (for example) to 16-bit, you can't just extend the bit with zero.

```
-51 in 8-bit = 11001101
205 in 16-bit (without sign extension) = 00000000 11001101
205 in 32-bit (without sign extension) = 00000000 00000000 00000000 11001101
```

Instead, you have to fill the extended bits with the sign value (In this case the sign is 1 because sign 1 represents negative value, where 0 represents zero or positive value)

```
-51 in 8-bit = 11001101
-51 in 16-bit (with sign extension) = 11111111 11001101
-51 in 32-bit (with sign extension) = 11111111 11111111 11111111 11001101
```

It applies the same thing to zero and positive value

```
51 in 8-bit = 00110011
51 in 16-bit = 00000000 00110011
51 in 16-bit = 00000000 00000000 00000000 00110011
```

## Pseudocode

```
// Steps on example case:
// Suppose we want to extend -51 bit from 8-bit to 16-bit
//
// -51 from 8-bit
// 11001101
//
// Coppied to 16-bit
// 00000000 11001101
//
// Shift (shift_count - 1)-times (the length of bit size from),
// in this case shift_count is 8. And check wether it's zero or not
// 00000000 00000001
//
// It's not zero, then do OR operator with 0xFFFF shifted
// shift_count-times
// 11111111 00000000
// 00000000 11001101
// ----------------- OR
// 11111111 11001101
int sign_extend(int value, bit_count)
{
    if ((value >> (bit_count - 1)) & 1 != 0)
    {
        # This pseudocode extend any bit with a ≤ 16-bit
        # difference e.g 16-bit to 32-bit
        # if you want to extend with a greater difference,
        # you have to modify the shifted maximum bit
        # (the 0xFFFF) in correspond bit
        # For example for 32-bit difference, you have to
        # use 0xFFFFFFFF
        #
        # Note:
        # 0xFFFF is equal to 11111111 11111111
        value |= (0xFFFF << bit_count);
    }
    return value;
}
```

The time complexity is O(1)

## Reference

- [https://justinmeiners.github.io/lc3-vm/src/lc3-alt.cpp](https://justinmeiners.github.io/lc3-vm/src/lc3-alt.cpp)
- [http://www.c-jump.com/CIS77/CPU/Numbers/U77_0160_sign_extension.htm](http://www.c-jump.com/CIS77/CPU/Numbers/U77_0160_sign_extension.htm)
