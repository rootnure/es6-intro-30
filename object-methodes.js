const waterMug = {
    madeOf: 'glass',
    color: 'transparent',
    price: 50,
    isWashed: true
};

// console.log(waterMug);

/* Object.keys() --> returns all property names as array of string */
const keys = Object.keys(waterMug);
// console.log(keys);

/* Object.values() --> returns all property values as array of values */
const values = Object.values(waterMug);
// console.log(values);

/* Object.entries() --> returns the object as array of arrays (two dimensional array) */
const entries = Object.entries(waterMug);
// console.log(entries);

/* delete --> remove a specific property from an object */
const propertyNameToRemove = 'isWashed';
// delete waterMug[propertyNameToRemove];
// console.log(waterMug);

/* delete (by using destructuring) */
// const {isWashed, ...newMug} = waterMug; // directly using property name
const {[propertyNameToRemove]: _, ...newMug} = waterMug; // property name in a variable
// console.log(newMug);

/* Object.freeze() --> Prevents modification of existing property / values and adding new properties */
Object.freeze(waterMug);
waterMug.color = 'blue'; // changing property value won't work as object if freeze
delete waterMug.price; // delete property won't work as object is freeze
waterMug.madeIn = 'Bangladesh'; // adding new property won't work as object is freeze
// console.log(waterMug);

/* Object.seal() --> Prevents modification of existing property or adding new properties (value can change or update) */
Object.seal(newMug);
newMug.color = 'blue'; // changing property value will work perfectly as object if seal
delete newMug.price; // delete property won't work as object is seal
newMug.madeIn = 'Bangladesh'; // adding new property won't work as object is seal
console.log(newMug);
