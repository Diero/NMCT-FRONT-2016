/**
 * Created by kevinderudder on 19/10/16.
 */
(function () {
    "use strict";

    var btn = document.querySelector("button");
    var worker;

    function onSucceeded(resp){

        console.info(resp);


    }
    function onError(err){}

    function startWorker_Clicked(){

        worker = new Worker("worker.js");
        worker.onmessage = onSucceeded;
        worker.onerror = onError;

        worker.postMessage({url: "", data: ""});
    }

    function addEventListeners(){
        btn.addEventListener("click", startWorker_Clicked);
    }

    addEventListeners();

})();