if (document.querySelector('.become-partner-plans')) {
    const becomePartnerPlansList = document.querySelectorAll('.become-partner-plans__list');
    becomePartnerPlansList.forEach(el => {
        let becomePartnerPlansNumber = el.querySelectorAll('.become-partner-plans__number');
        for (let number = 0; number < becomePartnerPlansNumber.length; number++) {
            becomePartnerPlansNumber[number].textContent = number + 1;
        }
    })
}
