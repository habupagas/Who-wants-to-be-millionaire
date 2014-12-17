/**
 * Created by Vadym on 16/12/14.
 */
"use strict";

angular.module('Millionaire').controller('IndexCtrl', ['$scope', 'PlayerNameFilter', function ($scope, PlayerNameFilter) {
    $scope.playerName = '';
    var gameEngine;

    $scope.newGame = function () {
        if (PlayerNameFilter($scope.playerName)) {
            $('#wrapper').fadeOut(1000);
            gameEngine = new GameEngine();
            gameEngine.nextQuestion();
        }
    };
    $scope.leaderBoard = function () {
        $('#leaderboard-screen').fadeIn(1000);
    };
    $scope.leaderBoardBack = function () {
        $('#leaderboard-screen').fadeOut(1000);
    };

    VK.init(function() {
        // API initialization succeeded
        // Your code here
        console.log('success');
    }, function() {
        // API initialization failed
        // Can reload page here
        console.log('fail');
    }, '5.27');
}]);