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

Dot and Bracket Notations


Arrays


Functions


Anonymous Functions


"this" keyword