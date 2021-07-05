function handleSubmit(event) {
    event.preventDefault()
        // check what text was put into the form field
    let userURL = document.getElementById('userURL').value

    fetch('http://localhost:8080/NLP')
        .then(res => res.json())
        .then(function(res) {
            document.getElementById('results').innerHTML = res.message
        })
}

function checkURL(inputText) {
    console.log("::: Running checkURL :::", inputText);
    const r = new RegExp(/^(http|https):\/\/[^ "]+$/);
    return r.test(inputText);
}

export { checkURL }
export { handleSubmit }