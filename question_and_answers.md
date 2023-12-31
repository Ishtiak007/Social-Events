<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: - A: `{}`

<i>Explanation here :</i>
-We declare a variable named `greeting` using the `let` keyword. This variable will be used to store some data.

-We then assign an empty object `{}` to the `greeting` variable using the assignment operator `=`. This means that the variable `greeting` now holds an empty JavaScript object.

-Finally, we use `console.log(greeting)` to log the value of the `greeting` variable to the console. This will display the empty object `{}` in the console output.

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: - C: `"12"`

<i>Explanation here :</i>
-The `sum` function is called with arguments `1` and `"2"`.

-Inside the function, it attempts to add `a` and `b`. Since `a` is a number (`1`) and `b` is a string (`"2"`), Javascript performs type coericon to convert the number `1` to string and the concatenates the two strings.

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: - A: `['🍕', '🍫', '🥑', '🍔']`

<i>Explanation here :</i>
-The food array is created with four elements: "🍕", "🍫", "🥑", and "🍔".

-The info object is created with a favoriteFood property that is initially set to "🍕" because it's the first element of the food array.

-The line info.favoriteFood = "🍝"; updates the value of the favoriteFood property in the info object to "🍝".

-When you log the food array to the console using console.log(food);, it will display the original array with no changes. The array food is not affected by the change made to the info object.

-So, the output will be the original array ["🍕", "🍫", "🥑", "🍔"].
</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: - B: `Hi there, undefined`

<i>Explanation here :</i>
-The code you provided defines a function `sayHi` that takes one parameter `name` and returns a string containing a greeting. However, when you call `sayHi()` without providing an argument, it will use an undefined `name` parameter.

-In JavaScript, when you concatenate a string with `undefined`, it converts `undefined` to the string `"undefined"`. So, the output of `console.log(sayHi());` will be:

"Hi there, undefined"

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: - C: 3

<i>Explanation here :</i>
-The `forEach` method iterates through each element of the `nums` array.

-For each element, the code inside the arrow function ``(num) => {...}` is executed.

-In the arrow function, there's an `if` condition that checks if the current element `num` is truthy (not equal to `0`).

-If the condition is true (i.e., `num` is a non-zero number), it increments the `count` variable by `1`.

-After the loop, the `count` variable holds the count of truthy elements in the `nums` array.

-Since there are three truthy elements in the nums array (`1`, `2`, and `3`), the `count` variable will be `3`. Therefore, the output of `console.log(count);` will be: `3` (number)

</p>
</details>