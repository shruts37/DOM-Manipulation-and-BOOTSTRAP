//parent element ot store cards
const taskContainer = document.querySelector(".task__container");


const newCard = ({id,imageURL,taskType,taskTitle,taskDescription})=> ` <div class="col-md-6 col-lg-4" id=${id} >

<div class = "card ">
  <><div class="card-header d-flex justify-content-end gap-2 "> <button type="button" class="btn btn-outline-success"><i class="fas fa-pencil-alt"></i></button>
    <button type="button" class="btn btn-outline-danger"><i class="fas fa-trash-alt"></i></button>

  </div><img src="${imageURL}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <span class="badge bg-primary">badge</span>
      </div>
      <div class="card-footer text-muted"><button type="button" class="btn btn-outline-primary float-end">Open Task</button>

      </div>
    </div></>
</div> `;



const saveChanges= () => {
const taskData = { //taskdata is an obj conatining newCard items
    id: '${Date.now()}',//allots unique no. fr card in millisecond immediately thats why its an ID.
imageURL: document.getElementById("imageURL").value,
taskTitle: document.getElementById("taskTitle").value,
taskType: document.getElementById("taskType").value,
taskDescription: document.getElementById("taskDescription").value, 
};

const createNewCard = newCard(taskData);// we pass obj as an arguement here and directly opening the object in the parameter itself
taskContainer.insertAdjacentHTML("beforeend", createNewCard);
};


//NOW ISSUES
// the modal was not closing upon opening the new card
// the card got deleted after refresh

//FEATURES
// delete modal feature
//Open task
//Edit task
