let userList = [];

function addUser() {
  const userNameInput = document.getElementById('userName');
  const userName = userNameInput.value.trim();

  if (userName) {
    const newUser = {
      name: userName,
      counter: 0,
    };

    userList.push(newUser);
    userNameInput.value = '';
    renderUserList();
  }
}

function deleteUser(index) {
  userList.splice(index, 1);
  renderUserList();
}

function editUser(index) {
  const newUserName = prompt("Digite o novo nome do usuário", userList[index].name);
  if (newUserName) {
    userList[index].name = newUserName;
    renderUserList();
  }
}

function incrementCounter(index) {
  userList[index].counter++;
  renderUserList();
}

function decrementCounter(index) {
  if (userList[index].counter > 0) {
    userList[index].counter--;
    renderUserList();
  }
}

function renderUserList() {
  const userListContainer = document.getElementById('userList');
  userListContainer.innerHTML = '';

  userList.forEach((user, index) => {
    const userItem = document.createElement('div');
    userItem.classList.add('user-item');

    userItem.innerHTML = `
      <span>${user.name}</span>
      <div class="counter-btns">
        <button onclick="decrementCounter(${index})">-</button>
        <span>${user.counter}</span>
        <button onclick="incrementCounter(${index})">+</button>
      </div>
      <div>
        <button class="delete-btn" onclick="deleteUser(${index})">Deletar</button>
        <button onclick="editUser(${index})">Editar</button>
      </div>
    `;

    userListContainer.appendChild(userItem);
  });
}
