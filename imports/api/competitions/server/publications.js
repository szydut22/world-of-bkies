import { Meteor } from 'meteor/meteor';
import { Competitions } from '../competitions';

Meteor.publish('competitions.all', function () {
  return Competitions.find();
});