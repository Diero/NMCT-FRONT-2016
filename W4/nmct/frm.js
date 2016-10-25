/**
 * Created by kevinderudder on 19/10/16.
 */
// nmct.getJSON("url");



/*var nmct = {};
nmct.getJSON = function(url){

    url

};


nmct.getJSON();*/


var nmct = (function(){

    // private
    var url = "http://api.twitter.com";

    return {
        getJSON: function(url){
            if(url !==  undefined){
                url = this.url;
            }


        },
        postJSON: function(url){}
    };

})();










