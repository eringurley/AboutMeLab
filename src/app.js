import quizScore from './quizScore.js';

const submitButton = document.getElementById('submitButton');

const likeOne = document.getElementById('likeOne');
const likeTwo = document.getElementById('likeTwo');
const dislikeOne = document.getElementById('dislikeOne');
const dislikeTwo = document.getElementById('dislikeTwo');
const dislike3Input = document.getElementById('dislikeThree');

submitButton.addEventListener('click', () => {
    const likeOne = likeOne.value;
    const likeTwo = likeTwo.value;
    const dislikeOne= dislikeOne.value;
    const dislikeTwo = dislikeTwo.value;
    const dislike3Input = dislikeThree.value;

    if(likeOne.trim() === '' || likeTwo.trim() === '' || dislikeOne.trim() === '' || dislikeTwo.trim() === '' || dislikeThree.trim() === '') {
        alert = 'Please complete all answers.';
        return;
    }
    
    const quizScore = quizScore(likeOne, likeTwo, dislikeOne, dislikeTwo, dislikeThree);
    const message = 'Your score' + score + '/5 correct';   
    
    quizResult.textContent = message; 

    if(score <2) {
        quizResult.classList.add('bad');
        quizResult.classList.remove('good');
    }
    else {
        quizResult.classList.add('good');
        quizResult.classList.remove('bad');