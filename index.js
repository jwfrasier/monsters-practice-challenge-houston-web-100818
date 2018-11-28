const storeMonstersInHtmlElement = document.querySelector("#monster-container");
const URL = "http://localhost:3000/monsters";

const fetchData = function() {
  fetch(URL)
    .then(res => res.json())
    .then(json => console.log(json));
};

const renderMonsterData = function() {};

fetchData();
