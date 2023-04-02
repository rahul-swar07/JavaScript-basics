JavaScript

Agenda
- JavaScript for developers.
- Differences between JavaScript and classical languages.
- Unique concepts.
- Resources and next steps.
- What is JavaScript?
- Why learn it?
- History of the language.
- Heads up on some problems.

What is JavaScript?
- JavaScript (often shortened to JS) is a lightweight, interpreted, object-oriented language with first-class functions, and is best known as the scripting language for Web Pages, but it's used in many non-browser environments as well.
- Lightweight language - small memory footprint, easy to implement.
- Interpreted language - no compilation, instructions executed directly.
- Object-oriented language - modeled around objects.
- First-class functions - functions as values.
- Scripting language - instructions written for a runtime environment.
- Runtime environment - browser makes a http request to server, server responds with HTML content, browser converts this HTML content into object tree (DOM), wherein JavaScript has the oppurtunity to modify the nodes of this DOM tree, to add dynamic functionality to the Web Page.

Why learn JavaScript?
- Client side web development - Native JavaScript, jQuery, AngularJS, ReactJS, Ember
- Server side web development - NodeJS, Express.
- Browser Extensions - plugins, addons.
- Desktop Applications.
- Mobile Applications.
- IoT Applications.
- JavaScript is the most loved as well as the most hated programming language.

History of JavaScript
- Created by Brendan Eich at Netscape.
- Created to complement Java.
- Designed to be "easy".
-  Standardized as ECMAScript.

Development Environment
- Web Browser (Chrome, FireFox, Safari).
- Code Editors (VS Code).

Variable Decalaration
- var value = 42;
- var value; value = 42;  

Declaration
- var value;

Definition
- value = 20;

Primitives / Primitive Types
- Number - numbers in JavaScript are "double precision 64-bit format IEEE 754 values". (No Integers!).
- String - sequences of Unicode characters (16-bit). (No Character type, a Character is just a String of length 1!).
- Boolean - true / false
- Undefined - the value between variable decalartion and definition.
- Null - the field does not contain any content.
- Symbol - it is an enumeration of bunch of values / constants. (ECMAScript 6).

Undefined Vs Null
- undefined is applicable when a variable is declared but doesn't have a definition or actual value assigned to it, so it is like the midway stage value that a variable holds between it's declarartion and definition.
- null is a value that is assigned to variables for which the user inputs the value of that field that is generally Not Applicable (N.A.) to him / her.

Types and Variables 
- No neeed to declare variable type.
- The same variable can be assigned values of different types.
- No scoping information in variable declaration (no data variable constraints like public, private, protected, etc.).
- Variables and values can be "interrogated".


"typeof" Operator
- Tells the type of variable that is declared or defined or created.
- typeof <value>
- typeof <variable>
- Bug in JavaScript - typeof null --> returns object.

Type Coercion and "===" Operator
- Type Coercion is the automatic type conversion that JavaScript performs on variables. 
- Concatenation with String values --> 123 + "4" = "1234". (number + string = string).
- "=" - is an assignemnt operator.
- "==" - checks if values of both variables present on either side of it are equal irrespective of their types. ("123" == 123 will return true). (JavaScript converts the type of one operand to the other) (in this case number gets converted to string).
- "===" - checks if values of both variables present on either side of it are equal as well as their types are same. ("123" === 123 will return false but 123 === 123 / "123" === "123" will return true).

Type Coercion Summary
- If a number variable is 0, then in conditional statement it returns false boolean value, whereas if it has any non-zero value (positive or negative) then it returns true boolean value in conditional statement.
- If a string variable is empty (""), then in conditional statement it returns false boolean value, whereas if it has any non-zero number of characters (1 or greater than 1) then it returns true boolean value in conditional statement.
- If a variable holds undefined value, it returns false boolean value in conditional statements.
- If a variable holds null value, it returns false boolean value in conditional statements.
- JavaScript is "flexible" with typing.
- Values of all types have an associated Boolean value.
- Always use "==="operator for precise value checks on it's operands (both value and type).

Objects
- JavaScript is an Object-oriented programming language, but it's not class based.
- Consists of pair of properties / keys / fields and their corresponding values. 
- Think of Objects in JavaScript as a Map or a HashMap with keys - value pairs.
- Object literal - declaring an object and defining or initialising the object with it's properties and their corresponding values.
- There are no accessors (private, protected, public, etc.) for properties in JavaScript Objects.
- Accessing property of an object that doesn't exist return undefined.

Objects Summary
- Free-form - not bound to a class.
- Object literal notation to create Objects (declaring an object and defining or initialising the object with it's properties and their corresponding values).
- Objects properties can be accessed directly.
- New properties can be added on objects directly.
- Objects can have methods. 

Dot and Square Bracket [] Notations
- Dot notation is not the only way to access the properties of objects.
- Square Bracket [] notation is the other type of notation that can be used to access object properties.
- Use Square Bracket [] notation only when - property name is reserved word / invalid identifier. - property name starts with a number. - property name is dynamic.
- Dot notation is typically faster than the Square Bracket [] notation.

Arrays
- To declare and initialise a JS Array : var myArray = [100, 200, 300];
- To access values of JS Array : myArray[0] = 100, myArray[1] = 200, myArray[2] = 300, myArray[3] = undefined;
- JS Array is actually a JS Object.
- array.length --> object.property.
- Arrays are objects with property names as numbers beginning from 0.
- myArray[0] is same as myArray["0"].
- It is actually myArray["0"] only, but when we put myArray[0], JS does type coercion from number 0 to string "0" internally.
- The length property of JS Arrays does not actually give the actual length of the array, it just provides the last filled index of the Array + 1. Basically, it is a pointer to index just next to last filled index of the Array.
- Array indexes can also be non - number values.

Wrapper Objects
- String is a primitive, then how does length property work on it?
- When a string length property is called it internally converts string variable to it's equivalent String Wrapper Object.
- Which in turn allows to use length property on it.
- String, Number, Boolean and Symbol primitives have their corresponding Wrapper Objects.

Functions
- Anything that takes a bunch of arguments, processesthem and returns the result.
- JavaScript functions have flexible argument counts.
- JavaScript does not support Overloaded functions (functions with same name but different arguments).
- JavaScript functions supports Function Expressions or first class functions, wherein functions are itself values to variables and therefore it also supports Anonymous Function Expressions.
- JavaScript allows functions to pass as arguemnts to other functions.
- JavaScript allows functions on objects.


Anonymous Functions


"this" keyword