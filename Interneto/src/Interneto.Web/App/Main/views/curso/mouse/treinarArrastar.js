(function () {
    var controllerId = 'app.views.treinarArrastar';
    angular.module('app').controller(controllerId, [
        '$scope', function ($scope) {
            var vm = this;

            var count = 0;
            var buttonCount = 1;
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

            vm.finished = function () {
                var totalErros = count - buttonCount;
                vm.taxaAcerto = 100 - (Math.round((totalErros * 100) / count));

                vm.proximo = true;

                vm.countClicks();
            }

            vm.countClicks = function () {
                count = count + 1;
            }

            vm.refresh = function () {
                document.location.reload(true);
            };


            let sourceContainerId = "";

            // Allow multiple draggable items
            let dragSources = document.querySelectorAll('[draggable="true"]');
            dragSources.forEach(dragSource => {
                dragSource.addEventListener("dragstart", dragStart);
                dragSource.addEventListener("dragend", dragEnd);
            });

            function dragStart(e) {
                this.classList.add("dragging");
                e.dataTransfer.setData("text/plain", e.target.id);
                sourceContainerId = this.parentElement.id;
            }

            function dragEnd(e) {
                this.classList.remove("dragging");
            }

            // Allow multiple dropped targets
            let dropTargets = document.querySelectorAll(
                '[data-role="drag-drop-container"]'
            );
            dropTargets.forEach(dropTarget => {
                dropTarget.addEventListener("drop", dropped);
                dropTarget.addEventListener("dragenter", cancelDefault);
                dropTarget.addEventListener("dragover", dragOver);
                dropTarget.addEventListener("dragleave", dragLeave);
            });

            function dropped(e) {
                // execute function only when target container is different from source container
                if (this.id !== sourceContainerId) {
                    cancelDefault(e);
                    let id = e.dataTransfer.getData("text/plain");
                    e.target.appendChild(document.querySelector("#" + id));
                    this.classList.remove("hover");

                    vm.finished();
                }
            }

            function dragOver(e) {
                cancelDefault(e);
                this.classList.add("hover");
            }

            function dragLeave(e) {
                this.classList.remove("hover");
            }

            function cancelDefault(e) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }
        }
    ]);
})();