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
var area_1 = require('./area');
var AreaSelectorComponent = (function () {
    function AreaSelectorComponent(router) {
        var _this = this;
        this.router = router;
        this.rowsCount = 36;
        this.colCount = 25;
        this.rowNumbers = new Array();
        this.colNumbers = new Array();
        this.rowNumbers = this.getRowNumbers();
        this.colNumbers = this.getColNumbers();
        this.field = [];
        this.colNumbers.forEach(function (col) {
            _this.field[col] = [];
            _this.rowNumbers.forEach(function (row) {
                _this.field[col][row] = new area_1.Area();
            });
        });
    }
    AreaSelectorComponent.prototype.ngOnInit = function () {
    };
    AreaSelectorComponent.prototype.getRowNumbers = function () {
        return this.getRepeatArray(this.colCount);
    };
    AreaSelectorComponent.prototype.getColNumbers = function () {
        return this.getRepeatArray(this.rowsCount);
    };
    AreaSelectorComponent.prototype.select = function (area) {
        area.selected = true;
    };
    AreaSelectorComponent.prototype.getRepeatArray = function (repeatTimes) {
        var items = [];
        for (var i = 0; i < repeatTimes; i++) {
            items[i] = i + 1;
        }
        return items;
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