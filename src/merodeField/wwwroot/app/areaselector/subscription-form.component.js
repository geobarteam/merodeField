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
var subscription_service_1 = require('../services/subscription.service');
var SubscriptionFormComponent = (function () {
    function SubscriptionFormComponent(subscriptionService) {
        this.subscriptionService = subscriptionService;
        this.onSubmitted = new core_1.EventEmitter();
        this.submitted = false;
        this.subscription = new model_1.Subscription();
    }
    SubscriptionFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.areas.forEach(function (area) {
            _this.subscription.areas.push(new model_1.SubscriptionArea(area.position, area.charachter));
        });
        this.subscriptionService.addSubscription(this.subscription)
            .then(function (result) {
            _this.onSubmitted.emit(result);
            _this.submitted = true;
        }, function (error) { return console.error(error); });
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
        __metadata('design:paramtypes', [subscription_service_1.SubscriptionService])
    ], SubscriptionFormComponent);
    return SubscriptionFormComponent;
}());
exports.SubscriptionFormComponent = SubscriptionFormComponent;
//# sourceMappingURL=subscription-form.component.js.map