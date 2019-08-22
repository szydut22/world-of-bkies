import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Accounts } from 'meteor/accounts-base';

import './sign-up-form.html';

Template.signUpForm.events({

    'click #submit-form'(events){
        console.log('ok');
        var form = event.target.form;
        firstName =  form.firstName.value;
        lastName = form.lastName.value;
        dateOfBirth = form.dateOfBirth.value;
        town = form.town.value;
        team = form.team.value;
        email = form.email.value;
        password = form.password.value; 

        var options ={
            username: email,
            email: email,
            password: password,
            profile:{
                firstName:firstName,
                lastName:lastName,
                dateOfBirth: dateOfBirth,
                town: town,
                team: team
            }
        }
        Accounts.createUser(options, (Error)=>{
            console.log("Zalozylem");
            console.log(Error);
        })
            
    }
});



