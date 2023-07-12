const encryptButton = document.querySelector('.encrypt-button');
const textArea = document.querySelector('textarea');
const messageCardImage = document.querySelector('.message-card-image');
const messageCardTitle = document.querySelector('.message-card-title');
const messageCardParagraph = document.querySelector('.message-card-paragraph');
const messageCard = document.querySelector('.message-card');
const copyButton = document.querySelector('.copy-button');
const unencryptButton = document.querySelector('.unencrypt-button');

function verifyMessage(message) {
    if (message.length === 0) {
        return false;
    }
    if (/[A-Z\u00C0-\u00D6\u00D8-\u00DE\u00E0-\u00F6\u00F8-\u00FE]/.test(message)) {
        alert('Solo letras minúsculas y sin acentos');
        return false;
    }
    return true;
}

encryptButton.addEventListener('click', () => {
    let text = textArea.value;
    if (!verifyMessage(text)) {
        return;
    }
    text = text.replace(/a/g, '$A$');
    text = text.replace(/e/g, '$E$');
    text = text.replace(/i/g, '$I$');
    text = text.replace(/o/g, '$O$');
    text = text.replace(/u/g, '$U$');
    text = text.replace(/\$A\$/g, 'ai');
    text = text.replace(/\$E\$/g, 'enter');
    text = text.replace(/\$I\$/g, 'imes');
    text = text.replace(/\$O\$/g, 'ober');
    text = text.replace(/\$U\$/g, 'ufat');
    displayEncryptedMessage(text);
});

textArea.addEventListener('input', () => {
    if (textArea.value.length === 0) {
        hideEncryptedMessage();
        textArea.style.height = 'auto';
    }
    textArea.style.height = 'auto';
    textArea.style.height = textArea.scrollHeight + 'px';
});

unencryptButton.addEventListener('click', () => {
    let text = textArea.value;
    if (!verifyMessage(text)) {
        return;
    }
    text = text.replace(/ai/g, 'A');
    text = text.replace(/enter/g, 'E');
    text = text.replace(/imes/g, 'I');
    text = text.replace(/ober/g, 'O');
    text = text.replace(/ufat/g, 'U');
    text = text.replace(/A/g, 'a');
    text = text.replace(/E/g, 'e');
    text = text.replace(/I/g, 'i');
    text = text.replace(/O/g, 'o');
    text = text.replace(/U/g, 'u');
    displayEncryptedMessage(text);
});

copyButton.addEventListener('click', () => {
    const range = document.createRange();
    range.selectNode(document.querySelector('.encrypted-message'));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
});

copyButton.addEventListener('click', () => {
    const range = document.createRange();
    const encryptedMessage = document.querySelector('.encrypted-message');
    const textNode = encryptedMessage.firstChild;
    range.selectNodeContents(textNode);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
});

function displayEncryptedMessage(message) {
    const encryptedMessage = document.querySelector('.encrypted-message');
    messageCardImage.style.display = 'none';
    messageCardTitle.style.display = 'none';
    messageCardParagraph.style.display = 'none';
    messageCard.style.justifyContent = 'space-between';
    encryptedMessage.style.display = 'block';
    copyButton.style.display = 'block';
    encryptedMessage.innerText = message;
}

function hideEncryptedMessage() {
    const encryptedMessage = document.querySelector('.encrypted-message');
    if (window.innerWidth > 768) {
        messageCardImage.style.display = 'block';
    }
    messageCardTitle.style.display = 'block';
    messageCardParagraph.style.display = 'block';
    messageCard.style.justifyContent = 'center';
    encryptedMessage.style.display = 'none';
    copyButton.style.display = 'none';
}