import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Competitions } from '../../../api/competitions/competitions.js'

import '../../components/navbar/navbar.js';
import '../../components/footer/footer.js';

import './competitionPlace.html';

Template.competitionPlace.onCreated(function bodyOnCreated(){    
    Meteor.subscribe('competitions.all');
    var current = FlowRouter.current();
    var id = current.params.id;    
    console.log("Current Id:"+ id);

    var document = Competitions.findOne({_id: id});
    console.log(document);
    this.model = document;
});



Template.competitionPlace.helpers({
    document(){
        const model = Template.instance().model;
        return model;
    },

    isLoggedIn: function(){        
        if(Meteor.userId() != null ){
            return true;
        }else {
            return false;
        }
    },

});