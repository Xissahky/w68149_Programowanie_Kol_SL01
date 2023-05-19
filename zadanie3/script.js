var arr = [];

function validateForm() {
    let login = document.getElementById("login").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmationPassword = document.getElementById("confirmationPassword").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let birthDate = document.getElementById("birthDate").value;

    if (login.length < 3) {
        alert("Login musi zawierac co najmniej 3 znaki!");
        return false;
    }

    let emailName = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailName.test(email)) {
        alert("Wprowadz poprawny adres email!");
        return false;
    }

    if (password.length < 8) {
        alert("Haslo musi zawierac co najmniej 8 znakow!");
        return false;
    }

    if (password !== confirmationPassword) {
        alert("Powtorzone haslo nie zgadza sie!");
        return false;
    }
    
    let checkbox = document.getElementById("showAdditionalFields");
    if (checkbox.checked) {
        let phoneNumberName = /^\d+$/;
        if (!phoneNumberName.test(phoneNumber)) {
            alert("Numer telefonu moze zawierac tylko cyfry!");
            return false;
        }
    
        let today = new Date();
        let birthDateInput = new Date(birthDate);
        let age = today.getFullYear() - birthDateInput.getFullYear();
        let monthDiff = today.getMonth() - birthDateInput.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateInput.getDate())) {
            age--;
        }
        if (age < 18) {
            alert("Musisz miec co najmniej 18 lat!");
            return false;
        }
    }

    let arr1 = [login, email]
    arr.push(arr1)

    return true;
}

console.log(arr)