"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var uniforms_1 = require("uniforms");
var ValidatedQuickForm_1 = tslib_1.__importDefault(require("./ValidatedQuickForm"));
var Auto = function (parent) { var _a; return _a = /** @class */ (function (_super) {
        tslib_1.__extends(class_1, _super);
        function class_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return class_1;
    }(uniforms_1.AutoForm.Auto(parent))),
    _a.Auto = Auto,
    _a; };
exports.default = Auto(ValidatedQuickForm_1.default);
