/**
 * Created by kevinderudder on 26/10/16.
 */

describe("Flickr Photo Model and Properties", function(){

    var fi = new FlickrPhoto(1, "owner", "secret", "server", "farm");

    it("should be of type 'FlickrPhoto'", function(){
        expect(fi).toBeOfType("FlickrPhoto");
    });

    it("should contain an 'id' property", function(){
        expect(fi).toHaveProperty("id");
    });
    it("should contain an 'secret' property", function(){
        expect(fi).toHaveProperty("secret");
    });
    it("should contain an 'server' property", function(){
        expect(fi).toHaveProperty("server");
    });
    it("should contain an 'farm' property", function(){
        expect(fi).toHaveProperty("farm");
    });
    it("should contain an 'owner' property", function(){
        expect(fi).toHaveProperty("owner");
    });


});