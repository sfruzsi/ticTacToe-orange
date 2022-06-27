const { defineFeature, loadFeature } = require('jest-cucumber');
const removeMinimum = require('../../src/ticTacToe-orange');

const feature = loadFeature('features/ticTacToe-orange.feature');

defineFeature(feature, (test) => {
    test('', ({ given, when, then }) => {
        given('', () => {
        });

        when('', () => {
        });

        then('', () => {
        });
    });
});
