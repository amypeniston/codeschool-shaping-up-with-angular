//wrap in closure 
(function(){
    //declare a new app for the products, name is arbitrary
    var app = angular.module('store-directives', []);

    //create the <product-description></product-description> custom directive
    app.directive("productDescription", function() {
      return {
        restrict: 'E', //specify type of directive, here Element. Alternatively 'A' for attribute
        templateUrl: "product-description.html" //specify url of template to load
      };
    });

    app.directive("productReviews", function() {
      return {
        restrict: 'E',
        templateUrl: "product-reviews.html"
      };
    });

    app.directive("productSpecs", function() {
      return {
        restrict:"A",
        templateUrl: "product-specs.html"
      };
    });

    app.directive("productTabs", function() {
      return {
        restrict: "E",
        templateUrl: "product-tabs.html",
        controller: function() { //move the controller functionality inside directive
          this.tab = 1;

          this.isSet = function(checkTab) {
            return this.tab === checkTab;
          };

          this.setTab = function(activeTab) {
            this.tab = activeTab;
          };
        },
        controllerAs: "tab" //set the alias for the controller
      };
    });

    app.directive("productGallery", function() {
      return {
        restrict: "E",
        templateUrl: "product-gallery.html",
        controller: function() {
          this.current = 0;
          this.setCurrent = function(imageNumber){
            this.current = imageNumber || 0;
          };
        },
        controllerAs: "gallery"
      };
    });
  })();
