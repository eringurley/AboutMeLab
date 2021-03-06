import quizScore from '../src/quizScore.js';
const test = QUnit.test;

test('All entries are wrong expecting 0', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const likeOne = 'dkj';
    const likeTwo = 'asdf';
    const dislikeOne = 'asdf';
    const dislikeTwo = 'asdf';
    const dislikeThree = 'asdf';
    const expected = 0;

    //Act 
    // Call the function you're testing and set the result to a const
    const score = quizScore(likeOne, likeTwo, dislikeOne, dislikeTwo, dislikeThree);

    //Assert
    assert.equal(score, expected);
});

test('All entries are correct expecting 5', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const likeOne = 'Traveling to new places.';
    const likeTwo = 'Writing.';
    const dislikeOne = 'Mustard.';
    const dislikeTwo = 'Walking up multiple flights of stairs.';
    const dislikeThree = 'Flossing.';
    const expected = 5;

    console.log(likeOne, 'Traveling to new places.');
    console.log(likeTwo, 'likeTwo');
    console.log(dislikeOne, 'dislikeOne');
    console.log(dislikeTwo, 'dislikeTwo');
    console.log(dislikeThree, 'dislikeThree');




    //Act 
    // Call the function you're testing and set the result to a const
    const score = quizScore(likeOne, likeTwo, dislikeOne, dislikeTwo, dislikeThree);

    //Assert
    assert.equal(score, expected);
});