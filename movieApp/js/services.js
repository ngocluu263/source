/**
 * Created by Sandeep on 01/06/14.
 */

angular.module('movieApp.services',[]).factory('Movie',function($resource){
    return $resource('http://172.16.4.121:8000/api/movies1/:id',{id:'@_id'},{
        update: {
            method: 'PUT'
        }
    });
}).service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});