var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.controller("myCtrl",["$scope","$state",'myService',function($scope,$state,myService){
    $scope.navbarName = "Home";
    $scope.userData = {};
    
    $scope.submitDetails = function(userData){
        console.log($scope.userData);
        myService.paginationApi(userData).then(function(data){
            $scope.datauser = data;
            console.log($scope.datauser.token);
            localStorage.setItem('token', $scope.datauser.token);
            $state.go('listDetails')
        },function(err){
            if(err){
                $scope.errMessage = err;
            }
        })
    }
}])

routerApp.controller('listData',["$scope","$state","myService",function($scope,$state,myService){
    myService.primarySkills().then(function(data){
        $scope.listDetails = data;
        console.log($scope.listDetails);
    },function(err){
        if(err){
            $scope.errMessage = err;
        }
    })
}])
