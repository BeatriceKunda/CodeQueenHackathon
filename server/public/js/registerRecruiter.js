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

const registerRecruiter = async (firstName, lastName, username, email, phoneNumber, password, passwordConfirm) => {
    try {
        const response = await axios({
            method: 'POST',
            url: 'http://localhost:8000/staff',
            data: {
                firstName,
                lastName,
                username,
                email,
                phoneNumber,
                password,
                passwordConfirm
            }
        })
        if (response.data.message === "success") {
            showAlert('success', "Recruiter Registered Successfuly");
            window.setTimeout(() => {
                location.assign(`/dashboard`);
            }, 1500)
        }
    } catch (error) {
        console.log("Failure")
        showAlert('error', error.response.data.message);
    }
}


var registrationForm = document.querySelector('.register-recruiter');

if (registrationForm) {
    registrationForm.addEventListener('submit', function (e) {
        e.preventDefault(); // prevent page from reloading
        var firstName = document.getElementById('firstName').value;
        var lastName = document.getElementById('lastName').value;
        var username = document.getElementById('username').value;
        var email = document.getElementById('email').value;
        var phoneNumber = document.getElementById('phoneNumber').value;
        var password = document.getElementById('password').value;
        var passwordConfirm = document.getElementById('passwordConfirm').value;

        registerRecruiter(firstName, lastName, username, email, phoneNumber, password, passwordConfirm); // call this to login
    })
}
