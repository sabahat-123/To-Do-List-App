let input = document.querySelector('.enter-item');
let addBtn = document.querySelector('.add-list');
let task = document.querySelector('.task');

//add btn is disable
// input.addEventListener('keyup', () =>{
//     if(input.value.trim() != 0){
//         addBtn.classList.add('.active');
//     }else{
//         addBtn.classList.remove('.active');
//     }
// })



// add the item in the list
addBtn.addEventListener('click' , () => {
      if(input.value.trim() != 0){
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `
        <p>${input.value}</p>
        <div class="item-btn ">
        <i class="fa-solid fa-pen-to-square"></i>
        <i class="fa-solid fa-xmark"></i>
        </div>
    
        `
    task.appendChild(newItem);
    input.value = '';
    }else{
        alert('please enter the item');
    }
});

// remove the item from the list
task.addEventListener('click',(e) => {
   if(e.target.classList.contains('fa-xmark')){
    e.target.parentElement.parentElement.remove();
   }
   
});


// edit the item from the list
task.addEventListener('click',(e) => {
    if(e.target.classList.contains('fa-pen-to-square'));
    e.target.parentElement.parentElement.classList.toggle('completed');
});