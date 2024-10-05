window.addEventListener('load', () => {
    if (!sessionStorage.getItem('isLoggedIn')) {
        window.location.href = '/index.html';
    }
});

function logout() {
    sessionStorage.removeItem('isLoggedIn');
    window.location.href = '/index.html';
}

