System.register(['angular2/core', './cd.component', './artist.pipe', './genre.pipe', './in-cart.pipe'], function(exports_1, context_1) {
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
    var core_1, cd_component_1, artist_pipe_1, genre_pipe_1, in_cart_pipe_1;
    var CdListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (cd_component_1_1) {
                cd_component_1 = cd_component_1_1;
            },
            function (artist_pipe_1_1) {
                artist_pipe_1 = artist_pipe_1_1;
            },
            function (genre_pipe_1_1) {
                genre_pipe_1 = genre_pipe_1_1;
            },
            function (in_cart_pipe_1_1) {
                in_cart_pipe_1 = in_cart_pipe_1_1;
            }],
        execute: function() {
            CdListComponent = (function () {
                function CdListComponent() {
                    this.filterArtist = "all";
                    this.filterGenre = "all";
                    this.filterCart = false;
                }
                CdListComponent.prototype.onGenreChange = function (filterOption) {
                    this.filterGenre = filterOption;
                };
                CdListComponent.prototype.onArtistChange = function (filterOption) {
                    this.filterArtist = filterOption;
                };
                CdListComponent = __decorate([
                    core_1.Component({
                        selector: 'cd-list',
                        inputs: ['cdList'],
                        directives: [cd_component_1.CdComponent],
                        pipes: [artist_pipe_1.ArtistPipe, genre_pipe_1.GenrePipe, in_cart_pipe_1.InCartPipe],
                        template: "\n  <select (change)=\"onArtistChange($event.target.value)\" class=\"filter input-lg\">\n    <option value=\"all\" selected=\"selected\">Show All</option>\n    <option>Led Zeppelin</option>\n    <option>David Bowie</option>\n    <option>Ella Fitzgerald</option>\n    <option>Dr. Dre</option>\n  </select>\n  <select (change)=\"onGenreChange($event.target.value)\" class=\"filter input-lg\">\n    <option value=\"all\" selected=\"selected\">Show All</option>\n    <option>classic rock</option>\n    <option>blues</option>\n    <option>hip-hop</option>\n  </select>\n  <cd-display *ngFor=\"#currentCd of cdList | artist:filterArtist | genre:filterGenre | inCart:filterCart\"\n    [cd]=\"currentCd\">\n  </cd-display>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], CdListComponent);
                return CdListComponent;
            }());
            exports_1("CdListComponent", CdListComponent);
        }
    }
});
//# sourceMappingURL=cd-list.component.js.map