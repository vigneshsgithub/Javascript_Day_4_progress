JavaScript Concepts and Challenges

1. Template Literals

Using template literals to easily insert variables into a string.

2. Object Literals

Creating an object with city and state and adding a default country value.

3. For-Of Loop (String)

Looping through each letter in a name.

4. For-Of Loop (Array of Objects)

Iterating through an array of students and printing their names and cities.

5. Spread Operator

Expanding an array by adding new elements while keeping the original data.

6. Default Parameters

Setting a default value for a function parameter in case no argument is provided.

7. Includes Method

Checking if an array contains a specific value.

8. Import & Export

Creating a function to add numbers and making it reusable across files.

9. padStart and padEnd Methods

Adding characters to the start or end of a string to reach a specified length.

10. Classes in JavaScript

Defining a class for a product and displaying product details using a method.

11. Inheritance in Classes

Creating a parent class (Player) and a child class (Badminton Player) to reuse and extend properties.

12. Promises (Async Operations)

Simulating an asynchronous transaction process with success and failure conditions.

13. Fetch API

Fetching data from an external API and handling the response.

14. Switch Case

Using a switch statement to execute different actions based on a variable's value.

15. Loops (For, While, Do-While)

Different looping techniques to repeat actions multiple times.

16. if-else Conditions

Using conditions to execute specific code blocks based on comparisons.

17. Map Function (Array Operations)

Transforming arrays by applying a function to each element, such as finding square roots, doubling numbers, or converting text to uppercase.

18. forEach Method

Iterating through an array and performing actions like summing values or finding the maximum number.

19. Combining Arrays with map()

Merging two arrays by pairing their elements together.

20. Extracting Information from an Array

Using map() to generate structured information about an array's content.

21. Working with Objects Using for-in Loop

Iterating through object properties and displaying key-value pairs.

22. forEach Method with Objects

Looping through an array of objects and extracting specific details.

23. Applying forEach to Create a New Array

Using forEach to transform an existing array by applying operations like multiplication.

24. Finding Maximum Value in an Array

Using forEach to iterate through an array and determine the largest value.

25. Do-While Loop

Executing a loop at least once before checking the condition.

26. Finding Eligibility to Vote Using map()

Transforming an array of user data to determine voting eligibility.

27. Converting Strings to Uppercase Using map()

Applying the map function to capitalize each word in an array.

28. Creating a New Array with Doubled Values Using map()

Multiplying each element in an array by two and storing the results.

29. Handling API Calls with Async/Await

Using async/await to fetch data and handle responses cleanly.

30. Uploading Photos with Async/Await

Simulating an image upload process using Promises and async/await.



JavaScript Array Methods Explained in Simple Terms

1. Slice()

Extracts a portion of an array without modifying the original array.

2. Length Property

Returns the total number of elements in an array.

3. Flattening an Array using Reduce

Converts a nested array into a single-level array.

4. Finding the Largest Element using Reduce

Finds the maximum value in an array using the reduce function.

5. Splice()

Adds, removes, or replaces elements in an array while modifying the original array.

6. Concat()

Merges two or more arrays into one new array.

7. Sorting an Array

Sorts elements in an array in ascending or descending order.

8. Sorting an Array of Objects

Sorts objects based on a property, either in ascending or descending order.

9. Fill()

Fills all or specific parts of an array with a static value.

10. Includes()

Checks if a specified element exists in an array.

11. Join()

Joins all array elements into a string with a specified separator.

12. Reverse()

Reverses the order of elements in an array.

13. Push()

Adds elements to the end of an array.

14. Pop()

Removes the last element from an array.

15. Shift()

Removes the first element from an array.

16. Unshift()

Adds elements to the beginning of an array.

17. IndexOf()

Finds the first occurrence of an element in an array.

18. LastIndexOf()

Finds the last occurrence of an element in an array.

19. Every()

Checks if all elements in an array satisfy a given condition.

20. Some()

Checks if at least one element in an array satisfies a given condition.

21. Cloning an Array

Different methods to create a copy of an array using:

Spread Operator

Slice Method

Concat Method

22. Array.from() -- to clone an array


Objects in javascript:


1. Creating Objects

Objects can be created in different ways, like using curly braces {} or the new Object() method.

Objects store related data and functions together.

2. Accessing and Modifying Object Properties

Dot notation (object.property) and bracket notation (object['property']) can be used to get or update values.

3. Deleting Object Properties

The delete keyword removes a property from an object.

4. Checking if a Property Exists

The in operator and hasOwnProperty() method help check if a property exists in an object.

5. Looping Through Objects

for...in loops can iterate over object properties.

6. Extracting Keys, Values, and Entries

Object.keys() gets all keys, Object.values() gets all values, and Object.entries() converts an object into an array.

7. Freezing and Sealing Objects

Object.freeze() prevents changes to an object.

Object.seal() allows modification but prevents adding or removing properties.

8. Object Prototypes and Inheritance

Objects can inherit properties using __proto__, setPrototypeOf(), and getPrototypeOf().

9. Creating Objects from Arrays

Object.fromEntries() converts an array into an object.

10. Object References and Comparison

Objects are stored by reference, meaning modifying one reference changes all copies.

JSON.stringify(obj1) === JSON.stringify(obj2) is used to compare objects.

11. Shorthand Properties and Destructuring

Variables can be directly used in objects without writing key-value pairs separately.

Destructuring allows extracting values from objects easily.

12. Spread and Rest Operators

The spread operator (...) helps copy and merge objects quickly.