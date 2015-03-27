if (Meteor.isClient) {
  UI.registerHelper("numbers", function () {
    return numbersCollection.find();
  });
}
