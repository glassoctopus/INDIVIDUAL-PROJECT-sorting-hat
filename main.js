console.log("Hat Sort Connected");

let studentWizards = [];
const houses = [["Gryffindor", "red"], ["Hufflepuff", "yellow"], ["Ravenclaw", "blue"], ["Slytherin", "green"]];


//variables that need to be refatored into a function with their respective actions. 
const form = document.querySelector("form")

form.addEventListener('submit', (event) =>{
  event.preventDefault();
  console.log(event);
  console.log("we should be about to make a new card student object")
  const indexForThisStudent = houses[Math.floor(Math.random() * houses.length)];
  console.log("random index ==> ", indexForThisStudent);
  const thisId = studentWizards.length + 1 + Math.random();
  console.log("random id generator ==> ", thisId);
 // const thisHouse = houses[indexForThisStudent][0];
  console.log("House ==> ") //, houses[indexForThisStudent][0]);
//  const thisHouseColor = houses[indexForThisStudent][1];
  console.log("Color ==> ", houses[indexForThisStudent][1]);


  console.log(indexForThisStudent);
  console.log(houses[indexForThisStudent][0]);
  console.log(houses[indexForThisStudent][1]);

    const newWizObj ={
      id: thisId,
      name: document.querySelector("#sName").value,
      house: thisHouse,
      color: thisHouseColor,
    }
    console.log(newWizObj);
    pets.unshift(newWizObj);
    //renderToDom(studentWizards);
    form.reset();
  }
);

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
