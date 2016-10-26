/**
 * Created by kevinderudder on 26/10/16.
 */
(function(global){
    "use strict";


    var svc = (function(){

        // private

        // public
        return {
            getPhotos: function(){
                /*
                var a = new Array();
                var fi = new FlickrPhoto(1, "owner", "secret", "server", "farm");
                a.push(fi);
                return a;*/

                var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=9226002e79b8fd8f7afd5c45584e79e7&tags=sport&format=json&nojsoncallback=1";
                var xmlHttp = new XMLHttpRequest();
                xmlHttp.open("GET", url, false);
                xmlHttp.send();

                var data = JSON.parse(xmlHttp.responseText);
                var a = new Array();

                for(var i = 0, l = data.photos.photo.length ; i < l ; i++){
                    var currentItem = data.photos.photo[i];
                    var fi = new FlickrPhoto(currentItem.id,
                        currentItem.owner,
                        currentItem.secret,
                        currentItem.server,
                        currentItem.farm);

                    a.push(fi);
                }

                return a;

            }
        }



    })();
    global.FlickrService = svc;

})(window);