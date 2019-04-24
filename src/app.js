import quizScore from './quizScore.js';
const submitButton = document.getElementById('submit');

const likeOne = document.getElementById('likeOne');
const likeTwo = document.getElementById('likeTwo');
const dislikeOne = document.getElementById('dislikeOne');
const dislikeTwo = document.getElementById('dislikeTwo');
const dislikeThree = document.getElementById('dislikeThree');

submitButton.addEventListener('click', () => {
    const likeOne = likeOne.value;
    const likeTwo = likeTwo.value;
    const dislikeOne = dislikeOne.value;
    const dislikeTwo = dislikeTwo.value;
    const dislikeThree = dislikeThree.value;

    let score = 0;

    let quizScore = document.getElementById('score');

    if(likeOne.trim() === '' || likeTwo.trim() === '' || dislikeOne.trim() === '' || dislikeTwo.trim() === '' || dislikeThree.trim() === '') {
        quizScore.textConent = 'Please complete all answers.';
    } else {
        score = quizScore(likeOne, likeTwo, dislikeOne, dislikeTwo, dislikeThree);
        if(score <= 2) {
        quizResult.classList.add('bad');
        quizResult.classList.remove('good');
    }else {
        quizResult.classList.add('good');
        quizResult.classList.remove('bad');
    }
    quizResult.textContent = 'Your score: ' + score + ' Your percentage: ' + (score / 5) + '%';
    });