const faker = require('faker');

const generate = ()=> {
  const users = [];
  const userList = document.querySelector('#user-list');
  while(users.length < 50){
    users.push(faker.helpers.userCard());
  }
  return users;
};

module.exports = generate;
