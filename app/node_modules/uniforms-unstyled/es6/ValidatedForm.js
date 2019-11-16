import { ValidatedForm } from 'uniforms';
import BaseForm from './BaseForm';
const Validated = (parent) => { var _a; return _a = class extends ValidatedForm.Validated(parent) {
    },
    _a.Validated = Validated,
    _a; };
export default Validated(BaseForm);
