document.getElementById('post-btn').addEventListener('click',function () {
    const newComment = document.getElementById('comment')
    const commentText = newComment.value;
   const commentContainer = document.getElementById('update-comment');
    const p = document.createElement('p')
      
    p.innerText = commentText;
    commentContainer.append(p)
    newComment.value = '';
})