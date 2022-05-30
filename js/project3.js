const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let validname = false;
let validemail = false;
let validphone = false;

username.addEventListener('blur', () => {
    console.log("this is blur");
    let regex = /^[a-zA-Z][0-9a-zA-Z]{0,10}$/;
    let str = username.value;
    console.log(regex, str)
    if (regex.test(str)) {
        // console.log("it is matched");
        username.classList.remove('is-invalid');
        validname = true;
    }
    else {
        // alert("Not a valid username");
        username.classList.add('is-invalid')
        validname=false;
    }
})
email.addEventListener('blur', () => {
    console.log("this is blur");
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([A-Za-z]){2,7}$/;
    let str = email.value;
    console.log(regex, str)
    if (regex.test(str)) {
        // console.log("it is matched");
        email.classList.remove('is-invalid');
        validemail = true;
    }
    else {
        // alert("Enter Valid Email Id");
        email.classList.add('is-invalid')
        validemail=false;
    }

})
phone.addEventListener('blur', () => {
    console.log("this is blur");
    let regex = /^[0-9]{10}$/;
    let str = phone.value;
    console.log(regex, str)
    if (regex.test(str)) {
        // console.log("it is matched");
        phone.classList.remove('is-invalid');
        validphone = true;
    }
    else {
        // alert("Enter Valid Phone number");
        phone.classList.add('is-invalid')
        validphone=false;
    }
})

let submit = document.getElementById('submit')
submit.addEventListener('click', (e) => {
    e.preventDefault();

    if (validname && validemail && validphone) {
        let success = document.getElementById('success');
        let failure = document.getElementById('failure');
        
        success.classList.add('show');
        // failure.classList.remove('show')
        // $('#failure').hide();
        // $('#success').show();
        success.show();
        failure.hide();
    }
    else {
        let failure = document.getElementById('failure');
        failure.classList.add('show')
        // success.classList.remove('show');
        // $('#failure').show();
        // $('#success').hide();
        success.hide();
        failure.show();

    }
})