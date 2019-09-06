import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './sign-in-form.html';

Template.signInForm.onCreated(function bodyOnCreated() {
    this.model = {
        ErrorMessage: new ReactiveVar(''),
    };
  });

Template.signInForm.events({

    'click #submit-form2'(events){
        const model = Template.instance().model;
        var form = event.target.form;
        email = form.email.value;
        password = form.password.value;

        Meteor.loginWithPassword(email, password, (Error)=>{
            if(Error){        
                model.ErrorMessage.set(Error.message);
            }else{
                model.ErrorMessage.set('');
                FlowRouter.go('/profile');
            }
        });
    }
});

Template.signInForm.helpers({
    isThereError: function(){
        const model = Template.instance().model;
        console.log(model.ErrorMessage.get());
        if(model.ErrorMessage.get() != ""){       
            console.log('jestem true');     
            return true;
        } else {
            console.log('jestem false');
            return false;
        }
    },

    errorMessage: function(){
        const model = Template.instance().model;
        if(model.ErrorMessage.get() == 'User not found [403]'){
            return 'Uzytkownik nie znaleziony';
        }

        if(model.ErrorMessage.get() == 'Incorrect password [403]'){
            return 'Nieprawidłowe hasło';
        }

        if(model.ErrorMessage.get() == 'Match failed [400]'){
            return 'Podaj login i hasło ';
        }

        return model.ErrorMessage.get();
    }


});

