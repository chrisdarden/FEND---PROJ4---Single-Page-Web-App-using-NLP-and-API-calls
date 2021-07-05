import { checkURL } from './js/formHandler'

import "./css/resets.css"
import "./css/base.css"
import "./css/footer.css"
import "./css/form.css"
import "./css/header.css"

const pressMe = document.getElementById('generate');

// Generate event listener on generate button
pressMe.addEventListener('click', (e) => {
    e.preventDefault();
    // check what text was put into the form field
    let formText = document.getElementById('userURL').value; // gather url from forom
    console.log("URL is = " + formText) // output url for debugging input
    const data = { // store url as data for fetch
        formText
    }
    if (checkURL(formText)) { //runs function for valid input
        fetch('/NLP', {
                method: 'POST',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then(res => res.json()) // parse to json
            .then(function(res) { // recall from json object and output in website
                document.getElementById('model').innerHTML = 'Model: ' + res.model;
                document.getElementById('score_tag').innerHTML = 'Score: ' + res.score_tag;
                document.getElementById('agreement').innerHTML = 'Agreement: ' + res.agreement;
                document.getElementById('subjectivity').innerHTML = 'Subjectivity: ' + res.subjectivity;
                document.getElementById('confidence').innerHTML = 'Confidence: ' + res.confidence;
                document.getElementById('irony').innerHTML = 'Irony: ' + res.irony;
            })
    } else {
        alert('Please enter a valid URL') // if fails validation, alert shown
    };
})