import quizScore from '../src/quizScore.js';
const test = QUnit.test;

test('All entries are wrong expecting 0', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const like1 = 'dkj';
    const like2 = 'asdf';
    const dislike1 = 'asdf';
    const dislike2 = 'asdf';
    const dislike3 = 'asdf';
    const expected = 0;

    //Act 
    // Call the function you're testing and set the result to a const
    const score = quizScore(like1, like2, dislike1, dislike2, dislike3);

    //Assert
    assert.equal(score, expected);
});

test('All entries are correct expecting 4', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const like1 = 'Traveling to new places.';
    const like2 = 'Writing and performing poetry.';
    const dislike1 = 'Mustard.';
    const dislike2 = 'Walking up multiple flights of stairs.';
    const dislike3 = 'Flossing.';
    const expected = 4;

    //Act 
    // Call the function you're testing and set the result to a const
    const score = quizScore(like1, like2, dislike1, dislike2, dislike3);

    //Assert
    assert.equal(score, expected);
});