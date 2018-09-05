routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'home.html',
            controller: 'myCtrl'
        })
        .state('listDetails',{
            url: '/detailList',
            templateUrl: 'listData.html',
            controller: 'listData'
        })

});