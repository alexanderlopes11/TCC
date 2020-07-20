(function () {
    var controllerId = 'app.views.layout.topbar';
    angular.module('app').controller(controllerId, [
        '$rootScope', '$state', '$location', 'appSession',
        function ($rootScope, $state, $location, appSession) {
            var vm = this;
            
            
            function init() {    
                document.getElementById("LoginButton").style.display = "none";
            }

            init();

        }
    ]);
})();