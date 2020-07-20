(function () {
    var controllerId = 'app.views.mouse';
    angular.module('app').controller(controllerId, [
        '$scope', function ($scope) {
            var vm = this;

            let promise = new Promise((resolve, reject) => {
                document.getElementById("navbar-top").style.backgroundColor = "rgb(14,91,126)";
                document.getElementById("navbar-top").style.boxShadow = "none";
                document.getElementById("navbar-logo").style.opacity = "15%";
                document.getElementById("LoginButton").style.display = "none";

                setTimeout(() => resolve("done!"), 200);
            })

            let promiseButton = new Promise((resolve, reject) => {
                setTimeout(() => resolve("done!"), 510000);
            })
            promiseButton.then(() => {
                document.getElementById("indice").style.display = "none";
                document.getElementById("treinar").style.display = "block";
                document.getElementById("LoginButton").style.display = "none";
            });

            abp.ui.setBusy("body", promise);

            function init() {
                document.getElementById("treinar").style.display = "none";
            }
            init();
        }
    ]);
})();