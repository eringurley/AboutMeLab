import quizScore from './quizScore.js';
const submitButton = document.getElementById('score');
const likeOne = document.getElementById('likeOne');
const likeTwo = document.getElementById('likeTwo');
const dislikeOne = document.getElementById('dislikeOne');
const dislikeTwo = document.getElementById('dislikeTwo');
const dislikeThree = document.getElementById('dislikeThree');

submitButton.addEventListener('click', () => {
    const likeOneInput = likeOne.value;
    const likeTwoInput = likeTwo.value;
    const dislikeOneInput = dislikeOne.value;
    const dislikeTwoInput = dislikeTwo.value;
    const dislikeThreeInput = dislikeThree.value;

    let score = 0;

    let quizResult = document.getElementById('buttonResult');

    if(likeOneInput.trim() === '' || likeTwoInput.trim() === '' || dislikeOneInput.trim() === '' || dislikeTwoInput.trim() === '' || dislikeThreeInput.trim() === '') {
        quizScore.textContent = 'Please complete all answers.';
    } else {
        score = quizScore(likeOneInput, likeTwoInput, dislikeOneInput, dislikeTwoInput, dislikeThreeInput);
        if(score <= 2) {
            quizResult.classList.add('bad');
            quizResult.classList.remove('good');
        } else {
            quizResult.classList.add('good');
            quizResult.classList.remove('bad');
        }     
    }

    quizResult.textContent = 'Your score: ' + score + ' Your percentage: ' + ((score / 5) * 100) + '%';
    
});
