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

const login = async (username, password, nextUrl) => {
    try {
        const response = await axios({
            method: 'POST',
            url: 'http://localhost:8000/staff/login',
            data: { username, password }
        })
        if (response.data.message === "Successful Login") {
            showAlert('success', "LoggedIn successfully");
            let path;
            if (nextUrl === "") {
                if (response.data.staff.role === 'admin') path = "/dashboard";
                else if (response.data.staff.role === 'recruiter') path = "/register-driver";
            } else path = nextUrl
            console.log(`path: ${path}`);
            window.setTimeout(() => {
                location.assign(`${path}`);
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
        if ((res.data.message = 'logout success')) {
            window.setTimeout(() => {
                location.assign('/login');
            }, 1500)
        }
    } catch (error) {
        showAlert('error', error.response.data.message);
    }
};


var loginForm = document.querySelector('.login-form');
var logoutButton = document.querySelector('.logout-btn');
var nextUrl = document.getElementById('.hidden-url');

if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault(); // prevent page from reloading
        let url = "";
        if (nextUrl)
            url = nextUrl;
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        login(username, password, url); // call this to login
    })
}

if (logoutButton) {
    logoutButton.addEventListener('click', logout);
}