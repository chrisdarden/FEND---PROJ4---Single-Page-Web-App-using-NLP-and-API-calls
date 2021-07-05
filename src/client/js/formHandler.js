function checkURL(inputText) {
    console.log("::: Running checkURL :::", inputText);
    const r = new RegExp(/^(http|https):\/\/[^ "]+$/);
    return r.test(inputText);
}

export { checkURL }