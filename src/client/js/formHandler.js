function handleSubmit(event) {
    event.preventDefault()
        // check what text was put into the form field
    let userURL = document.getElementById('userURL').value

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8080/test')
        .then(res => res.json())
        .then(function(res) {
            document.getElementById('results').innerHTML = res.message
        })
}

export { handleSubmit }