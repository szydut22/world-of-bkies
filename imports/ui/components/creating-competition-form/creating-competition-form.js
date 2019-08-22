import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import './creating-competition-form.html';

Template.creatingCompetitionForm.events({
    
    'click #submit-form'(events){
        console.log('ok');
        form = event.target.form;
    
        town = form.town.value; 
        date = form.date.value;
        description = form.description.value;
        start = form.start.value;
        meta = form.meta.value;
        routeLength = form.routeLength.value;
        routeProfile = form.routeProfile.value;
        
        console.log('town '+ town);
        console.log('date '+ date);
        console.log('description '+ description);
        console.log('start '+ start);
        console.log('meta '+ meta);
        console.log('routeLength '+ routeLength);
        console.log('routeProfile '+ routeProfile);     
        Meteor.call('competitions.insert', town, date, description, start, meta, routeLength, routeProfile); 
          
    },

})