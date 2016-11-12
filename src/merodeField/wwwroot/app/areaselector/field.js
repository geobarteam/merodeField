"use strict";
var Area = (function () {
    function Area(positionX, positionY) {
        this.positionX = positionX;
        this.positionY = positionY;
        this.charachter = "";
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
        this.areas = [];
        this.colNumbers.forEach(function (col) {
            _this.areas[col] = [];
            _this.rowNumbers.forEach(function (row) {
                _this.areas[col][row] = new Area(col, row);
            });
        });
    };
    Field.prototype.selectArea = function (x, y) {
        this.areas[x][y].selected = !this.areas[x][y].selected;
    };
    Field.prototype.selectedAreas = function () {
        var filetered = Array();
        this.areas.forEach(function (row) { return row.forEach(function (col) {
            if (col.selected) {
                filetered.push(col);
            }
        }); });
        return filetered;
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