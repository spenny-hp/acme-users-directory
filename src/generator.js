const faker = require("faker");
const users = new Array(50).fill("").map((_) => faker.helpers.userCard());

module.exports = {
    users
}