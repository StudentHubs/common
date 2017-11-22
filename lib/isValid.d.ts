import { Scalar } from 'rgo';
export interface Rules {
    equals?: any;
    email?: true;
    password?: true;
    transform?: 'email' | 'url';
    maxWords?: number;
    minChoices?: number;
    maxChoices?: number;
    lt?: string;
    gt?: string;
    options?: any[] | Obj;
}
export default function isValid(rules: {
    scalar: Scalar;
    optional?: boolean;
} & Rules, value: any, values: Obj): boolean;
