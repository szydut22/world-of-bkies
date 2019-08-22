import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/competition/competition.js';
import '../../ui/pages/ranking/ranking.js';
import '../../ui/pages/login/login.js';
import '../../ui/pages/competitionPlace/competitionPlace.js';
import '../../ui/pages/profile/profile.js';
import '../../ui/pages/not-found/not-found.js';
import '../../ui/pages/creating-competition/creating-competition.js';

// Set up all routes in the app
FlowRouter.route('/', {
  name: 'Home_page',
  action() {
    BlazeLayout.render('App_body', { main: 'Home_page' });
  },
});

FlowRouter.route('/competition', {
  name: 'Competition',
  action() {
    BlazeLayout.render('App_body', { main: 'Competition' });
  },
});

FlowRouter.route('/ranking', {
  name: 'Ranking',
  action() {
    BlazeLayout.render('App_body', { main: 'Ranking' });
  },
});

FlowRouter.route('/login', {
  name: 'Login',
  action() {
    BlazeLayout.render('App_body', { main: 'login' });
  },
});

FlowRouter.route('/competitionplace/:id', {
  name: 'CompetitionPlace',
  action() {
    BlazeLayout.render('App_body', { main: 'competitionPlace' });
  },
});

FlowRouter.route('/profile', {
  name: 'Profile',
  action() {
    BlazeLayout.render('App_body', { main: 'profile' });
  },
});

FlowRouter.route('/creating-competition', {
  name: 'CreatingCompetition',
  action() {
    BlazeLayout.render('App_body', { main: 'creatingCompetition' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};


