async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value;
    const content = document.querySelector('input[name="content"]').value;
    // Retrieve Post from Routes?
    const response = await fetch(`/api/postsRoutes`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            content
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
  
    if (response.ok) {
        document.location.replace('/account');
    } else {
        alert(response.statusText);
    }
};
  
document
    .querySelector('#new-post-form')
    .addEventListener('submit', newFormHandler);