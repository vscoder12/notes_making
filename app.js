
showNotes();

//when user add a note it store to the localstorage
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function () {
    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes)
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));  //update localstrage
    addTxt.value = "";
    
    showNotes();
});
//func to show notes element from local storage
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes)
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
     <div class="card-body">
         <h5 class="card-title">Note ${index + 1}</h5>
         <p class="card-text">${element}</p>
         <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Notes</button>
     </div>
 </div> `;
    });
    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `Nothing To Show!`
    }
}
//func to delete node
function deleteNote(index) {
    
     let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
       notesObj.splice(index,1);   //starting index add how many nodes youwant to delete
       localStorage.setItem("notes", JSON.stringify(notesObj));
       showNotes();
}
let search=document.getElementById('searchTxt');
search.addEventListener("input",function(){
    let inputVal=search.value.toLowerCase();
   let noteCard=document.getElementsByClassName('noteCard');
   Array.from(noteCard).forEach(function(element){
       let cardTxt=element.getElementsByTagName("p")[0].innerText;
       if(cardTxt.includes(inputVal)){
           element.style.display="block";
       }
       else{
           element.style.display="none";
       }
   })
    
})