import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './sign-in-form.html';

Template.signInForm.events({

    'click #submit-form2'(events){
        console.log('ok');

        var form = event.target.form;
        email = form.email.value;
        password = form.password.value;

        console.log('email' + email);
        console.log('password' + password);

        Meteor.loginWithPassword(email, password, (Error)=>{
            console.log("Zalogowany?");
            console.log(Error);
            console.log(Meteor.userId());

            if(Meteor.userId() != null ){
                FlowRouter.go('/profile');
            }else{
                console.log('źle jest');
            }
    
        });
        
    }



});