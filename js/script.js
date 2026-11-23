
var phones = ["iPhone 11", "iPhone 12", "iPhone 13", "iPhone 14"];

// add phone
function addnewPhone () {
    var newPhone = prompt("Enter new phone");
    
    phones.push(newPhone);

    phones.forEach(function (phone, index) {

        console.log(`${index + 1} => phonesName: ${phone}`)

    })
}

// show phones
function showPhones () {
    phones.forEach(function (phone, index) {

        console.log(`${index + 1} => phoneName: ${phone}`)

    })
}
// edit
function editPhone () {

    var editPhone = prompt("Enter phone number to edit");

    if (editPhone === null || editPhone.trim() === "") {
        alert("Please enter a phone number");
        return;
    }
        if (isNaN(editPhone) || !Number.isInteger(Number(editPhone))) {
        alert("Please enter a valid number");
        return;
        }
        if (editPhone < 1 || editPhone > phones.length) {
        alert("Phone number not found");
        return;
    }

    var newPhone = prompt("Enter new phone name");

    phones[editPhone - 1] = newPhone;

    phones.forEach(function (phone, index) {

        console.log(`${index + 1} => phoneName: ${phone}`)

    })
}
// delete
function deletePhone () {

    var deletePhone = prompt("Enter phone number to delete");
    if (deletePhone === null || deletePhone.trim() === "") {
        alert("Please enter a phone number");
        return;
    }
        if (isNaN(deletePhone) || !Number.isInteger(Number(deletePhone))) {
        alert("Please enter a valid number");
        return;
        }
        if (deletePhone < 1 || deletePhone > phones.length) {
        alert("Phone number not found");
        return;
    }
    phones.splice(deletePhone -1,1);

    phones.forEach(function (phone, deletePhone) {

        console.log(`${deletePhone + 1} => phonesName: ${phone}`)
        console.log(phones)

    })
}
