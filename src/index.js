const { users } = require('./generator')
const render = require('./renderer')

// console.log(users)

const userList = document.querySelector("#user-list");

let currIndex = parseInt(window.location.hash.slice(1));


const _render = () => {
    render({users, userList, currIndex});
}

_render();

window.addEventListener('hashchange', ()=>{
    currIndex = parseInt(window.location.hash.slice(1));
    _render();
})