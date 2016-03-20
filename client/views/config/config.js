Template.config.onRendered(function (){
});

Template.config.helpers({
  imageFolders: function () {
    return ImageFolders.find({}, { sort: { path: 1 } });
  },
});

Template.config.events({
  'click #returnToHome': function(){
    Router.go('welcome');
  },
  'click #addToScan': function(){
    var dialog = ElectronImplementation.getDialog();
    var folder = dialog.showOpenDialog({ properties: [ 'openDirectory' ]});
    // $('#folderList').append("<li>"+folder+"</li>");
    ImageFolders.insert({ imgFolderPath:folder });    
  },
});

Template.imgFolder.helpers({
  selected: function () {
    return Session.equals("selectedImgFolder", this._id) ? "selected" : '';
  }
});
Template.imgFolder.events({
  'click': function () {
    Session.set("selectedImgFolder", this._id);
  }
});
