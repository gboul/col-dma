Template.config.onRendered(function (){
});

Template.config.helpers({
  imageFolders: function () {
    return ImageFolders.find();
  },
});

Template.config.events({
  'click #returnToHome': function(){
    Router.go('main');
  },
  'click #addToScan': function(){
    var dialog = ElectronImplementation.getDialog();
    var folder = dialog.showOpenDialog({ properties: [ 'openDirectory' ]});
    // $('#folderList').append("<li>"+folder+"</li>");
    // ImageFolders.insert({ imgFolderPath:folder });
    Meteor.call("addFolder", folder);
  },
});

Template.imgFolder.helpers({
  selected: function () {
    return Session.equals("selectedImgFolder", this._id) ? "selected" : '';
  },
  imgFolderCount: function () {
    return ImageFiles.find({folderId:this._id}).count();
  }
});

Template.imgFolder.events({
  'click': function () {
    Session.set("selectedImgFolder", this._id);
  },
  'click .glyphicon-remove': function() {
    Meteor.call("deleteFolderImages", this._id);
    Meteor.call("deleteFolder", this._id);
  },
  'click .glyphicon-repeat': function() {
    var _that = this;
    ElectronImplementation.getFiles(_that.imgFolderPath[0], function(err, files){
      // console.log(files);
      Meteor.call("deleteFolderImages", _that._id);
      _.each(files, function(element, index, list){
          Meteor.call("addFolderImages", _that._id, element);
      });
    });
  },
});
