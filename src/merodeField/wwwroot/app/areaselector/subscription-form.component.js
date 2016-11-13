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
var model_1 = require('./model');
var SubscriptionFormComponent = (function () {
    function SubscriptionFormComponent() {
        this.onSubmitted = new core_1.EventEmitter();
        this.submitted = false;
        this.subscription = new model_1.Subscription();
    }
    SubscriptionFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.onSubmitted.emit(this.subscription);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], SubscriptionFormComponent.prototype, "areas", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], SubscriptionFormComponent.prototype, "onSubmitted", void 0);
    SubscriptionFormComponent = __decorate([
        core_1.Component({
            selector: 'subscription-form',
            templateUrl: 'app/areaselector/subscription-form.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], SubscriptionFormComponent);
    return SubscriptionFormComponent;
}());
exports.SubscriptionFormComponent = SubscriptionFormComponent;
//# sourceMappingURL=subscription-form.component.js.map