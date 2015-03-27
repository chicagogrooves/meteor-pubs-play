if (Meteor.isServer) {
  Meteor.publish("numbers", function () {
    this.added("numbers", 1, {number: 1});
    this.added("numbers", 2, {number: 2});
    this.ready();
  });
}
if (Meteor.isClient) {
  Meteor.subscribe("numbers");
  window.numbersCollection = new Meteor.Collection("numbers");
}
