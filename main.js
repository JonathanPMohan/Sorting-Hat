
const startSortButtonElem = document.getElementById('startSortButton');
const studentInputElem = document.getElementById('studentInput');


    const printToDom = (stringToPrint, divId) => {
        const selectedDiv = document.getElementById(divId);
        selectedDiv.innerHTML = stringToPrint;
        }

// Function For Printing Student Form On Screen //

const newStudentBuilder = () => {
    let newString = `<form class="form-inline">
        <div class="form-group mb-2">
      <label for="staticEmail2" class="sr-only">Email</label>
      <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="email@example.com">
    </div>
    <div class="form-group mx-sm-3 mb-2">
      <label for="inputPassword2" class="sr-only">Password</label>
      <input type="password" class="form-control" id="inputPassword2" placeholder="Password">
    </div>
    <button type="submit" id ="sortButton" class="btn btn-primary mb-2">SORT</button>
  </form>
  </div>`;

    printToDom(newString, 'students');
}

// Event Listener for Form Introduction //

startSortButtonElem.addEventListener("click",(e) =>{

    e.preventDefault();
    newStudentBuilder();
});



const houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];

const printStudentCard = (name, houses) => { 

    name = studentInput.value;
    for (let i = 0; i < name.length; i++) {
        console.log(name)
    let newString = ''   
        newString += `<div class="card w-15 m-4">
        <div class="sortedStudent">
        <h5 class="card-title">${name}</h5>
        <h5 class="card-title">${houses[Math.random() * houses.length ]}</h5>
        </div>`;
    printToDom(newString, 'sortedStudent');
    }
   
}
// Event listener for Word Input button //

// startCodeButtonElem.addEventListener("click",(e) => {
//     e.preventDefault();
//     printSecretString();
// });





// studentInputElem.addEventListener("click", (e) => {
//     e.preventDefault();

//     buildNewToDoCard(toDoInputElem.value, notesInputElem.value);
// });