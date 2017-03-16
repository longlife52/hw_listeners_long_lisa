//form
var firstNameEntry = document.getElementById('firstName');
var lastNameEntry = document.getElementById('lastName');
var emailEntry = document.getElementById('email');
var commentsEntry = document.getElementById('comments');
document.addEventListener('submit', function (noSend) {
    noSend.preventDefault();
    console.log('The firstName is:' + firstNameEntry.value);
    console.log('The lastName is: ' + lastNameEntry.value);
    console.log('The email is: ' + emailEntry.value);
    console.log('The message is: ' + commentsEntry.value);
});
