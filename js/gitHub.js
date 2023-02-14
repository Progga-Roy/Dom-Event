document.getElementById('delete-btn').addEventListener('click',function(){

    const textField = document.getElementById('text');
    textField.style.display ='none'
})

document.getElementById('input').addEventListener('keyup',function(event){
    const inputText =event.target.value;
    const btn = document.getElementById('delete-btn')
if(inputText==='delete'){
    btn.removeAttribute('disabled')
}
else{
    btn.setAttribute('disabled',true)
}
})