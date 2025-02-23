# Unexpected Null Handling in JavaScript Function

This repository demonstrates a subtle bug in a JavaScript function related to null handling. The `foo()` function unexpectedly returns 0 when either `a` or `b` is null, masking potential errors.

The bug and its solution are presented in separate files: `bug.js` and `bugSolution.js`.

## Bug Description

The original `foo()` function returns 0 if either input parameter `a` or `b` is null. This is problematic because it doesn't distinguish between an actual result of 0 and the case where an input value was missing.  A more robust solution should handle null values differently, perhaps throwing an error or returning a specific value that clearly indicates missing input.

## Solution

The `bugSolution.js` file offers an improved implementation, showcasing how to handle null values more effectively.