
//alerts the user with their name
function alertName() {
    const name = document.getElementById('name').value;
    if (name != '') {
        alert(`Hi ${name}!`);
    }  
}
//changes the background color of the page
let isBlue = true;
function changeColor() {
    document.body.style.backgroundColor = isBlue ? 'green' : 'blue';
    isBlue = !isBlue;
}
//validates text for special characters
function validateText() {
    const text = document.getElementById('text').value;
    const validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (validation.test(text)) {
        alert('Text contains special characters!');
    } else {
        alert('Text is valid!');
    }
}
//adds text to the heading
function addText() {
    const heading = document.getElementById('page-heading');
    heading.textContent +=' Add Text';
}
