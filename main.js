
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
    for (let i = 0; i < deleteButtons.length; i++) {
      const element = deleteButtons[i];
      element.addEventListener("click", (e) => {
        
        // Remove Student Card (Expel)
        
        const buttonIClicked = e.target;
        const cardToDelete = buttonIClicked.parentNode;
        cardToDelete.remove();
      })
    }
  }

  // Print Student Function //

  let printStudent = () => {
    const studentCardElem = document.getElementById("sortButton");
    studentCardElem.addEventListener("click", function(){
        let inputValue = document.getElementById("studentName").value;
        let House = ["Gryffindor", "Hufflepuff","Ravenclaw", "Slytherin"][Math.floor(Math.random() * 4)]
        let finalCard = `<div class="card mb-2 ml-3 p-3 w-33 border border-white">
        <img class="card-img-top" src="./images/card.png" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${inputValue}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${House}</h6>
        </div>
        <button type="submit" id="expelStudentButton" class=" expelStudent btn btn-dark btn-sm mb-3  mt-1 p-3">Expel</button>
        </div> `
        printToDom(finalCard, "sortedStudent")
        activateDeletes();
    });
};

// New Student From Function //
const newStudentBuilder = () => {
    let studentCard = ` <div class="form-group bg-none mb-2 ml-3 p-3 w-100 border border-white>
    <label for="staticEmail2" class="sr-only">Student Name</label>
    <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="Enter First Years Name">
    <label for="student1" class="sr-only">Student</label>
    <input type="student" class="form-control" id="studentName" placeholder="Student">
    <button type="submit" id="sortButton" class="btn btn-outline-light w-25">Sort!</button>
    </div>

    </div>`
    printToDom(studentCard, "students");
    printStudent();
};


