function quizScore(like1, like2, dislike1, dislike2, dislike3) {
    let score = 0;

    like1 = like1.toLowerCase();
    like2 = like2.toLowerCase();
    dislike1 = dislike1.toLowerCase();
    dislike2 = dislike2.toLowerCase();
    dislike3 = dislike3.toLowerCase();

    if(like1 === 'writing poetry.' || like1 === 'traveling to new places.' || like1 === 'riding motorbikes.'){
        score++;
    }

    if(like2 === 'writing poetry.' || like2 === 'traveling to new places.' || like2 === 'riding motorbikes.'){
        score++;
    }

    if(dislike1 === 'mustard.' || dislike1 === 'walking up multiple flights of stairs.' || dislike1 === 'flossing.'){
        score++;
    }

    if(dislike2 === 'mustard.' || dislike2 === 'walking up multiple flights of stairs.' || dislike2 === 'flossing.'){
        score++;
    }

    if(dislike3 === 'mustard.' || dislike3 === 'walking up multiple flights of stairs.' || dislike3 === 'flossing.'){
        score++;
    }

    return score;
}



export default quizScore;

