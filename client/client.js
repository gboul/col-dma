ImageFolders = new Mongo.Collection("imageFolders");

Router.map(function() {
  this.route('welcome', {path: '/'});
  this.route('config', {path: '/config'});
});

if (Meteor.isClient) {
  Meteor.subscribe("imageFolders");
};
