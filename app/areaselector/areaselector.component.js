"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var AreaSelectorComponent = (function () {
    function AreaSelectorComponent(router) {
        this.router = router;
        this.verticals = new Array();
        this.horizontals = new Array();
        this.verticals = this.getVerticals();
        this.horizontals = this.getHorizontals();
    }
    AreaSelectorComponent.prototype.ngOnInit = function () {
    };
    AreaSelectorComponent.prototype.getVerticals = function () {
        var verticals = [];
        for (var i = 0; i < 32; i++) {
            verticals[i - 1] = i;
        }
        return verticals;
    };
    AreaSelectorComponent.prototype.getHorizontals = function () {
        var horizontals = [];
        for (var i = 0; i < 32; i++) {
            horizontals[i - 1] = i;
        }
        return horizontals;
    };
    AreaSelectorComponent = __decorate([
        core_1.Component({
            selector: 'my-areaselector',
            templateUrl: 'app/areaselector/areaselector.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AreaSelectorComponent);
    return AreaSelectorComponent;
}());
exports.AreaSelectorComponent = AreaSelectorComponent;
//# sourceMappingURL=areaselector.component.js.map