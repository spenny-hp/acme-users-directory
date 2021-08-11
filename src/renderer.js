const render = (users, userList, currIndex) => {
      const html = `${users
        .map(
          (user, ind) => `
          <li>
            <a href = '#${ind}'>${user.name}</a>
            ${
                currIndex === ind ? `
                <div>
                    ${ JSON.stringify(user, null, 2) }
                </div>
                ` : ``
                
                
            }
          </li>
        `
        )
        .join("")}
        `;
    
      userList.innerHTML = html;
    };

    module.exports = {
        render
    }