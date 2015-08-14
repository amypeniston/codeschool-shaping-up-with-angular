//wrap in a closure
(function() {
  //pull in dependency in products.js
  var app = angular.module('gemStore', ['store-directives']);

  app.controller('StoreController', ['$http', function($http){
    //this.products = gems; //for hard coded json data

    var store = this;
    store.products = []; //prevent weird page loading behavior due to empty array
    $http.get('./store-products.json').success(function(data){
        store.products = data;
    });
  }]);

  app.controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review);

      //clear form after add
      this.review = {};
    };
  });
})();