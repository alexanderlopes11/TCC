(function () {
    var controllerId = 'app.views.treinarAbrir';
    angular.module('app').controller(controllerId, [
        '$scope', function ($scope) {
            var vm = this;

            var count = 0;
            var buttonCount = 2;
            vm.proximo = false;
            vm.taxaAcerto = 0;
            
            let promise = new Promise((resolve, reject) => {
                document.getElementById("navbar-top").style.backgroundColor = "rgb(14,91,126)";
                document.getElementById("navbar-top").style.boxShadow = "none";
                document.getElementById("navbar-logo").style.opacity = "15%";
                document.getElementById("LoginButton").style.display = "none";

                setTimeout(() => resolve("done!"), 200);
            })

            abp.ui.setBusy("body", promise);

            function init() {
            }
            init();

            vm.open = function () {
                document.getElementById('wrapper').classList.toggle('folder-open');

                finished();
            }

            function finished() {
                var totalErros = count - buttonCount;
                vm.taxaAcerto = 100 - (Math.round((totalErros * 100) / count));

                vm.proximo = true;
            }

            vm.countClicks = function () {
                count = count + 1;
            }

            vm.refresh = function () {
                document.location.reload(true);
            };
        }
    ]);
})();