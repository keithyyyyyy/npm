// ***IMPORTING SELF MADE MODULES***
// each file is considered a module 
// to import, you mostly need to "module.exports = <stuff (string, int, arr, dict, etc)>"
// then, use "const <module name> = require('<path>')"

// calling from names.js
const names = require('./names')
// console.log(names)
// console.log(names['john'])
// console.log(names['group'])

// calling from functions.js
// using the function: <function name>(inputs)
const sayHi = require('./functions.js')
// sayHi('keith')
// sayHi(names['john'])

// alternate way to export
const name = require('./alternative.js') //{ name: 'keith' }
// console.log(name)

// invoke something from source code
// this one dn to use "module.exports"
const source_invocation = require('./source_invocation')
