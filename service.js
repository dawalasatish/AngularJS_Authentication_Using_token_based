routerApp.factory("myService",["$http","$q",function($http,$q){
    return {
        paginationApi: function(userData){
            var deferred = $q.defer();
            $http.post('https://reqres.in/api/login', userData).success(function(response){
                deferred.resolve(response);
            }).error(function(err){
                deferred.reject(err);
            })
            return deferred.promise;
        }, 
        primarySkills: function(){
            var deferred = $q.defer();
            $http.get('https://api.myjson.com/bins/1974n8').success(function(response){
                deferred.resolve(response);
            }).error(function(err){
                deferred.reject(err);
            })
            return deferred.promise
        },
    }
}])
// saveRegistration: function(registration){
//     var deferred = $q.defer();
//     $http.post(APIURL + '/ResourceAdda/rest/registration/createRegistration', registration).success(function(response){
//         deferred.resolve(response);
//     }).error(function(err){
//         deferred.reject(err);
//     })
//     return deferred.promise;
// }