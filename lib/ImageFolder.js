ImageFolders = new Mongo.Collection("imageFolders");
ImageFiles = new Mongo.Collection("imageFiles");

Meteor.methods({
  addFolder:function(path){
    ImageFolders.insert({ imgFolderPath:path });
  },
  deleteFolder:function(folderId) {
    ImageFolders.remove(folderId);
  },
  addFolderImages:function(folderId,fileName){
    ImageFiles.insert({ folderId:folderId, fileName:fileName });
  },
  deleteFolderImages:function(folderId) {
    if (ImageFiles.find().count() === 0) { return; }
    if (ImageFiles.find({folderId:folderId}).count() > 0) {
      ImageFiles.remove({folderId:folderId});
    }
  }
});
