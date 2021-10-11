


function addPerson(name){
    var person = new Person(name);
    population[person.id] = person;
}

class Person {
    constructor(name){
        //Inherent attributes
            this.id = getNextId();
            this.name = name;
            this.age = 20;
            this.gender = "m";
        //Physical attributes
            this.currentHeight = 170;
            this.maxHeight = 170;
            this.weight = 70;
            this.appearance = {};
        //Skill attributes
            this.strength = 5;
            this.agility = 5;
            this.intelligence = 5;
            this.speed = 5;
            this.specialSkillAttributes = [];
        //Personality attributes
            this.extroversion = 50;
            this.funny = 50;
            this.politeness = 50;
            this.courage = 50;
            this.diligence = 50;
            this.kindness = 50;
            this.generosity = 50;
            this.patience = 50;
            this.specialPersonalityAttributes = [];
        //Current state attributes

        //Relationship attributes

        //Schedule attributes


    }
}