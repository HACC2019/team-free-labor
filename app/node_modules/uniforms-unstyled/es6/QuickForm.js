import { QuickForm } from 'uniforms';
import AutoField from './AutoField';
import BaseForm from './BaseForm';
import ErrorsField from './ErrorsField';
import SubmitField from './SubmitField';
const Quick = (parent) => { var _a; return _a = class extends QuickForm.Quick(parent) {
        getAutoField() {
            return AutoField;
        }
        getErrorsField() {
            return ErrorsField;
        }
        getSubmitField() {
            return SubmitField;
        }
    },
    _a.Quick = Quick,
    _a; };
export default Quick(BaseForm);
