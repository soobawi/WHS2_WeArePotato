var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
var LabelComponent = /** @class */ (function () {
    function LabelComponent() {
    }
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], LabelComponent.prototype, "Label", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], LabelComponent.prototype, "LabelWidth", void 0);
    LabelComponent = __decorate([
        Component({
            selector: 'pm-label',
            //templateUrl: './app/controls/components/labels/label/label.html',
            templateUrl: './label.html',
            styles: ["\n    :host { \n        display: flex;\n        align-items: center;\n        flex-shrink: 0;\n    }\n  "]
        })
    ], LabelComponent);
    return LabelComponent;
}());
export { LabelComponent };