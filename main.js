const validator = require("validator");

const email1 = "test@test.com";
const email2 = "abcDE123";

console.log(`Is "${email1}" a valid email?`, validator.isEmail(email1));
console.log(`Is "${email2}" a valid email?`, validator.isEmail(email2));
