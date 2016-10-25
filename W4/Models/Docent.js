/**
 * Created by kevinderudder on 19/10/16.
 */

/*
*
* class Docent{
*
*   ctor(){}
*
*   // methodes
*
* }
*
*
* */

function Docent(firstname, name, courses){
    this.firstname = firstname;
    this.name = name;
    this.courses = courses;
}

// NOK
//Docent.prototype = {}

// OK
Docent.prototype.fullName = function(){
    return this.firstname + " " + this.name;
}

Docent.prototype.toString = function(){
    return this.fullName();
}

//var casanova = new Docent("Johan", "Vannieuwenhuyse", ["node", "SS"]);