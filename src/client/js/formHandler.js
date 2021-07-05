function checkURL(inputText) {
    const r = new RegExp(/^(http|https):\/\/[^ "]+$/);
    return r.test(inputText);
}
export { checkURL }