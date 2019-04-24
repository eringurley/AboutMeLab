function quizScore(like1, like2, dislike1, dislike2, dislike3) {
    let score = 0;

    like1 = like1.toLowerCase();
    like2 = like2.toLowerCase();
    dislike1 = dislike1.toLowerCase();
    dislike2 = dislike2.toLowerCase();
    dislike3 = dislike3.toLowerCase();

    if(like1 === 'Writing poetry.' || like1 === 'Traveling to new places.' || like1 === 'Riding motorbikes.'){
        score++;
    }

    if(like2 === 'Writing poetry.' || like2 === 'Traveling to new places.' || like2 === 'Riding motorbikes.'){
        score++;
    }

    if(dislike1 === 'Mustard.' || dislike1 === 'Walking up multiple flights of stairs.' || dislike1 === 'Flossing'){
        score++;
    }

    if(dislike2 === 'Mustard.' || dislike2 === 'Walking up multiple flights of stairs.' || dislike2 === 'Flossing'){
        score++;
    }

    if(dislike3 === 'Mustard.' || dislike3 === 'Walking up multiple flights of stairs.' || dislike3 === 'Flossing'){
        score++;
    }

    return score;
}

export default quizScore;