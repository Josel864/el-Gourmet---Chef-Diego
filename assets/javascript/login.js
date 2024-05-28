function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    const validUsername = 'usuario';
    const validPassword = 'contraseña';

    if (username === validUsername && password === validPassword) {

        window.location.href = 'index2.html';
        return false;
    } else {

        errorMessage.textContent = 'Usuario o contraseña incorrectos';
        return false;
    }
}
