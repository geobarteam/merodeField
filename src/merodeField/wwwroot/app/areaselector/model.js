"use strict";
var Position = (function () {
    function Position(x, y) {
        this.x = x;
        this.y = y;
    }
    Position.prototype.equal = function (position) {
        return position.x === this.x && position.y === this.y;
    };
    return Position;
}());
exports.Position = Position;
var FieldArea = (function () {
    function FieldArea(position) {
        this.position = position;
        this.charachter = "";
    }
    return FieldArea;
}());
exports.FieldArea = FieldArea;
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
                _this.areas[col][row] = new FieldArea(new Position(col, row));
            });
        });
    };
    Field.prototype.selectFieldArea = function (x, y) {
        this.areas[x][y].selected = !this.areas[x][y].selected;
    };
    Field.prototype.selectedFieldAreas = function () {
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
var SubscriptionArea = (function () {
    function SubscriptionArea(position, char) {
        this.position = position;
        this.char = char;
    }
    return SubscriptionArea;
}());
exports.SubscriptionArea = SubscriptionArea;
var Subscription = (function () {
    function Subscription() {
        this.areas = new Array();
    }
    return Subscription;
}());
exports.Subscription = Subscription;
//# sourceMappingURL=model.js.map