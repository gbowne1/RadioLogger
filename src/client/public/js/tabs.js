const registerTabButton = document.querySelector('#register');
const loginTabButton = document.querySelector('#login');
const resetTabButton = document.querySelector('#reset');

const handleTabClick = (tab) => {
  const tabsListElement = document.querySelector('.tabs').children[0];

  for (let i = 0; i < tabsListElement.children.length; i++) {
    let listElement = tabsListElement.children[i];
    let formElement = document.querySelector('.' + listElement.id);

    if (listElement.id === tab) {
      formElement.classList.remove('hidden');
    } else {
      formElement.classList.add('hidden');
    }
  }
}

registerTabButton.addEventListener('click', function () {
  handleTabClick('register');
});

loginTabButton.addEventListener('click', function () {
  handleTabClick('login');
});

resetTabButton.addEventListener('click', function () {
  handleTabClick('reset');
});
