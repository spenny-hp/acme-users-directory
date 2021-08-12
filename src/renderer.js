const render = ({ userList, hash, users })=> {
  const html = users.map( (user, idx) => {
    return `
      <li>
        <a href='#${idx}'>${ user.name }</a>
        ${ parseInt(hash) === idx ? `<pre>${ JSON.stringify(user, null, 2)}</pre>` : ''}
      </li>
    `;
  }).join('');
  userList.innerHTML = html;
};

module.exports = render;
