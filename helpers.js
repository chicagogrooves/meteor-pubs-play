if (Meteor.isClient) {
  UI.registerHelper("oddNumbers", function () {
    return oddsCollection.find();
  });
  UI.registerHelper("evenNumbers", function () {
    return evensCollection.find();
  });
}
