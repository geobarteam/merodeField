"use strict";
var Area = (function () {
    function Area() {
    }
    return Area;
}());
exports.Area = Area;
var Field = (function () {
    function Field(colCount, rowCount) {
        this.colCount = colCount;
        this.rowCount = rowCount;
        this.rowNumbers = this.getRepeatArray(this.rowCount);
        this.colNumbers = this.getRepeatArray(this.colCount);
        this.initializeAreas();
    }
    Field.prototype.initializeAreas = function () {
        var _this = this;
        this.Areas = [];
        this.colNumbers.forEach(function (col) {
            _this.Areas[col] = [];
            _this.rowNumbers.forEach(function (row) {
                _this.Areas[col][row] = new Area();
            });
        });
    };
    Field.prototype.selectArea = function (x, y) {
        this.Areas[x][y].selected = !this.Areas[x][y].selected;
    };
    Field.prototype.getRepeatArray = function (repeatTimes) {
        var items = [];
        for (var i = 0; i < repeatTimes; i++) {
            items[i] = i + 1;
        }
        return items;
    };
    return Field;
}());
exports.Field = Field;
//# sourceMappingURL=field.js.map