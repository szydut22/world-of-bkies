import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Competitions } from './competitions';

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
})