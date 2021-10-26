$(document).ready(function () {
    /** update footer year **/
    let footerYear = document.getElementById("footer_year");
    let fullCopyrightYear;
    let date = new Date();
    let currentYear = date.getFullYear();
    currentYear > 2021
        ? (fullCopyrightYear = `2021 - ${currentYear}`)
        : (fullCopyrightYear = currentYear);
    footerYear.innerHTML = fullCopyrightYear;
});