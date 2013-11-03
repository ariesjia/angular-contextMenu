'use strict';

angular.module('angularContextMenuApp', ['angular-contextMenu'])
    .controller('MainCtrl', function ($scope) {

        $scope.testMenuOption = {
            callback: function (key, options) {
                var m = "clicked: " + key;
                window.console && console.log(m) || alert(m);
            },
            items: {
                "edit": {name: "Edit", icon: "edit"},
                "cut": {name: "Cut", icon: "cut"},
                "copy": {name: "Copy", icon: "copy"},
                "paste": {name: "Paste", icon: "paste"},
                "delete": {name: "Delete", icon: "delete"},
                "sep1": "---------",
                "quit": {name: "Quit", icon: "quit"}
            }
        };

        $scope.testMenuOption2 = {
            callback: function (key, options) {
                var m = "clicked: " + key;
                window.console && console.log(m) || alert(m);
            },
            items: {
                "copy": {name: "Copy", icon: "copy"},
                "sep1": "---------",
                "paste": {name: "Paste", icon: "paste"},
                "delete": {name: "Delete", icon: "delete"},
                "sep2": "---------",
                "quit": {name: "Quit", icon: "quit"}
            }
        };


    });
