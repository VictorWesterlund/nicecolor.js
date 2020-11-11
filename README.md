# NiceColor.js
Generate sleek, modern, nice colors with pure JS.

## Get started
Everything needed for NiceColor.js to work is included in the class, no dependencies.

NiceColor.js comes in two versions; `NiceColor.js` as a stand-alone class, and `module/NiceColor.mjs` for use with [ECMAScript Modules](https://tc39.es/ecma262/#sec-modules).

### As a class

1. Copy the contents of `NiceColor.js` into your JS-file.
2. Initialize and generate a color
```javascript
const niceColor = new NiceColor();
niceColor.get(); // Returns HEX-color
```

### As a module

1. Copy the file `module/NiceColor.mjs` into your JS module(s) folder
2. Import `'NiceColor'` from your `type='module'` or Node.js script
```javascript
import { NiceColor } from "./<your-module-dir>/NiceColor.mjs";
```
3. Initialize and generate a color
```javascript
const niceColor = new NiceColor();
niceColor.get(); // Returns HEX-color
```

## Additional Features:

### Get RGB values directly (without #)

The RGB HEX channels are initialized as an array `this.hex` of the class `NiceColor`. You need to generate a color before the values get populated
```javascript
this.hex = [
   null, // Red
   null, // Green
   null // Blue
];
```

Example after `generate()` has been run:
```javascript
this.hex = [
   "FF", // Red
   "16", // Green
   "A2" // Blue
];
```

Get the array with `this.hex` after you've generated a color with `get()` (or `generate()` if you don't care about the final HEX-code at all)

Example:
```javascript
const niceColor = new NiceColor();
niceColor.generate();

console.log(niceColor.hex); // Logs: Array["FF,"16,"A2"]
```