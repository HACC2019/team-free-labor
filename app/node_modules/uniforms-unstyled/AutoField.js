"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var invariant_1 = tslib_1.__importDefault(require("invariant"));
var uniforms_1 = require("uniforms");
var react_1 = require("react");
var BoolField_1 = tslib_1.__importDefault(require("./BoolField"));
var DateField_1 = tslib_1.__importDefault(require("./DateField"));
var ListField_1 = tslib_1.__importDefault(require("./ListField"));
var NestField_1 = tslib_1.__importDefault(require("./NestField"));
var NumField_1 = tslib_1.__importDefault(require("./NumField"));
var RadioField_1 = tslib_1.__importDefault(require("./RadioField"));
var SelectField_1 = tslib_1.__importDefault(require("./SelectField"));
var TextField_1 = tslib_1.__importDefault(require("./TextField"));
var AutoField = /** @class */ (function (_super) {
    tslib_1.__extends(AutoField, _super);
    function AutoField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AutoField.prototype.getChildContextName = function () {
        return this.context.uniforms.name;
    };
    AutoField.prototype.render = function () {
        var props = this.getFieldProps(undefined, { ensureValue: false });
        if (props.component === undefined) {
            if (props.allowedValues) {
                if (props.checkboxes && props.fieldType !== Array) {
                    props.component = RadioField_1.default;
                }
                else {
                    props.component = SelectField_1.default;
                }
            }
            else {
                switch (props.fieldType) {
                    case Date:
                        props.component = DateField_1.default;
                        break;
                    case Array:
                        props.component = ListField_1.default;
                        break;
                    case Number:
                        props.component = NumField_1.default;
                        break;
                    case Object:
                        props.component = NestField_1.default;
                        break;
                    case String:
                        props.component = TextField_1.default;
                        break;
                    case Boolean:
                        props.component = BoolField_1.default;
                        break;
                }
                invariant_1.default(props.component, 'Unsupported field type: %s', props.fieldType.toString());
            }
        }
        return react_1.createElement(props.component, this.props);
    };
    AutoField.displayName = 'AutoField';
    return AutoField;
}(uniforms_1.BaseField));
exports.default = AutoField;
