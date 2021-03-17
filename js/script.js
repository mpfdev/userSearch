//Global Variables
let allUsers = [];
let inputUsers = [];

window.addEventListener('load', () => {
  fetchUsers();

  document.querySelector('#submitUser').addEventListener('click', (e) => {
    e.preventDefault();

    const userInput = document.querySelector('#userSearch').value;

    if (userInput !== '') {
      console.log(userInput);
      render(filterUsers(userInput));
      clearValue();
    }
  });
});

async function fetchUsers() {
  const URL = 'http://localhost:3001/users';
  const res = await fetch(URL);
  const json = await res.json();
  allUsers = json.map((user) => {
    return {
      fullName: `${user.name.first} ${user.name.last}`,
      picture: user.picture.thumbnail,
      gender: user.gender,
      age: user.dob.age,
    };
  });
  //render(allUsers);
}

function render(user) {
  //Variables
  let genderMale = 0;
  let genderFemale = 0;
  let ageSum = 0;
  let ageAvg = 0;

  genderDistribution(user);
  sumOfAges(user);
  averageAges(user);

  function genderDistribution(person) {
    person.forEach((elem) =>
      elem.gender === 'male' ? (genderMale += 1) : (genderFemale += 1)
    );
  }

  function sumOfAges(person) {
    ageSum = person.reduce((a, b) => ({ age: a.age + b.age }));
    console.log(ageSum.age);
  }

  function averageAges(person) {
    ageAvg = ageSum.age / person.length;
  }

  const listLeft = document.querySelector('.left');
  listLeft.innerHTML = '';
  const rowNumbers = document.createElement('div');

  rowNumbers.innerHTML = `
    <h1 class="my-3 text-center">${user.length} users found</h1>
  `;
  listLeft.appendChild(rowNumbers);

  user.forEach((elem) => {
    const rowUsers = document.createElement('div');
    rowUsers.classList.add('row');
    rowUsers.classList.add('mt-2');

    rowUsers.innerHTML = `
      <div class="col-sm">
        <p>${elem.fullName}</p>
      </div>
      <div class="col-sm">
        <p>${elem.age}</p>
      </div>
      <div class="col-sm">
        <img src="${elem.picture}">
      </div>
  `;

    listLeft.appendChild(rowUsers);
  });

  const listRight = document.querySelector('.right');
  listRight.innerHTML = '';
  const rowStats = document.createElement('div');

  rowStats.innerHTML = `
      <h1 class="my-3 text-center">Statistics</h1>
      <p>Male: ${genderMale}</p>
      <p>Female: ${genderFemale}</p>
      <p>Sum of Age(s): ${ageSum.age}</p>
      <p>Average of Age(s): ${ageAvg.toFixed(2)}</p>
    `;

  listRight.appendChild(rowStats);
}

function filterUsers(input) {
  return allUsers.filter((elem) => {
    return elem.fullName.toLowerCase().includes(input);
  });
}

function clearValue() {
  document.querySelector('#userSearch').value = '';
}
