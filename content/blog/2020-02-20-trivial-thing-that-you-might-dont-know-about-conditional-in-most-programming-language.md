+++
title = "Trivial Thing That You Might Don't Know About Conditional in Most Programming Language — Short Circuit Evaluation"
date = 2020-02-20
# thumbnail = "https://images.unsplash.com/photo-1562408590-e32931084e23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"

[taxonomies]
categories = [
  "programming"
]
tags = [
  "programming"
]
+++

When I discuss [flood fill](https://en.wikipedia.org/wiki/Flood_fill) algorithm in computer graphics and animation course with my professor, he say something about **AndAlso** operator (The **AND** logical operator that will not evaluate right side value if the left side value is true) that only exists in Visual Basic language. The code is something like this

```
void fill(pixels, x, y, color)
{
    // If you call get_color on x < 0, it will be out of bound error
    // Using AndAlso, if x is less than 0, it will not execute the 
    // `get_color` function
    if(x >= 0 AndAlso get_color(pixels, x - 1, y) != color)
    {
        fill(pixels, x - 1, y, color)
    }
    ...
}
```

But, when I check on some website, I found something interesting, it seems that the "most known" **AND** operator is `AndAlso` and you can also use "unpopular" **bitwise AND** operator.

From Wikipedia

> Short-circuit evaluation, minimal evaluation, or McCarthy evaluation (after John McCarthy) is the semantics of some Boolean operators in some programming languages in which the second argument is executed or evaluated only if the first argument does not suffice to determine the value of the expression: when the first argument of the AND function evaluates to false, the overall value must be false; and when the first argument of the OR function evaluates to true, the overall value must be true.

## AND operator

In short circuit AND operation, if left value of AND operator is `false`, then the condition will be `false` without having to evaluate the value on the right side.

```
Value on the left side
  | 
  v
false  &&  true/false  =  false
             ^              ^
             |              |
Value on the right side.    |
Not evaluated!              |
                          No matter the value on the right side,
                          as long as the value on the left side
                          is false, the result will be false.
```

**Example**

```
bool left()
{
    printf("This is left side\n");
    return false;
}

bool right()
{
    printf("This is right side\n");
    return true; // or false, whatever you like.
}

...

if (left() && right())
{
    ...
}
...
```

**Output**

```
This is left side
```

But, if the left value is `true`, then the program will have to evaluate the value on the right side.

```
Value on the left side
  | 
  v
true  &&  true/false  =  true/false
             ^               ^
             |               |
Value on the right side.     |
                             |
                          If the right side value
                          is true, then the result
                          will be true. Vice-versa
```
If the right side value
                          is true, then the result
                          will be true. Vice-versa
## OR operator

The short circuit applies the same rule with the AND operator, but inverted.

If the left side is `false`, then it will not evaluate the expression on the right side and the condition will be `false`. But if the left side is `true`, then it will evaluate the expression on the right side as it become required to know the predicate result.

```
Value on the left side
  | 
  v
true  ||  true/false  =  true
             ^             ^
             |             |
Value on the right side.   |
Not evaluated!             |
                          No matter the value on the right side,
                          as long as the value on the left side
                          is true, the result will be true.
```

```
Value on the left side
  | 
  v
false  ||  true/false  =  true/false
             ^                ^
             |                |
Value on the right side.      |
                              |
                          If the right side value
                          is false, then the result
                          will be false. Vice-versa
```

## The Truth

So, actually

```
#include <cstdio>

bool is_even(int val)
{
    return val % 2 == 0;
}

bool is_divisible_by_3(int val)
{
    return val % 3 == 0;
}

int main()
{
    int a;
    scanf("%d", &a);
    
    if (is_even(a) && is_divisible_by_3(a))
    {
            printf("Nice\n");
    }
}
```

is identic with

```
#include <cstdio>

bool is_even(int val)
{
    return val % 2 == 0;
}

bool is_divisible_by_3(int val)
{
    return val % 3 == 0;
}

int main()
{
    int a;
    scanf("%d", &a);

    if (is_even(a))
    {
        if(is_divisible_by_3(a))
        {
            printf("Nice\n");
        }
    }
}
```

You can compare the generated assembly here [https://godbolt.org/z/YePZ8F](https://godbolt.org/z/YePZ8F)

## What is Important About This?

It will be very fatal if you have a required side effect (e.g write a log) from both left and right value when you are **using short circuit operator** or if are **not using short circuit operator** when the evaluation of right side value is depends on the left side value

```
array = [1, 2, 3];
index = 10;
// Will be error without short circuit
if(out_of_bounds(array, index) & is_even(array[index]))
{
    ...
}
```

## Fun Fact

Edsger W. Dijkstra criticized the short circuit operator

> The conditional connectives — "cand" and "cor" for short — are ... less innocent than they might seem at first sight. For instance, cor does not distribute over cand: compare
>
> (A cand B) cor C with (A cor C) cand (B cor C);
>
> in the case ¬A ∧ C , the second expression requires B to be defined, the first one does not. Because the conditional connectives thus complicate the formal reasoning about programs, they are better avoided.

[http://www.cs.utexas.edu/users/EWD/ewd10xx/EWD1009.PDF](http://www.cs.utexas.edu/users/EWD/ewd10xx/EWD1009.PDF)

---

Checkout [Short-circuit evaluation - Rosetta Code](https://rosettacode.org/wiki/Short-circuit_evaluation) to see the list of programming language that supports short-circuit evaluation. 

## Reference

- [https://en.wikipedia.org/wiki/Short-circuit_evaluation](https://en.wikipedia.org/wiki/Short-circuit_evaluation)
