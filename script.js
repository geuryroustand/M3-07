const userSearch = document.getElementById("usersSelect");
const groupList = document.querySelector(".list-group ");

const inputUserSearch = document.querySelector("#userSearchuserSearch");

const update = function (users) {
  // const optionSelected = userSearch.options[userSearch.selectedIndex].text;
  // console.log(optionSelected);

  userSearch.addEventListener("change", (e) => {
    const value = e.currentTarget.value;

    groupList.innerHTML = "";
    users.forEach((user) => {
      const li = document.createElement("li");
      li.className = "list-group-item";
      li.innerHTML = user[value];
      groupList.appendChild(li);
    });
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
    .then((datas) => {
      // console.log(data);
      displayHTML(datas);

      // searchStates(datas);

      update(datas);

      inputUserSearch.addEventListener("input", () =>
        searchStates(inputUserSearch.value)
      );

      function searchStates(searchText) {
        // console.log(datas);
        let matches = datas.filter((data) => {
          const regex = new RegExp(`^${searchText}`, "gi");
          // console.log(data.name);
          // console.log(data.name.match(regex));
          // || data.abbr.match(regex)
          // console.log(searchText);
          return data.name.match(regex);
          // console.log(data);
        });

        console.log(matches);
      }

      // inputUserSearch.onkeyup = (e) => {
      //   // console.log(e.target.value);
      //   let userType = e.target.value;
      //   // console.log(userType.length > 3);
      //   datas.filter((data) => {
      //     // console.log(userType > 3);
      //     // if (userType) {
      //     //   console.log(data.name);
      //     //   const htmlData = data.name
      //     //     .toLocaleLowerCase()
      //     //     .startsWith(userType.toLocaleLowerCase());
      //     //   // displayHTML(htmlData);
      //     //   console.log(htmlData);
      //     // }
      //   });
      // };
    });
};

getData();
