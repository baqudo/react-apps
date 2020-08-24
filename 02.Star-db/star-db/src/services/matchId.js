export default (url) => {
    const regExp = /\/([0-9]*)\/$/;
    return url.match(regExp)[1];
}