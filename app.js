var app = angular.module("App", ["ngRoute"])
app.config(function($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl : "pagina_inicial.html"
    })
    .when("/pagina2", {
        templateUrl : "pagina2.html"
    })
    .otherwise({redirectTo : '/'})
})