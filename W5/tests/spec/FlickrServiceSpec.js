/**
 * Created by kevinderudder on 26/10/16.
 */
describe("Flickrserver", function(){

    var svc = window.FlickrService;

    it("should have a 'getPhotos' method", function(){
       expect(svc).toHaveProperty("getPhotos");
    });

    it("should return an array after 'getPhotos'", function(){
       var result = svc.getPhotos();
        expect(result).toBeOfType("Array");
    });

    it("should return an array of 'FlickrPhoto'", function(){
       var result = svc.getPhotos();
        expect(result[0]).toBeOfType("FlickrPhoto");
    });


});