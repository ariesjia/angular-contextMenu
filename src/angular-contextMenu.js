'use strict';

angular.module('angular-contextMenu', [])
    .service('contextMenuService',function(){
        var i = 0,
            str = 'contextMenu-';

        this.getId = function(){
            return str+(++i);
        }
        this.getlastId = function(){
            return str+i;
        }
    })
    .directive('contextMenu', [ "$timeout","contextMenuService", function ($timeout,contextMenuService) {
        return {
            restrict: 'EA',
            compile:function(element, attrs){

                var hasSelector = attrs['context-menu-selector'],
                    selector;
                if(!hasSelector && !selector){
                    element.wrapInner('<div id="'+contextMenuService.getId()+'"></div>');
                    selector = contextMenuService.getlastId();
                }
                return function(scope, element, attrs){
                    var option = scope.$eval(attrs.contextMenu);

                    if(!hasSelector){
                        option.selector = '#'+selector;
                    }

                    if (angular.isObject(option)) {
                        $timeout(function () {
                            element.contextMenu(option);
                        });
                    }
                }
            }
        };
    }]);
