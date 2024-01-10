const inputReqName = document.querySelector('.input-req-name');
const inputReqTel = document.querySelector('.input-req-tel');
const inputReqEmail = document.querySelector('.input-req-email');
const inputReqMessage = document.querySelector('.input-req-message');

const btnSubmit = document.querySelector('.button-form');

btnSubmit.addEventListener( 'click' , inputCheck);




function inputCheck () {

    const checkForName = '^[^\d]+$|^[^\d]+[a-zA-Z]+[^\d]*$';
    const checkForTelephone = '^\d+$';
    const checkForEMail = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$';

    if (inputReqName.test(checkForName)) {
        alert('name is valid')
    }
}