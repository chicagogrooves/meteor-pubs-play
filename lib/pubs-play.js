if (Meteor.isServer) {
  Meteor.publish("numbers", function (upto) {
    var publication = this;

    _.range(1, upto+1).forEach(function(n){
      var target = (n%2) ? "odds" : "evens";
      publication.added(target, n, {number: n});
    });

    publication.ready();
  });
}
if (Meteor.isClient) {
  Meteor.subscribe("numbers", 10);
  window.oddsCollection = new Meteor.Collection("odds");
  window.evensCollection = new Meteor.Collection("evens");
}
