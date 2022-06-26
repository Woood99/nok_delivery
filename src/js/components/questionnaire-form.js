if (document.querySelector('.questionnaire-form-file')) {
    let questionnaireFormFile = document.querySelector('.questionnaire-form-file');
    let input = questionnaireFormFile.querySelector('.questionnaire-form-file__input');
    let content = questionnaireFormFile.querySelector('.questionnaire-form-file__content');
    input.onchange = function () {
        this.classList.add('custom-file--active');
        content.textContent = this.files[0].name;
    }
}




