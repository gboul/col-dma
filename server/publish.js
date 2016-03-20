// ImageFolders = new Mongo.Collection("imageFolders");

if (Meteor.isServer) {
  // This code only runs on the server
  // Only publish tasks that are public or belong to the current user
  Meteor.publish("imageFolders", function () {
    return ImageFolders.find({}, { sort: { path: 1 } });
  });
  Meteor.publish("imageFiles", function () {
    return ImageFolders.find({}, { sort: { path: 1 } });
  });
}
