var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, HostBinding, Input } from '@angular/core';
var BusyIndicatorOverlayCircularComponent = /** @class */ (function () {
    function BusyIndicatorOverlayCircularComponent() {
        this.BusyMessage = "Please Wait...";
        this.BackgroundColor = '#FFFFFF';
        this.leftBarClass = true;
    }
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], BusyIndicatorOverlayCircularComponent.prototype, "BusyMessage", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], BusyIndicatorOverlayCircularComponent.prototype, "IsBusy", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], BusyIndicatorOverlayCircularComponent.prototype, "BackgroundColor", void 0);
    __decorate([
        HostBinding('class.left-bar'),
        __metadata("design:type", Object)
    ], BusyIndicatorOverlayCircularComponent.prototype, "leftBarClass", void 0);
    BusyIndicatorOverlayCircularComponent = __decorate([
        Component({
            selector: 'pm-busy-indicator-overlay-circular',
            //templateUrl: './app/controls/components/busy-indicator/busy-indicator-overlay/busy-indicator-overlay-circular.html',
            templateUrl: './busy-indicator-overlay-circular.html',
            host: {
                '[style.background-color]': 'BackgroundColor',
            },
            styles: ["\n  :host { \n    position: absolute;\n    top: 0px;\n    left: 0px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 100%;\n    width: 100%;\n    z-index: 1000;\n    opacity: .8;\n    flex-direction: column;\n  }\n  "]
        })
    ], BusyIndicatorOverlayCircularComponent);
    return BusyIndicatorOverlayCircularComponent;
}());
export { BusyIndicatorOverlayCircularComponent };