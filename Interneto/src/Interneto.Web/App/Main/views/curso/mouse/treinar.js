(function () {
    var controllerId = 'app.views.treinar';
    angular.module('app').controller(controllerId, [
        '$scope', function ($scope) {
            var vm = this;

            var count = 0;
            var buttonCount = 0;
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


            vm.pressed = function (button) {
                document.getElementById(button).style.opacity = "15%";
                document.getElementById(button).classList.remove("btn3d");
                document.getElementById(button).disabled = true;
                buttonCount++;

                if (buttonCount === 6)
                    finished();
            };

            vm.countClicks = function () {
                count = count + 1;
            }

            function finished() {
                document.getElementById("button3").style.opacity = "0%";
                document.getElementById("button4").style.opacity = "0%";
                document.getElementById("button6").style.opacity = "0%";

                var totalErros = count - buttonCount;
                vm.taxaAcerto = 100 - (Math.round((totalErros * 100) / count));

                vm.proximo = true;
            }

            vm.refresh = function () {
                debugger
                document.location.reload(true);
            };
        }
    ]);
})();