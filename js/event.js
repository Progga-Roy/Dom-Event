function lightPink(){
    document.body.style.backgroundColor='lightPink'
}
function lightBlue(){
    document.body.style.backgroundColor='lightBlue'
}
function lightGreen(){
    document.body.style.backgroundColor='lightGreen'
}
function lavender (){
    document.body.style.backgroundColor='lavender'
}

const yellowButton = document.getElementById('yellow-bg');
yellowButton.onclick = yellowBtn;

function yellowBtn(){
    document.body.style.backgroundColor='lightYellow'
}

const salmonButton = document.getElementById('salmon-bg');
salmonButton.onclick = function salmonBtn(){
    document.body.style.backgroundColor = 'salmon'
}
// const purpleButton = document.getElementById('purple-bg');
// purpleButton.onclick= purpleBtn;

// function purpleBtn(){
//     document.body.style.backgroundColor = 'gray'
// }

const orangeButton = document.getElementById('orange-bg');
orangeButton.addEventListener('click',orangeBtn)   

function orangeBtn(){
    document.body.style.backgroundColor = 'orange'
}

const purpleButton = document.getElementById('purple-bg');
purpleButton.addEventListener('click',function purpleBtn() {
    document.body.style.backgroundColor = 'purple'
})

document.getElementById('violate-bg').addEventListener('click',function(){
    document.body.style.backgroundColor = 'violet'
})