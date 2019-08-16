import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import './creating-competition-form.html';



Template.creatingCompetitionForm.events({
    'click .submit-button-6'(event){
        console.log('ok');
    }
})