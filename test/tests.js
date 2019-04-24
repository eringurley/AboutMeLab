const test = QUnit.test;

test('All entries are wrong expecting 0', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const like1 = 'l1';
    const like2 = 'l2';
    const dislike1 = 'l3';
    const dislike2 = 'l4';
    const dislike3 = 'l5';

    //Act 
    // Call the function you're testing and set the result to a const
    const score = quizScore(like1, like2, dislike1, dislike2, dislike3);

    //Assert
    assert.equal(score, expected);
});