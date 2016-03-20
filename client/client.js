
Router.map(function() {
  this.route('main', {path: '/'});
  this.route('config', {path: '/config'});
});

if (Meteor.isClient) {
  Meteor.subscribe("imageFolders");
  Meteor.subscribe("imageFiles");
};
