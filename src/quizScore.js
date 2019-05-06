function quizScore(likeOne, likeTwo, dislikeOne, dislikeTwo, dislikeThree) {
    let score = 0;

    likeOne = likeOne.toLowerCase();
    likeTwo = likeTwo.toLowerCase();
    dislikeOne = dislikeOne.toLowerCase();
    dislikeTwo = dislikeTwo.toLowerCase();
    dislikeThree = dislikeThree.toLowerCase();

    

    if(likeOne === 'writing.' || likeOne === 'traveling to new places.' || likeOne === 'riding motorbikes.'){
        score++;
    }

    if(likeTwo === 'writing.' || likeTwo === 'traveling to new places.' || likeTwo === 'riding motorbikes.'){
        score++;
    }

    if(dislikeOne === 'mustard.' || dislikeOne === 'walking up multiple flights of stairs.' || dislikeOne === 'flossing.'){
        score++;
    }

    if(dislikeTwo === 'mustard.' || dislikeTwo === 'walking up multiple flights of stairs.' || dislikeTwo === 'flossing.'){
        score++;
    }

    if(dislikeThree === 'mustard.' || dislikeThree === 'walking up multiple flights of stairs.' || dislikeThree === 'flossing.'){
        score++;
    }

    return score;

}

export default quizScore;
