"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var BaseForm_1 = tslib_1.__importDefault(require("./BaseForm"));
var QuickForm_1 = tslib_1.__importDefault(require("./QuickForm"));
var ValidatedForm_1 = tslib_1.__importDefault(require("./ValidatedForm"));
exports.default = ValidatedForm_1.default.Validated(QuickForm_1.default.Quick(BaseForm_1.default));
