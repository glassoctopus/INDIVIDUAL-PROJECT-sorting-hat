console.log("Hat Sort Connected");

let studentWizards = [];
let expelled = [];

const houses = [
  ["Gryffindor", "red", "#740001",  "#AE0001", "#d3a625", "#eeba30", "#000000"], 
  ["Hufflepuff", "yellow", "#ffdb00", "#ffed86", "#fff4b1", "#60605c", "#000000"],
  ["Ravenclaw", "blue", "#0e1a41", "#222f5b", "#5d5d5d", "#946b2d", "#000000",], 
  ["Slytherin", "green", "yellow", "#1A472A", "#2a623d", "#5d5d5d", "#aaaaaa", "#000000"],
  ["Voldomort", "black", "silver"]];

const form = document.querySelector("form")

const hogwarts = document.querySelector("#hogwarts");
const voldys = document.querySelector("#voldys")

console.log("is the quereySelector to hogwarts working ==>> ", hogwarts);
// 

const renderToDom = (array) => {
  console.log("In js render to dom function")
    let hogwart = "";
    let voldy = "";
    for(object of array) {
      if(object.expeled == false){
        console.log("in the hogwarts conditional should be making the string")
        hogwart += `
        <div class="${object.house}">
          </div>
            <div class="card text-center myCardStyle ${object.house}" style="width: 20rem;">
              <div class="card-header"><h5 class="card-title">${object.name}</h5></div>
              <!-- <img src="${object.imageUrl}" class="card-img-top img" alt="no image needed for mvp"> -->
              <div class="card-body">        
              <p class="card-text">House: ${object.house}</p>
              <p>House color: ${object.color}</p>        
              <button id="Expel--${object.id}" onclick="">Expel</button>          
              <div class="card-footer footer ${object.house}"><p>${object.name}</p></div>
            </div>
          </div>
        </div>`    
      hogwarts.innerHTML = hogwart;
      console.log("Object ID ==> ",object.id)
      console.log(hogwarts);
    }else{
      console.log(" in the expel html render loop", object);
      console.log("", );
      console.log("", );
      console.log("", );
      voldy += `
      <div class="${object.house}">
          </div>
            <div class="card text-center myCardStyle ${object.house}" style="width: 20rem;">
              <div class="card-header"><h5 class="card-title">${object.name}</h5></div>
              <!-- <img src="${object.imageUrl}" class="card-img-top img" alt="no image needed for mvp"> --picture or not? -->
              <div class="card-body">        
              <p class="card-text">House: ${object.house}</p>
              <p>House color: ${object.color}</p>        
              <div class="card-footer footer ${object.house}"><p>${object.name}</p></div>
            </div>
          </div>
        </div>
      `
      console.log("ID should equal==> ","Expel--", object.id);  
    }
    voldys.innerHTML = voldy;    
  };
};

//variables that need to be refatored into a function with their respective actions. 


form.addEventListener('submit', (event) =>{
  event.preventDefault();
 
  const newStudent = document.querySelector('#sName').value; // name on form TODO: validation
  const indexForThisStudent = Math.floor(Math.random() * houses.length-1); // <== random index for house determination
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
  renderToDom(expelled);
  form.reset();
}
);

hogwarts.addEventListener("click",  (event) => {
  console.log(event);
  console.log("Expel function, we are in -batman voice");
  
  if(event.target.id.includes("Expel")){
    //remove pet once we get the right button
    //determine the correct object, get id
    const [,id] = event.target.id.split("--");
    //identify where in the array is it

    const index = studentWizards.findIndex(obj => obj.id === Number(id));
    console.log(index);
    studentWizards[index].house = "Voldomort";
    studentWizards[index].expeled = true;
    //re-render with the array
    expelled.unshift(studentWizards.splice(index, 1));
    studentWizards.includes
    //render with removal in place
    renderToDom(expelled);
    renderToDom(studentWizards);
  }
})

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
