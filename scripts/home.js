const contactForm = document.querySelector('.contact-form');

const contactFormInputs = {
    fullName: contactForm.querySelector('#full-name'),
    email: contactForm.querySelector('#email'),
    telephone: contactForm.querySelector('#telephone'),
    message: contactForm.querySelector('#message'),
};

contactFormInputs.fullName.oninput = function () {
    const isValid = /^[A-Za-zא-ת\-\s]{2,64}$/.test(this.value);
    this.dataset.valid = isValid;
};

contactFormInputs.email.oninput = function () {
    const isValid = this.matches(':valid');
    this.dataset.valid = isValid;
};

contactFormInputs.telephone.oninput = function () {
    const isValid = /^05[0-9]\-?[0-9]{7}$/.test(this.value);
    this.dataset.valid = isValid;
};

contactFormInputs.message.oninput = function () {
    const isValid = /^.{0,400}$/.test(this.value);
    this.dataset.valid = isValid;
};

contactForm.onsubmit = function (event) {
    event.preventDefault();
    const inputs = Object.values(contactFormInputs);
    inputs.forEach(input => input.oninput());
    const isValid = !contactForm.querySelector('[data-valid]:not([data-valid="true"])');
    if (!isValid) return;
    const confirmMessage = contactForm.querySelector('.confirm-message');
    confirmMessage.style.display = 'block';
};