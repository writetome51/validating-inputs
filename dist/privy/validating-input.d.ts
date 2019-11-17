export interface ValidatingInput {
    type: string;
    id: string;
    isValid: (() => boolean) | (() => boolean)[];
    errorMessage: string | string[];
    __error: string;
    objectToBind: any;
    propertyToBind: string;
    required: boolean;
    label: string;
    hideLabel: boolean;
    hidePlaceholder: boolean;
    prompt?: string;
    objectToMatch?: any;
    propertyToMatch?: string;
    max?: number;
    min?: number;
    maxLength?: number;
    minLength?: number;
}
