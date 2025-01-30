const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();
const nobutton = document.getElementById('noBtn');
let mouseoverCount = 0;
let mouseclickCount = 0;

yesBtn.addEventListener('click', () => {question.innerHTML = 'I Love You Too';});

noBtn.addEventListener('click', () => {question.innerHTML = 'I will keep you irritating, better click yes';});
noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});

noBtn.addEventListener('onclick', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});

function newpage() {
    window.location.href = 'paragraph.html';
}

noBtn.addEventListener('mouseover', () => {
    mouseoverCount++;
    if (mouseoverCount > 5) {
        question.innerHTML = 'I will keep you irritating, better click yes 🥱😏😉'
    }
    if (mouseoverCount > 12) {
        question.innerHTML = 'Are you testing my patience..?? <br> Just click on yes 😤'
    }
    if (mouseoverCount > 20) {
        question.innerHTML = 'Ms. Kavya Tyagi, Just click on yes or else I will do it for you..😉😏'
    }
    if (mouseoverCount > 25) {
        question.style.fontSize = '18px'
        question.innerHTML = "Hahaha... <br>I clicked yes myself(You're already mine)<br> I love you bbg ❤️🎀"
        noBtn.disabled = true;
        setTimeout(() => {
            window.location.href = 'paragraph.html';
        }, 3500);
        
    }
});

noBtn.addEventListener('onclick', () => {
    mouseoverCount++;
    if (mouseoverCount > 5) {
        question.innerHTML = 'I will keep you irritating, better click yes 🥱😏😉'
    }
    if (mouseoverCount > 12) {
        question.innerHTML = 'Are you testing my patience..?? <br> Just click on yes 😤'
    }
    if (mouseoverCount > 20) {
        question.innerHTML = 'Ms. Kavya Tyagi, Just click on yes or else I will do it for you..😉😏'
    }
    if (mouseoverCount > 25) {
        question.style.fontSize = '18px'
        question.innerHTML = "Hahaha... <br>I clicked yes myself(You're already mine)<br> I love you bbg ❤️🎀"
        noBtn.disabled = true;
        setTimeout(() => {
            window.location.href = 'paragraph.html';
        }, 3500);
        
    }
});