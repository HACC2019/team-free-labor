/// <reference types="react" />
import { BaseField } from 'uniforms';
export default class HiddenField extends BaseField {
    static displayName: string;
    constructor();
    componentWillReceiveProps({ value: valueDesired }: {
        value: any;
    }): void;
    render(): JSX.Element | null;
}
