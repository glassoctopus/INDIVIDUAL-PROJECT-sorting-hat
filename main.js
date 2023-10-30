console.log("Hat Sort Connected");

let studentWizards = [];
let expelled = [];

const houses = [
  ["Gryffindor", "red", "#740001",  "#AE0001", "#d3a625", "#eeba30", "#000000"], 
  ["Hufflepuff", "yellow", "#ffdb00", "#ffed86", "#fff4b1", "#60605c", "#000000"],
  ["Ravenclaw", "blue", "#0e1a41", "#222f5b", "#5d5d5d", "#946b2d", "#000000",], 
  ["Slytherin", "green", "yellow", "#1A472A", "#2a623d", "#5d5d5d", "#aaaaaa", "#000000"]];

const form = document.querySelector("form")

const app = document.querySelector("#app");
console.log("is the quereySelector to app working ==>> ",app);
// 

const renderToDom = (array) => {
  console.log("In js render to dom function")
    let domString = "";
    for(object of array) {
      domString += `<div class="${object.house}">
      </div><div class="card element text-center myCardStyle ${object.house}" style="width: 20rem;">
      <div class="card-header"><h5 class="card-title">${object.name}</h5></div>
      <img src="${object.imageUrl}" class="card-img-top img" alt="...">
      <div class="card-body">        
          <p class="card-text">House: ${object.house}</p>
          <p>House color: ${object.color}</p>        
          <button id="delete--${object.id}" onclick="
          ">Expel</button>
        </div>
        <div class="card-footer ${object.house}"><p>${object.name}</p></div>
        </div>
      </div>`
    };
    app.innerHTML = domString;
  };

//variables that need to be refatored into a function with their respective actions. 


form.addEventListener('submit', (event) =>{
  event.preventDefault();
  console.log(event);
  console.log("we should be about to make a new card student object")
  const newStudent = document.querySelector('#sName').value;
  console.log("New student Name Entered ==> ",newStudent);
  const indexForThisStudent = Math.floor(Math.random() * houses.length);
  console.log("random index ==> ", indexForThisStudent);
  const thisId = studentWizards.length + 1 + Math.random();
  console.log("random id generator ==> ", thisId);
  const thisHouse = houses[indexForThisStudent][0];
  console.log("House ==> ") //, houses[indexForThisStudent][0]);
  const thisHouseColor = houses[indexForThisStudent][1];
  console.log("Color ==> ", houses[indexForThisStudent][1]);
  
  
  console.log(indexForThisStudent);
  console.log(houses[indexForThisStudent][0]);
  console.log(houses[indexForThisStudent][1]);
  
  const newWizObj ={
    id: thisId,
    name: document.querySelector("#sName").value,
    house: houses[indexForThisStudent][0],
    color: houses[indexForThisStudent][1],
  }
  console.log(newWizObj);
  studentWizards.unshift(newWizObj);
  console.log(studentWizards);
  renderToDom(studentWizards);
  form.reset();
}
);

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
