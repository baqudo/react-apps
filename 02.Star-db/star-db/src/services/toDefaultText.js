export default (str) => {
    const regExp = /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
    return str
        .match(regExp)
        .map(s => s.toLowerCase())
        .join(' ');
}