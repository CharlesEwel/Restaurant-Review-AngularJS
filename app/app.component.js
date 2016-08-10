System.register(['angular2/core', './cd.model', './cd-list.component', './cart.component'], function(exports_1, context_1) {
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
    var core_1, cd_model_1, cd_list_component_1, cart_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (cd_model_1_1) {
                cd_model_1 = cd_model_1_1;
            },
            function (cd_list_component_1_1) {
                cd_list_component_1 = cd_list_component_1_1;
            },
            function (cart_component_1_1) {
                cart_component_1 = cart_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.cds = [
                        new cd_model_1.Cd("Led Zeppelin", "IV", 15, "classic rock", 0),
                        new cd_model_1.Cd("David Bowie", "Aladdin Sane", 20, "classic rock", 1),
                        new cd_model_1.Cd("Ella Fitzgerald", "Greatest Hits", 15, "blues", 2),
                        new cd_model_1.Cd("Dr. Dre", "2001", 15, "hip-hop", 3)
                    ];
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [cd_list_component_1.CdListComponent, cart_component_1.Cart],
                        template: "\n    <h1>Epicodus Music Emporium</h1>\n    <h2>For Sale</h2>\n    <cd-list [cdList]= \"cds\">\n    </cd-list>\n    <h2>My Cart</h2>\n    <cart [cdList]= \"cds\">\n    </cart>\n  "
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