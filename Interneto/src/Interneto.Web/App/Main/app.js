(function () {
    'use strict';

    var app = angular.module('app', [
        'ngAnimate',
        'ngSanitize',

        'ui.router',
        'ui.bootstrap',
        'ui.jq',

        'abp'
    ]);

    //Configuration for Angular UI routing.
    app.config([
        '$stateProvider', '$urlRouterProvider', '$locationProvider', '$qProvider',
        function ($stateProvider, $urlRouterProvider, $locationProvider, $qProvider) {
            $locationProvider.hashPrefix('');
            $urlRouterProvider.otherwise('/');
            $qProvider.errorOnUnhandledRejections(false);

            if (abp.auth.hasPermission('Pages.Users')) {
                $stateProvider
                    .state('users', {
                        url: '/users',
                        templateUrl: '/App/Main/views/users/index.cshtml',
                        menu: 'Users' //Matches to name of 'Users' menu in InternetoNavigationProvider
                    });
                $urlRouterProvider.otherwise('/users');
            }

            if (abp.auth.hasPermission('Pages.Roles')) {
                $stateProvider
                    .state('roles', {
                        url: '/roles',
                        templateUrl: '/App/Main/views/roles/index.cshtml',
                        menu: 'Roles' //Matches to name of 'Tenants' menu in InternetoNavigationProvider
                    });
                $urlRouterProvider.otherwise('/roles');
            }

            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: '/App/Main/views/home/home.cshtml',
                    menu: 'Home' //Matches to name of 'Home' menu in InternetoNavigationProvider
                })
                .state('about', {
                    url: '/about',
                    templateUrl: '/App/Main/views/about/about.cshtml',
                    menu: 'About' //Matches to name of 'About' menu in InternetoNavigationProvider
                });


            $stateProvider
                .state('intro', {
                    url: '/intro',
                    templateUrl: '/App/Main/views/curso/intro/intro.cshtml'
                });
            $urlRouterProvider.otherwise('/intro');

            $stateProvider
                .state('mouse', {
                    url: '/mouse',
                    templateUrl: '/App/Main/views/curso/mouse/mouse.cshtml',
                });
            $urlRouterProvider.otherwise('/mouse');

            $stateProvider
                .state('treinar', {
                    url: '/treinar',
                    templateUrl: '/App/Main/views/curso/mouse/treinar.cshtml',
                });
            $urlRouterProvider.otherwise('/treinar');

            $stateProvider
                .state('treinarAbrir', {
                    url: '/treinarAbrir',
                    templateUrl: '/App/Main/views/curso/mouse/treinarAbrir.cshtml',
                });
            $urlRouterProvider.otherwise('/treinarAbrir');

            $stateProvider
                .state('treinarArrastar', {
                    url: '/treinarArrastar',
                    templateUrl: '/App/Main/views/curso/mouse/treinarArrastar.cshtml',
                });
            $urlRouterProvider.otherwise('/treinarArrastar');

        }
    ]);

})();