/**
 * Created by kevinderudder on 04/10/16.
 */
(function(global){
    var ui = (function(){
        return {
          getData: function(url){
              var p = new Promise(function(ok, nok){
                  /* vanaf hier */
                  var xmlhttp = new XMLHttpRequest();
                  xmlhttp.onerror = function(err){nok(err);};
                  xmlhttp.onload = function(resp){

                      if(xmlhttp.readyState === 4){
                          return xmlhttp.responseText
                      }

                  };
                  xmlhttp.open("GET", url, true);
                  xmlhttp.send();

                  /* tot hier */
              });
              return p;
          }
        };
    })();
    global.KDR = global.$ = {};
    global.KDR.UI = global.$.UI = ui;


})(window);