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

const registerDriver = async (name, stage, natIdNumber, age, phoneNumber, recruitmentAddr, nextOfKin, nextOfKinContact) => {
    try {
        const response = await axios({
            method: 'POST',
            url: 'http://localhost:8000/driver',
            data: {
                name,
                stage,
                natIdNumber,
                age,
                phoneNumber,
                recruitmentAddr,
                nextOfKin,
                nextOfKinContact
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


var registrationForm = document.querySelector('.contact_form ');

if (registrationForm) {
    registrationForm.addEventListener('submit', function (e) {
        e.preventDefault(); // prevent page from reloading
        var name = document.getElementById('name').value;
        var stage = document.getElementById('stage').value;
        var natIdNumber = document.getElementById('natIdNumber').value;
        var age = document.getElementById('age').value;
        var phoneNumber = document.getElementById('phoneNumber').value;
        var password = document.getElementById('password').value;
        var nextOfKin = document.getElementById('nextOfKin').value;
        var nextOfKinContact = document.getElementById('nextOfKinContact').value;

        registerDriver(name, stage, natIdNumber, age, phoneNumber, password, nextOfKin, nextOfKinContact); // call this to login
    })
}
