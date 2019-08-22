import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Competitions } from '../../../api/competitions/competitions.js';
import { ReactiveVar } from 'meteor/reactive-var';

import '../../components/navbar/navbar.js'; 
import '../../components/footer/footer.js';
import '../../components/competition-item/competitionItem.js';

import './competition.html';

Template.Competition.onCreated(function bodyOnCreated() {
    Meteor.subscribe('competitions.all');
    this.model = {
        displayCompetitionForm: new ReactiveVar(false),
    };
});

Template.Competition.helpers({
  competitions(){
    return Competitions.find({});
  },

  isOpen: function(){
    const model = Template.instance().model;
    
    if(model.displayCompetitionForm.get()){
      return true;
    }else {
      return false;
    }
  }

});

Template.Competition.events({
  'click #openForm'(event){
    const model = Template.instance().model;

    if(model.displayCompetitionForm.get()){
      
      model.displayCompetitionForm.set(false);
    }else {      
      model.displayCompetitionForm.set(true);
      // window.scrollBy(0, 7500);
    }

  },

});

