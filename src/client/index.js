import "./css/resets.css"
import "./css/base.css"
import "./css/footer.css"
import "./css/form.css"
import "./css/header.css"
alert("hey!!");

function handleSubmit(event) {
    event.preventDefault()
    console.log("::: Form Submitted :::")
        // check what text was put into the form field
    let userURL = document.getElementById('userURL').value
    console.log(userURL);
    fetch('http://localhost:8080/test')
        .then(res => res.json())
    console.log('http://localhost:8080/test')
        .then(function(res) {
            document.getElementById('results').innerHTML = res.message
        })
}