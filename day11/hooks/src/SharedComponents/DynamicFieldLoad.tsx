import { DropdownForm } from "./DropdownForm";
import TextareaForm from "./TextareaForm";
import TextFieldForm from "./TextFieldForm";

export const DynamicFieldLoad = (fieldName: string, item: any) => {
    switch (fieldName) {  
        case "DropdownForm":
            return <DropdownForm {...item} />;
        case "TextFieldForm":
            return <TextFieldForm {...item} />;
        case "TextareaForm":
            return <TextareaForm {...item} />;

        default:
            return 'Component Missing';
    }
};
export default DynamicFieldLoad;
