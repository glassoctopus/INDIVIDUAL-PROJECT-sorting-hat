console.log("Hat Sort Connected");

let studentWizards = [];
let expelled = [];

const houses = [
  ["Gryffindor", "red", "#740001",  "#AE0001", "#d3a625", "#eeba30", "#000000"], 
  ["Hufflepuff", "yellow", "#ffdb00", "#ffed86", "#fff4b1", "#60605c", "#000000"],
  ["Ravenclaw", "blue", "#0e1a41", "#222f5b", "#5d5d5d", "#946b2d", "#000000",], 
  ["Slytherin", "green", "yellow", "#1A472A", "#2a623d", "#5d5d5d", "#aaaaaa", "#000000"]];

const form = document.querySelector("form")

const hogwarts = document.querySelector("#hogwarts");
const voldys = document.querySelector("#voldys")

console.log("is the quereySelector to hogwarts working ==>> ", hogwarts);
// 

const renderToDom = (array) => {
  console.log("In js render to dom function")
    let domString = "";
    for(object of array) {
      domString += `
      <div class="${object.house}">
        </div>
          <div class="card element text-center myCardStyle ${object.house}" style="width: 20rem;">
            <div class="card-header"><h5 class="card-title">${object.name}</h5></div>
            <!-- <img src="${object.imageUrl}" class="card-img-top img" alt="no image needed for mvp"> -->
            <div class="card-body">        
            <p class="card-text">House: ${object.house}</p>
            <p>House color: ${object.color}</p>        
            <button id="delete--${object.id}" onclick="">Expel</button>          
            <div class="card-footer footer ${object.house}"><p>${object.name}</p></div>
          </div>
        </div>
      </div>`
    };
    hogwarts.innerHTML = domString;
    
  };

//variables that need to be refatored into a function with their respective actions. 


form.addEventListener('submit', (event) =>{
  event.preventDefault();
 
  const newStudent = document.querySelector('#sName').value; // name on form TODO: validation
  const indexForThisStudent = Math.floor(Math.random() * houses.length); // <== random index for house determination
  const thisId = studentWizards.length + 1 + Math.random(); // unique ID for "data base 'air quotes'"
  const thisHouse = houses[indexForThisStudent][0];
  const thisHouseColor = houses[indexForThisStudent][1];

  const newWizObj ={
    id: thisId,
    name: document.querySelector("#sName").value,
    house: houses[indexForThisStudent][0],
    color: houses[indexForThisStudent][1],
    expeled: false,
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
