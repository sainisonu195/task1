var app=angular.module("myApp" ,[]);

app.controller("myCtr", function($http, $scope){
    $http.get("https://jsonplaceholder.typicode.com/posts").then(function(item){
        $scope.posts=item.data;
    })
})