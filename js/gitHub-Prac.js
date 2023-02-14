document.getElementById('delete-btn').addEventListener('click',function(){
const  secretText = document.getElementById('secret-text');
secretText.style.display='none';

})


document.getElementById('input-field').addEventListener('keyup',function (event) {
    const btn = event.target.value;
    const inputField =  document.getElementById('delete-btn')
    if(btn === 'delete'){
        inputField.removeAttribute('disabled')
    }
    else{
        inputField.setAttribute('disabled',true)
    }
})