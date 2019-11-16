"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var uniforms_1 = require("uniforms");
var AutoField_1 = tslib_1.__importDefault(require("./AutoField"));
var BaseForm_1 = tslib_1.__importDefault(require("./BaseForm"));
var ErrorsField_1 = tslib_1.__importDefault(require("./ErrorsField"));
var SubmitField_1 = tslib_1.__importDefault(require("./SubmitField"));
var Quick = function (parent) { var _a; return _a = /** @class */ (function (_super) {
        tslib_1.__extends(class_1, _super);
        function class_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        class_1.prototype.getAutoField = function () {
            return AutoField_1.default;
        };
        class_1.prototype.getErrorsField = function () {
            return ErrorsField_1.default;
        };
        class_1.prototype.getSubmitField = function () {
            return SubmitField_1.default;
        };
        return class_1;
    }(uniforms_1.QuickForm.Quick(parent))),
    _a.Quick = Quick,
    _a; };
exports.default = Quick(BaseForm_1.default);
