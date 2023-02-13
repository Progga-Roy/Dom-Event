function buttonClick(){
    const text = document.getElementById('default-text');
text.innerText = 'MY NAme Is Progga'
}

document.getElementById('eventBtn').addEventListener('click',function() {
    const text = document.getElementById('default-text');
    text.innerText = 'My another name Chinmayi'
});



// document.getElementById('update-btn').addEventListener('click',function(){
//     const inputFeild= document.getElementById('input-feild')
//     const inputText = inputFeild.value ;
    
//    const p = document.getElementById('input-display')
//    p.innerText =inputText
//    inputFeild.value = '';

// })


document.getElementById('update-btn').addEventListener('click',function() {
    const inputField =  document.getElementById('input-field');
    const inputText = inputField.value;
    const p = document.getElementById('text')

    p.innerText = inputText;
    inputField.value = '';
})

