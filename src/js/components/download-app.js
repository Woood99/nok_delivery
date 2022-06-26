if (document.querySelector('.download-app-block__list')) {
    const downloadAppBlockList = document.querySelectorAll('.download-app-block__list');
    downloadAppBlockList.forEach(el => {
        let downloadAppBlockNumbers = el.querySelectorAll('.download-app-block__number');
        for (let number = 0; number < downloadAppBlockNumbers.length; number++) {
            downloadAppBlockNumbers[number].textContent = number + 1;
        }
    })
}
