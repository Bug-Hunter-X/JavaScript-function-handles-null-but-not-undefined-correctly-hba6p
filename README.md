# JavaScript Function Bug: Handling Null vs. Undefined

This repository demonstrates a common JavaScript bug related to handling null and undefined values in functions.  The function `foo` correctly handles null values but fails to properly address undefined inputs, resulting in `NaN` which may not be expected behavior.

The `bug.js` file contains the buggy code.  The `bugSolution.js` file provides a corrected version that explicitly checks for both null and undefined, returning a more predictable result.