// import { showAlert } from "./alert"
const showAlert = (type, msg) => {
    hideAlert();
    const markup = `<div class="alert alert--${type}">${msg}</div>`;
    document.querySelector('body').insertAdjacentHTML('afterbegin', markup);
    window.setTimeout(hideAlert, 5000);
}

const hideAlert = () => {
    const el = document.querySelector('.alert');
    if (el) el.parentElement.removeChild(el);
}

const login = async (username, password) => {
    try {
        const response = await axios({
            method: 'POST',
            url: 'http://localhost:8000/staff/login',
            data: { username, password }
        })
        if (response.data.message === "Successful Login") {
            showAlert('success', "LoggedIn successfully");
            let path;
            if (response.data.staff.role === 'admin') path = "dashboard";
            else if (response.data.staff.role === 'recruiter') path = "register-driver";
            window.setTimeout(() => {
                location.assign(`/${path}`);
            }, 1500)
        }
    } catch (error) {
        console.log("Failure")
        showAlert('error', error.response.data.message);
    }
}

const logout = async () => {
    try {
        const res = await axios({
            method: 'GET',
            url: 'http://localhost:8000/staff/logout'
        });
        if ((res.data.message = 'logout success')) location.assign('/login');
    } catch (err) {
        console.log(err.response);
        showAlert('error', 'Error logging out! Try again.');
    }
};


var loginForm = document.querySelector('.login-form');
var logoutButton = document.querySelector('.logout-btn');

if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault(); // prevent page from reloading
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        login(username, password); // call this to login
    })
}

if (logoutButton) {
    logoutButton.addEventListener('click', logout);
}