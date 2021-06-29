const userSearch = document.getElementById("usersSelect");
const groupList = document.querySelector(".list-group ");

const update = function (users) {
  const optionSelected = userSearch.options[userSearch.selectedIndex].text;
  // console.log(optionSelected);

  users.forEach((user) => {
    console.log(user);
    // groupList.innerHTML = "";
    // if (user.name) {
    //   const html = `
    //   <li class="list-group-item">
    //   <p>${user.name}</p>
    // </li>
    //   `;
    //   groupList.insertAdjacentHTML("afterbegin", html);
    // }
  });
};

// const userSelect = document.querySelector("#usersSelect");

const displayHTML = (users) => {
  groupList.innerHTML = "";

  users.forEach((user) => {
    const html = `
    <li class="list-group-item">
    <p>${user.name}</p>
    <p>${user.username}</p>
    <p>${user.email}</p>
  </li>
  
    `;

    groupList.insertAdjacentHTML("afterbegin", html);
  });
};

const getData = () => {
  // try {
  //   const response = await fetch(" https://jsonplaceholder.typicode.com/users");
  //   const users = await response.json();
  //   console.log(users);

  //   displayHTML(users);
  // } catch {}

  fetch(" https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      displayHTML(data);

      update(data);
    });
};

getData();
