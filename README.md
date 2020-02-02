# rio🦜
A little language for me to practice in interpreters theory.

<img width="403" alt="Screen Shot 2020-01-30 at 6 36 11 PM" src="https://user-images.githubusercontent.com/20744231/73469730-8345de80-438f-11ea-933a-b56a01edc744.png">

### Why?

For some reason, programming language designers are still making such things as arithmetical operations, pipe operators (`.` in haskell, `|>` in f-sharp) and even such utility stuff as printing output (`print` operator in perl) first class citizens of languages. By doing this, they bring  a lot of garbage to language axiomatics. Why the heck I can't import a function that does printing or function composition from some module or namespace?

Idea of Rio is to get rid of how much out-of-the-box-syntax-stuff as possible and to give programmer a freedom to define his own operators and stuff. This freedom gives you a possibility to create your own pretty internal DSL's.

For example:

```
value <| is function of (fn, v) do fn(v) end
values result is do_some_more_complex_stuff '<|' do_complex_stuff '<|' do_stuff '<|' 4
```

That's all, you had to write just a single line of code to be able to use f-sharp's pipe operator. But in exchange, you've now got a possibility to define any operator you want by just creating a function with any name you want.

```
value >>> is function of (value) do log(value) end
>>>' "Hello, world"
```

For now Rio has build-in arithmetical operators. In future I'm gonna move them to separate namespace, so that client will need to import them implicitly, like:
```
use Math from "Math"
```
Now operators in rio are just built in functions and should be called in a lisp manner:

```javascript
sum(div(2, 32), 0)
```

Or via infix notation:
```javascript
2 'div' 32 'sum' 0
```

***Attention***, since arithmetical operators are just functions, mathematical operator precendence is not preserved. Infix function calls are right-asssociative. So expression above will be calculated like this `2 / (32 + 0)`

### Constant declaration

Variables in Rio are immutable. To not confuse novice programmers with false expectation of variable reassigment possibility, there's no assignment operator. Instead there's `is`, i.e:

```
value name is "Simon"
```
We're just stating that something **is** something else.

### Lambdas

Functions in rio are high order, meaning they are data, as well as numbers, strings, etc. We can declare a function with `function of (arg, ...args) do ... end` notation. Result of function invocation is the last expression inside it's body (yay, just like in ruby; btw function declaration syntax is prety similar to what we have in ruby)

For example:

```
value greet is function of (name) do
  "Hello " 'concat' name 'concat' "!"
end
```

In example above you can notice, that strings are concatenated with something, which is called `concat` and is enclosed in single quotes. `concat` is just some function, which accepts two string arguments and concatenate them. `'concat'` is a special syntax for infix function invocation. Any function which accepts two arguments can be invoked in this manner.

```
value somehow_affected_by is function of (a, b) do
  div(sum(a, b), 2)
end

value result is 3 'somehow_affected_by' 4

> 3.5
```

Prefix notation is supported as well:

```
value increment is function of (n) do
  n '+' 1
end

value incremented_five is increment' 5

> 6
```

### Todos
- [ ] Introduce namespaces
- [ ] Implement basic data structures

