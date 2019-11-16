/// <reference types="react" />
import PropTypes from 'prop-types';
import AutoField from './AutoField';
declare const AutoFields: {
    ({ autoField, element, fields, omitFields, ...props }: {
        [x: string]: any;
        autoField: any;
        element: any;
        fields: any;
        omitFields: any;
    }, { uniforms: { schema } }: {
        uniforms: {
            schema: any;
        };
    }): import("react").DetailedReactHTMLElement<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
    contextTypes: {
        uniforms: any;
    };
    propTypes: {
        autoField: PropTypes.Requireable<string | ((...args: any[]) => any)>;
        element: PropTypes.Requireable<string | ((...args: any[]) => any)>;
        fields: PropTypes.Requireable<(string | null)[]>;
        omitFields: PropTypes.Requireable<(string | null)[]>;
    };
    defaultProps: {
        autoField: typeof AutoField;
        element: string;
        omitFields: never[];
    };
};
export default AutoFields;
