async function logout() {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    });
    console.log('hi');

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
}


document
    .querySelector('#logout')
    .addEventListener('click', logout);
