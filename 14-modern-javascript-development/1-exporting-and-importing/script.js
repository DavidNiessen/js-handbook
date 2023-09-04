// Because this is a module, strict mode is activated

import './imports/script1.js';
// OUTPUT: Script 1


// NAMED IMPORTS/EXPORTS
// Export single variables (SEE script2.js)
// Imports can also be renamed with the "as" keyword
import {PI, add, mp as multiply} from './imports/script2.js';

console.log((PI)); // 3.142
console.log(add(1, 2)); // 3
console.log(multiply(5, 5)); // 25

// Export multiple variables at once (see script3.js)
import {someVariable, someFunction} from './imports/script3.js';

console.log(someVariable); // ABC
console.log(someFunction('XY')); // XYXY

// Import everything from another script
import * as Tools from './imports/script2.js';

console.log(Tools.PI); // 3.142

// DEFAULT IMPORTS/EXPORTS
// Used when you only want to export one single variable (see script2.js)

// You can give it any name you want
import abc from './imports/script2.js';
import xyz from './imports/script2.js';

abc(); // DEFAULT EXPORT
xyz(); // DEFAULT EXPORT

