const circleUp = document.querySelector('.circle-up');
const circleDown = document.querySelector('.circle-down');
const disapper = document.querySelector('.disapper');
const btn = document.querySelector('.btns');

// Appearing and disappearing
circleUp.addEventListener('click', () => {
    disapper.style.display = 'block';
    circleDown.style.display = 'block';
    circleDown.style.zIndex = '1';
});

circleDown.addEventListener('click', () => {
    disapper.style.display = 'none';
    circleDown.style.display = 'none';
});


// chatboxs
const automatedMsg = [
    "hello!",
    "how can i help you?",
    "kindly hold on",
    "Ah, I see",
    "We will reach out to you shortly?",
    "what do you need?",
    "I'm here to help! What do you need?",
    "how can i help you?",
    "what do you need?"
];
let count = 0;

const showMessage = () => {
    const userMessage = document.querySelector('#user-message');
    const chatBox = document.querySelector('#chat-box');

    // user div
    let userDiv = document.createElement('div');
    userDiv.className = 'message user';

    // user image
    let userImg = document.createElement('img');
    userImg.src = 'images/Avatars.png';
    userImg.alt = 'User input';
    userDiv.appendChild(userImg);

    // user test/value
    // inner div
    let innerDiv = document.createElement('div');
    let userSpan = document.createElement('span');
    userSpan.textContent = userMessage.value;
    innerDiv.appendChild(userSpan);
    userDiv.appendChild(innerDiv);

    chatBox.appendChild(userDiv);

    // Automated Message
    // Auto Div
    let autoDiv = document.createElement('div');
    autoDiv.className = 'message automated';

    // Automated Response
    setTimeout(() => {
        // inner automated div
        const innerAutoDiv = document.createElement('div');
        const autoSpan = document.createElement('span');
        autoSpan.textContent = automatedMsg[count];
        count++;
        innerAutoDiv.appendChild(autoSpan);
        autoDiv.appendChild(innerAutoDiv);

        // Automated image
        const autoImg = document.createElement('img');
        autoImg.src = 'images/Ellipse 6.svg';
        autoImg.alt = 'Automated Image';
        autoDiv.appendChild(autoImg);

        chatBox.appendChild(autoDiv);
    }, 2000);


    // clear input
    userMessage.value = '';
};


btn.addEventListener('click', showMessage);