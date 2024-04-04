

document.querySelector('.start-btn').addEventListener('click',()=>{
    document.querySelector('.popup-info').classList.add('active');
});

document.querySelector('.exit-btn').addEventListener('click', () => {
    document.querySelector('.popup-info').classList.remove('active');
});
document.querySelector('.start-btn').addEventListener('click', () => {
    document.querySelector('.main').classList.add('active');
});

document.querySelector('.exit-btn').addEventListener('click', () => {
    document.querySelector('.main').classList.remove('active');
});

document.querySelector('.continue-btn').addEventListener('click', () => {
    document.querySelector('.servey-section').classList.add('active');
    document.querySelector('.main').classList.remove('active');
    document.querySelector('.popup-info').classList.remove('active');
    document.querySelector('.servey-box').classList.add('active');
});

let questionCount = 0;

function showQuestions(index){
    const questionText = document.querySelector('.question-text');
    questionText.textContent = `${questions[index]}.numb`;
}

