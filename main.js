
const startSortButtonElem = document.getElementById('startSortButton');



const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};

const startButtonElem = document.getElementById("startSortButton");
startButtonElem.addEventListener("click", function() {
    newStudentBuilder();
});

const activateDeletes = () => {
    const deleteButtons = document.getElementsByClassName('expelStudent');
    console.log(deleteButtons);
    for (let i = 0; i < deleteButtons.length; i++) {
      const element = deleteButtons[i];
      element.addEventListener("click", (e) => {
        // remove card that the button was on
        const buttonIClicked = e.target;
        const cardToDelete = buttonIClicked.parentNode;
        cardToDelete.remove();
      })
    }
  }

  // New Student Form Function //

const newStudentBuilder = () => {
    let studentCard = ` <div class="form-group mb-2 ml-3 p-3 border border-white>
    <label for="staticEmail2" class="sr-only">Student Name</label>
    <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="Enter First Years Name">
    <label for="student1" class="sr-only">Student</label>
    <input type="student" class="form-control" id="studentName" placeholder="Student">
    <button type="submit" id="sortButton" class="btn btn-primary mb-2  mt-1 p-3">Sort!</button>
    </div>
    <div class="form-group mx-sm-3 mb-2 ml-5">
    </div>`
    printToDom(studentCard, "students");
    printStudent();
};

  // Print Student Function //

  let printStudent = () => {
    const finalCardElem = document.getElementById("sortButton");
    finalCardElem.addEventListener("click", function(){
        let inputValue = document.getElementById("studentName").value;
        let House = ["Gryffindor", "Hufflepuff","Ravenclaw", "Slytherin"][Math.floor(Math.random() * 4)]
        let finalCard = `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${inputValue}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${House}</h6>
        </div>
        <button type="submit" id="expelStudentButton" class=" expelStudent btn btn-primary mb-2  mt-1 p-3">Expel</button>
        </div> `
        printToDom(finalCard, "sortedStudent")
        activateDeletes();
    });
};


