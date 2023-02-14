// get by class and through loop

// const item = document.getElementsByClassName('item')
// for (const items of item) {
//     items.addEventListener('click',function(event){
//     event.target.parentNode.removeChild(event.target)
//     })
// }

document.getElementById('list-container').addEventListener('click',function(event){
 event.target.parentNode.removeChild(event.target)
})

document.getElementById('add-btn').addEventListener('click',function(){
   const listContainer = document.getElementById('list-container')
   const li = document.createElement('li')
   li.innerText = 'Brand new item'
   li.classList.add('item')
   listContainer.appendChild(li);
})
