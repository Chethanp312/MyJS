/*
    1. Prefer not to use var because of issue in block scope & functional scope.
    2. Use cont and let keywords for declaring constants and variables.

*/

const Name ="Chethan"
const AccountId = 144554
let AccountEmail = "chethanp312@gmail.com"
let AccountPassword = "11223344"

AccountEmail = "rama@gmail.com"

console.log(AccountId);
console.table([Name,AccountEmail,AccountPassword]);

