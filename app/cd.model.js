System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Cd;
    return {
        setters:[],
        execute: function() {
            Cd = (function () {
                function Cd(artist, title, price, genre, id) {
                    this.artist = artist;
                    this.title = title;
                    this.price = price;
                    this.genre = genre;
                    this.id = id;
                    this.inCart = false;
                }
                return Cd;
            }());
            exports_1("Cd", Cd);
        }
    }
});
//# sourceMappingURL=cd.model.js.map