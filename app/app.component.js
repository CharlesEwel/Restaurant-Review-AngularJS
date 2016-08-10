System.register(['angular2/core', './restaurant.model', './restaurant-list.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, restaurant_model_1, restaurant_list_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (restaurant_model_1_1) {
                restaurant_model_1 = restaurant_model_1_1;
            },
            function (restaurant_list_component_1_1) {
                restaurant_list_component_1 = restaurant_list_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.restaurants = [
                        new restaurant_model_1.Restaurant("Reo's Ribs", "BBQ", "4211-4225 NE Sandy Blvd, Portland, OR 97213", "moderate", 0),
                        new restaurant_model_1.Restaurant("RingSide", "American", "2165 W Burnside St, Portland, OR 97210", "expensive", 1),
                        new restaurant_model_1.Restaurant("Le Bistro Montage", "Cajun", "301 SE Morrison St, Portland, OR 97214", "moderate", 2),
                        new restaurant_model_1.Restaurant("Maya's Taqueria", "Mexican", "1000 SW Morrison St, Portland, OR 97205", "cheap", 3)
                    ];
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [restaurant_list_component_1.RestaurantListComponent],
                        template: "\n    <h1>Restaurant Review</h1>\n    <restaurant-list [restaurantList]= \"restaurants\">\n    </restaurant-list>\n\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map