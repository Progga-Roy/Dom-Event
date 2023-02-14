document.getElementById('post-btn').addEventListener('click',function(){

    const commentBox = document.getElementById('comment-field');
    const commentText = commentBox.value ;
    const commentContainer =  document.getElementById('comment-container')
    const p = document.createElement('p');
    p.innerText = commentText;
    p.style.color = 'red'
    p.style.backgroundColor = 'black'
    commentContainer.appendChild(p);
    commentBox.value = '';

})