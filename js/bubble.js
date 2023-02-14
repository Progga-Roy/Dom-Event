document.getElementById('item-2').addEventListener('click',function(event){
    console.log('click from the no 2')
    event.stopPropagation();
})

document.getElementById('list-ul').addEventListener('click',function(){
    console.log('ul clicked')

})
document.getElementById('list-container').addEventListener('click',function(){
    console.log('section container clicked')
})
document.getElementById('body').addEventListener('click',function(event){
    console.log('Body in html clicked')
    // event.stopImmediatePropagation()
})