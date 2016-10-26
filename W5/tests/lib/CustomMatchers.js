/**
 * Created by kevinderudder on 26/10/16.
 */
var customMatchers = {

    toBeOfType: function(){
        return {
            compare: function(actual, expectedType){
                var str = actual.constructor.toString();
                var typeOfActual = str.substring(9, str.indexOf('('));
                return {
                    pass: typeOfActual === expectedType
                }
            }
        }
    },

    toHaveProperty: function(){
        return {
            compare: function(actual, propertyName){
                var isOK = actual.hasOwnProperty(propertyName);

                return {
                    pass: isOK
                }
            }
        }
    }
};

beforeEach(function(){
    jasmine.addMatchers(customMatchers);
});