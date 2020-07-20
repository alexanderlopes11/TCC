(function () {
    var controllerId = 'app.views.intro';
    angular.module('app').controller(controllerId, [
        '$scope', function ($scope) {
            var vm = this;

            var link = window.location.hash;

            let promise = new Promise((resolve, reject) => {
                document.getElementById("navbar-top").style.backgroundColor = "rgb(14,91,126)";
                document.getElementById("navbar-top").style.boxShadow = "none";
                document.getElementById("navbar-logo").style.opacity = "15%";

                setTimeout(() => resolve("done!"), 200);
            })

            let promiseButton = new Promise((resolve, reject) => {
                setTimeout(() => resolve("done!"), 162000);
            })
            promiseButton.then(() => {
                if (link === '#/intro') {
                    document.getElementById("LoginButton").style.display = "block";
                }
            });

            abp.ui.setBusy("body", promise);
        }
    ]);
})();