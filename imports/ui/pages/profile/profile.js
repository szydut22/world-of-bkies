import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import '../../components/navbar/navbar.js';
import '../../components/footer/footer.js';

import './profile.html';

Template.profile.helpers({
    currentProfile: function(){
            
        if(Meteor.userId() != null){
            var profile = Meteor.user();   
            return profile;
        }
    }

});
