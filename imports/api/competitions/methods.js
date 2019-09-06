import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Competitions } from './competitions';
import { StartingNumber} from './startingNumber';

const doAutoincrement = function(collection, callback) {
    collection.rawCollection().findAndModify(
        { _id: "startingNumber"}, 
        [], 
        {  $inc: {currentStartingNumber: 1}}, 
        { 'new': true}, 
        callback);
  }

  const nextAutoincrement = function(collection) {
    return Meteor.wrapAsync(doAutoincrement)(collection);
  }

Meteor.methods({
    'competitions.insert'(town, date, description, start, meta, routeLength, routeProfile){
        
        console.log('town '+ town);
        console.log('date'+ date);
        console.log('description'+ description);
        console.log('start'+ start);
        console.log('meta'+ meta);
        console.log('routeLength'+ routeLength);
        console.log('routeProfile'+ routeProfile);  
    
        return Competitions.insert({
            town:town,
            date:date,  
            description:description,
            start:start,
            meta:meta,
            routeLength:routeLength,
            routeProfile:routeProfile
        });
    },

    'profile.getStartingNumber'(){        
        var current = nextAutoincrement(StartingNumber);
        var startingNumber = current.value.currentStartingNumber;
        return startingNumber;
        
    }
})