import quizScore from './quizScore.js';

const submitButton = document.getElementById('submit');

const like1 = document.getElementById('like1');
const like2 = document.getElementById('like2');
const dislike1 = document.getElementById('dislike1');
const dislike2 = document.getElementById('dislike2');
const dislike3 = document.getElementById('dislike3');

submitButton.addEventListener('click', () => {
    const like1 = like1.value;
    const like2 = like2.value;
    const dislike1 = dislike1.value;
    const dislike2 = dislike2.value;
    const dislike3 = dislike3.value;

    if(like1.trim() === '' || like2.trim() === '' || dislike1.trim() === '' || dislike2.trim() === '' || dislike3.trim() === '') {
        alert = 'Please complete all answers.';
        return;
    }
    
    const quizScore = quizScore(like1, like2, dislike1, dislike2, dislike3);
    const message = 'Your score' + score + '/5 correct';   
    
    quizResult.textContent = message; 

    if(score <2) {
        quizResult.classList.add('bad');
        quizResult.classList.remove('good');
    }
    else {
        quizResult.classList.add('good');
        quizResult.classList.remove('bad');
    }); 