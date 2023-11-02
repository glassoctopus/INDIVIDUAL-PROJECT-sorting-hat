console.log("Hat Sort Connected");

let studentWizards = [];
let expelled = [];

const testArray = [
  {
    id: 10.296241961328007,
    name: "Harry Potter",
    house: "Gryffindor",
    color: "red",
    expelled: false,
  },
  {
    id: 11.171564262461259,
    name: "Hermione Granger",
    house: "Gryffindor",
    color: "red",
    expelled: false,
  },
  {
    id: 12.958045101205968,
    name: "Ron Weasley",
    house: "Gryffindor",
    color: "red",
    expelled: false,
  },
  {
    id: 13.280328465851986,
    name: "Draco Malfoy",
    house: "Slytherin",
    color: "green",
    expelled: false,
  },
  {
    id: 14.205620248080786,
    name: "Luna Lovegood",
    house: "Ravenclaw",
    color: "blue",
    expelled: false,
  },
  {
    id: 15.402657848874255,
    name: "Cho Chang",
    house: "Ravenclaw",
    color: "blue",
    expelled: false,
  },
  {
    id: 16.795191168709645,
    name: "Cedric Diggory",
    house: "Hufflepuff",
    color: "yellow",
    expelled: false,
  },
  {
    id: 17.296241961328007,
    name: "Severus Snape",
    house: "Slytherin",
    color: "green",
    expelled: false,
  },
  {
    id: 18.0310624973152325,
    name: "Bellatrix Lestrange",
    house: "Slytherin",
    color: "green",
    expelled: false,
  },
  {
    id: 19.4196132973152325,
    name: "Susan Bones",
    house: "Hufflepuff ",
    color: "yellow",
    expelled: false,
  }
];

 Array.prototype.push.apply(studentWizards,testArray);
 console.log(studentWizards);
 

const houses = [
  ["Gryffindor", "red", "#740001",  "#AE0001", "#d3a625", "#eeba30", "#000000"], 
  ["Hufflepuff", "yellow", "#ffdb00", "#ffed86", "#fff4b1", "#60605c", "#000000"],
  ["Ravenclaw", "blue", "#0e1a41", "#222f5b", "#5d5d5d", "#946b2d", "#000000",], 
  ["Slytherin", "green", "yellow", "#1A472A", "#2a623d", "#5d5d5d", "#aaaaaa", "#000000"],
  ["Voldomort", "black", "silver"]];

const form = document.querySelector("form")

const hogwarts = document.querySelector("#hogwarts");
const voldys = document.querySelector("#voldys");
const filterButtons = document.querySelector("#filter-buttons");

// 

const renderToDom = (array) => {
    let hogwart = "";
    let voldy = "";
    for(object of array) {
      if(object.expelled == false || studentWizards.length > 0){
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
    }else if(object.expelled == true){
      console.log("voldomort object in expelled==> ", object);
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
      voldys.innerHTML = voldy; 
    } 
  }
};

renderToDom(studentWizards);

const filter = (house) => {
  let studentArray = [];
  if(house === "all"){
    return renderToDom(studentWizards);
  }else{
    for(student of studentWizards){
      if(student.type === house){
        studentArray.unshift(student);
      }
    }
  }
  hogwarts.innerHTML = "";
  console.log(studentArray);
  renderToDom(studentArray);
}

filterButtons.addEventListener("click", (event) => {
    
  const id = event.target.id;
  console.log(event, id);

  if(id === "all"){
    renderToDom(studentWizards);
  }else if(id === "Gryffindor" || id === "Hufflepuff" || id === "Ravenclaw" || id === "Slytherin"){
    filter(id);
    console.log("here is your  id "+id+" ")
  }
})


form.addEventListener('submit', (event) =>{
  event.preventDefault();
 
  const indexForThisStudent = Math.floor(Math.random() * 4); 
  const thisId = studentWizards.length + 1 + Math.random(); 

  const newWizObj ={
    id: thisId,
    name: document.querySelector("#sName").value,
    house: houses[indexForThisStudent][0],
    color: houses[indexForThisStudent][1],
    expelled: false,
  }
  studentWizards.unshift(newWizObj);
  renderToDom(studentWizards);
  form.reset();
}
);

hogwarts.addEventListener("click",  (event) => {
  
  if(event.target.id.includes("Expel")){
    console.log("expelled")
    const [,id] = event.target.id.split("--");  //determine the correct object, get id
    const index = studentWizards.findIndex(obj => obj.id === Number(id));

    studentWizards[index].color = "former "  +  studentWizards[index].house;
    console.log(studentWizards[index].color);
    studentWizards[index].house = "Voldomort";
    studentWizards[index].expelled = true;
    
    expelled.unshift(studentWizards.splice(index, 1)[0]);
    console.log(studentWizards);
    hogwarts.innerHTML = "";

    console.log("array of voldy's students", expelled);
   
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
