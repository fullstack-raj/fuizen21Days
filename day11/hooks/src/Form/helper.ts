import { IChoiceGroupOption } from "@fluentui/react";

export const DEPARTMENT: IChoiceGroupOption[] = [
    { key: "IT", text: "IT" },
    { key: "Health", text: "Health" },
];

/*  
Personal information
name, date of birth, address, phone number, email address

Emergency contact information: 
name, relationship, phone number

Employment information
job title, department, start date, salary

*/

export const EMPLOYEE_FORM_ELEMENTS = [
    {
        row: 0,
        className: "rowThree",
        controls: [

            {
                type: "TextFieldForm",
                name: "name",
                label: "name",
                isRequired: false,
            },
            {
                type: "TextFieldForm",
                name: "dateofbirth",
                label: "date of birth",
                isRequired: false,
            },
            {
                type: "TextFieldForm",
                name: "phonenumber",
                label: "phone number",
                isRequired: false,
            }
             
        ],
    },
    {
        row: 0,
        className: "rowThree",
        controls: [ 
            {
                type: "TextFieldForm",
                name: "email",
                label: "email",
                isRequired: false,
            }, 
            {
                type: "TextFieldForm", 
                name: "jobtitle",
                label: "job title",
                isRequired: false, 
            },
            {
                type: "DropdownForm",
                name: "department",
                label: "department",
                isRequired: false,
                options: DEPARTMENT,
                placeholder: "Select",  
            },
        ],
    }
];