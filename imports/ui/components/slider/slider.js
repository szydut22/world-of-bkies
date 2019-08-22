import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './slider.html';

Template.slider.onCreated(function bodyOnCreated() {
    this.model = {
        selectedSlide: new ReactiveVar(0),
        maxSlides: 3
    };
  });


Template.slider.helpers({
    isSelected: function(idx) {
        const model = Template.instance().model;
        if(model.selectedSlide.get()==idx){
            return true;
        }else{
            return false;
        }
    }
});

Template.slider.events({
    'click .w-slider-arrow-right'(event){
        const model = Template.instance().model;
        var currentSlide = model.selectedSlide.get() + 1;
        if (currentSlide > model.maxSlides ){
            currentSlide = 0;
        }
        model.selectedSlide.set(currentSlide);
    },

    'click .w-slider-arrow-left'(event){
        const model = Template.instance().model;
        var currentSlide = model.selectedSlide.get() - 1;
        if (currentSlide < 0 ){
            currentSlide = model.maxSlides;
        }
        model.selectedSlide.set(currentSlide );
    },

    'click .w-slider-dot'(event){
        const model = Template.instance().model;
        var currentSlide = parseInt(event.target.attributes['data-slide-no'].value);
        model.selectedSlide.set(currentSlide);
    }
})
