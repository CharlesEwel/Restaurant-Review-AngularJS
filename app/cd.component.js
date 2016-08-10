System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var CdComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CdComponent = (function () {
                function CdComponent() {
                }
                CdComponent.prototype.toggleCart = function (setState) {
                    this.cd.inCart = setState;
                };
                CdComponent = __decorate([
                    core_1.Component({
                        selector: 'cd-display',
                        inputs: ['cd'],
                        template: "\n  <div>\n  <input *ngIf=\"cd.inCart\" type=\"checkbox\" checked (click)=\"toggleCart(false)\"/>\n  <input *ngIf=\"!cd.inCart\" type=\"checkbox\" (click)=\"toggleCart(true)\"/>\n  <label>{{ cd.artist }} | {{ cd.title}} | {{ cd.price }} | {{ cd.genre }}</label>\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], CdComponent);
                return CdComponent;
            }());
            exports_1("CdComponent", CdComponent);
        }
    }
});
//# sourceMappingURL=cd.component.js.map