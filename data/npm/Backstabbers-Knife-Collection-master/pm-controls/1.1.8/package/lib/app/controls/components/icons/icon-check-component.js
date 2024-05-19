var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { Icon } from '../../../objects/icon/icon';
var IconCheckComponent = /** @class */ (function (_super) {
    __extends(IconCheckComponent, _super);
    function IconCheckComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.OriginalHeight = 14;
        _this.OriginalWidth = 14;
        return _this;
    }
    Object.defineProperty(IconCheckComponent.prototype, "Height", {
        get: function () {
            return this.OriginalHeight * this.IconSize;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IconCheckComponent.prototype, "Width", {
        get: function () {
            return this.OriginalWidth * this.IconSize;
        },
        enumerable: true,
        configurable: true
    });
    IconCheckComponent = __decorate([
        Component({
            selector: 'pm-icon-check',
            //templateUrl: './app/controls/components/svg/icon-check/icon-check.html'
            templateUrl: './icon-check.html',
            styles: ["\n    :host { \n      display: flex;\n      align-items: center;\n    }\n    "],
        })
    ], IconCheckComponent);
    return IconCheckComponent;
}(Icon));
export { IconCheckComponent };