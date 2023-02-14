document.getElementById('event-btn').addEventListener('mouseenter',function(){
    console.log('Event mouse enter')
})
document.getElementById('field').addEventListener('focus',function(){
    console.log('Focus on your dream')
})
document.getElementById('field').addEventListener('keypress',function(event){
    console.log(event.target.value)
})
document.getElementById('field').addEventListener('keydown',function(event){
    console.log(event.target.value)
})
document.getElementById('field').addEventListener('keyup',function(event){
        console.log(event.target.value)
    })
document.getElementById('field').addEventListener('blur',function(){
    console.log('Focus on your dream (blur)')
})
