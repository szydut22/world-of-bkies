import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './navbar.html';

Template.navbar.helpers({

    isLoggedIn: function(){        
        if(Meteor.userId() != null ){
            return true;
        }else {
            return false;
        }
    },

    currentUser(){
        if(Meteor.userId() != null){
            var user = Meteor.user();
            console.log(user);
            return user.profile.firstName + ' ' + user.profile.lastName;
        }else{
            return 'logowanie';
        }

    }
});

Template.navbar.events({
    'click #logout-form'(events){
        Meteor.logout((Error)=>{
                console.log("wylogowany");
                console.log(Error);
            })
        }
    });




