import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Accounts } from 'meteor/accounts-base';
import { ReactiveVar } from 'meteor/reactive-var';

import './sign-up-form.html';

Template.signUpForm.onCreated(function bodyOnCreated() {
    this.model = {
        ErrorMessageSignUp: new ReactiveVar(''),
    };
  });

Template.signUpForm.events({

    'click #submit-form'(events){
        const model = Template.instance().model;
        var form = event.target.form;
        var firstName =  form.firstName.value;
        var lastName = form.lastName.value;
        var dateOfBirth = parseInt(form.dateOfBirth.value);
        var town = form.town.value;
        var team = form.team.value;
        var email = form.email.value;
        var password = form.password.value; 
        
        console.log("startingNumber 27"+ JSON.stringify(startingNumber));

        if(firstName == ""){
            model.ErrorMessageSignUp.set('Nie podałeś imienia.');
            return;
        }

        if(lastName == ""){
            model.ErrorMessageSignUp.set("Nie podałeś Nazwiska.");
            return;
        }

        if(isNaN(dateOfBirth)){
            model.ErrorMessageSignUp.set("Nie podałeś daty urodzenia.");
            return;
        }

        if(dateOfBirth < 1900 || dateOfBirth > 2019){
            model.ErrorMessageSignUp.set("Podałeś date z poza zakresu.");
            return;
        }

        if(town == ""){
            model.ErrorMessageSignUp.set("Nie podałeś swojego miasta.");
            return;
        }

        if(team == ""){
            model.ErrorMessageSignUp.set("Nie podałeś swojego zespołu.");
            return;
        }

        if(password.length < 6){
            model.ErrorMessageSignUp.set("Hasło musi mieć przynajmniej 6 znaków.");
            return;
        }
        
        var startingNumber = Meteor.call("profile.getStartingNumber", function(err, startingNumber){
            console.log("Result line 27"+ startingNumber);
            var options = {
                username: email,
                email: email,
                password: password,
                profile:{
                    firstName:firstName,
                    lastName:lastName,
                    dateOfBirth: dateOfBirth,
                    town: town,
                    team: team,
                    test: "Extra Pole",
                    startingNumber: startingNumber
                }
            }
                
            Accounts.createUser(options, (Error)=>{
                if(Error){
                    model.ErrorMessageSignUp.set(Error.message);
                }else{
                    FlowRouter.go('/profile');
                }
            });    
        });        
    }
});

Template.signUpForm.helpers({

    isError: function(){
        const model = Template.instance().model;
        
        if(model.ErrorMessageSignUp.get() != ""){         
            return true;
        } else {
            return false;
        }
    },

    errorMessage: function(){
        const model = Template.instance().model;

        if(model.ErrorMessageSignUp.get() == 'Password may not be empty [400]'){
            return 'Uzupełnij pole z hasłem';
        }
        
        if(model.ErrorMessageSignUp.get() == 'Need to set a username or email [400]'){
            return 'Uzupełnij pole z adresem email';
        }

        return model.ErrorMessageSignUp.get();
    }
});



