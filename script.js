const encryptButton = document.querySelector('.button-1');
const card = document.querySelector('.card');
const unencryptButton = document.querySelector('.button-2');
const copyButton = document.querySelector('.button-3');
const cardImage = document.querySelector('.card-image');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');

function encryptButtonOnClick() {
    const input = document.querySelector('#input').value;
    if (!verifyInput(input)) {
        return;
    }
    display(encrypt(input));
}

function unencryptButtonOnClick() {
    const input = document.querySelector('#input').value;
    if (!verifyInput(input)) {
        return;
    }
    display(unencrypt(input));
}

function copyButtonOnClick() {
    const messageTextArea = document.querySelector('#message');
    copy(messageTextArea);
    messageTextArea.style.display = 'none';
    copyButton.style.display = 'none';
    card.style.justifyContent = 'center';
    if (window.innerWidth > 768) {
        cardImage.style.display = 'block';
    }
    h1.style.display = 'block';
    h2.style.display = 'block';
    cardImage.style = '';
    const input = document.querySelector('#input');
    input.select();
}

function verifyInput(input) {
    if (input.length === 0) {
        return false;
    }
    if (/[A-Z\u00C0-\u00D6\u00D8-\u00DE\u00E0-\u00F6\u00F8-\u00FE]/.test(input)) {
        return false;
    }
    return true;
}

function encrypt(input) {
    input = input.replace(/a/g, 'A');
    input = input.replace(/e/g, 'E');
    input = input.replace(/i/g, 'I');
    input = input.replace(/o/g, 'O');
    input = input.replace(/u/g, 'U');
    input = input.replace(/A/g, 'ai');
    input = input.replace(/E/g, 'enter');
    input = input.replace(/I/g, 'imes');
    input = input.replace(/O/g, 'ober');
    input = input.replace(/U/g, 'ufat');
    return input;
}

function unencrypt(input) {
    input = input.replace(/ai/g, 'A');
    input = input.replace(/enter/g, 'E');
    input = input.replace(/imes/g, 'I');
    input = input.replace(/ober/g, 'O');
    input = input.replace(/ufat/g, 'U');
    input = input.replace(/A/g, 'a');
    input = input.replace(/E/g, 'e');
    input = input.replace(/I/g, 'i');
    input = input.replace(/O/g, 'o');
    input = input.replace(/U/g, 'u');
    return input;
}

function copy(textarea) {
    textarea.select();
    document.execCommand("copy");
}

function display(message) {
    cardImage.style.display = 'none';
    h1.style.display = 'none';
    h2.style.display = 'none';
    card.style.justifyContent = 'space between';
    const messageTextArea = document.querySelector('#message');
    messageTextArea.style.display = 'block';
    copyButton.style.display = 'block';
    messageTextArea.value = message;
}