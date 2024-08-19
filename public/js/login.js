const loginHandling = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();
    
    if (username && password) {
            let response;
            if (event.target.id ==='login-button') {
                response = await fetch('/api/users/login', {
                    method: 'POST',
                    body: JSON.stringify({ username, password }),
                    headers: { 'Content-Type': 'application/json' }
                });
            } else if (event.target.id === 'reg-button') { 
                response = await fetch('/api/users/', {
                method: 'POST',
                body: JSON.stringify({ username, password }),
                headers: { 'Content-Type': 'application/json' },
                });
            }

        if (response.ok) {
            document.location.replace('/');
        } else {
            console.error('Failed to login.')
        }
        }
};
document.querySelector('#login-button').addEventListener('click', loginHandling);
document.querySelector('#reg-button').addEventListener('click', loginHandling);

