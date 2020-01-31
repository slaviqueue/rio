# rio🦜
A little language for me to practice in interpreters theory and for programming newcomers to learn coding fundamentals.

<img width="403" alt="Screen Shot 2020-01-30 at 6 36 11 PM" src="https://user-images.githubusercontent.com/20744231/73469730-8345de80-438f-11ea-933a-b56a01edc744.png">

### Why?

I'm trying to make this language as much human readable as possible. Since Rio supports higher order functions, you can create your own prefix and infix operators like in Haskell (in fact they just look like operators, it's just syntactic sugar). Hopefully, this posibillity will allow one to create some kinds of pretty internal DSL's.

For now Rio has build in arithmetical operators, which are just functions and should be called in lisp manner, i.e:

```javascript
sum(div(2, 32), 0)
```

Or via infix notation:
```javascript
2 'div' 32 'sum' 0
```

***Attention***, since arithmetical operators are just functions, mathematical operator precendence is not precerved. Infix function calls are right-asssociative. So expression above will be calculated like this `2 / (32 + 0)`

### Constant declaration

Variables in Rio are immutable. To not confuse novice programmers with false expectation of variable reassigment possibility, there's not assignment operator. Instead there's `is`, i.e:

```
value name is "Semen"
```
We're just stating that something **is** something else.
