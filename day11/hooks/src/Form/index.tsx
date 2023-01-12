import * as React from "react";
import { useEffect } from "react";

import {
    FormProvider,
    SubmitHandler,
    useForm,
} from "react-hook-form";

import { DatePicker, PrimaryButton } from "@fluentui/react";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import DynamicFieldLoad from "../SharedComponents/DynamicFieldLoad";
import { EMPLOYEE_FORM_ELEMENTS, NewEMPLOYEE_FORM_ELEMENTS } from "./helper";
import './form.scss';
import TextFieldForm from "../SharedComponents/TextFieldForm";
import { useParams } from "react-router-dom";
import axios from "axios";

import { useNavigate } from "react-router-dom";


const EmployeeForm = () => {

    interface IEmployeeData {
        name?: string;
        dateofbirth?: string;
        phonenumber?: string;
        email?: string;
        jobtitle?: string;
        department?: string;
    }

    // schema declaration validation
    const EmployeeSchema: yup.SchemaOf<IEmployeeData> = yup.object().shape({
        name: yup.string().required().min(4).max(10),
        dateofbirth: yup.string(),
        phonenumber: yup.string(),
        email: yup.string(),
        jobtitle: yup.string(),
        department: yup.string(),
    });

    const EmployeeFormMethods = useForm<any>({
        mode: "all",
        resolver: async (data, context, options) => {
            return yupResolver(EmployeeSchema)(data, context, options);
        },
    });

    const [submittedData, setSubmitedData] = React.useState();

    const navigation = useNavigate();
    const EmployeeFormSubmit: SubmitHandler<any> = async (
        data: any,
    ) => {
        setSubmitedData(data); 
        if (id) {
            editForm(data);
        } else {
            createForm(data);
        }
        EmployeeFormMethods.reset({});
        navigation('/view')
    };

    // // validation for check mark
    // useEffect(() => {
    //     EmployeeFormMethods.setValue('department', "IT");
    // }, [EmployeeFormMethods.getValues('jobtitle')])

    const getAdditionalProps = (item: any) => {
        item.control = EmployeeFormMethods.control;
        item.setValue = EmployeeFormMethods.setValue;
        item.register = EmployeeFormMethods.register;
        return item;
    };


    const id = useParams();

    const [data, setData] = React.useState<any>();
    const getEmployeeData = async () => {
        try {
            const result = await axios.get(`http://localhost:5000/data/${id.id}`);
            setData(result.data);
        } catch (error) {
            console.log(error)
        }
    }

    const editForm = async (updatedData: any) => {
        try {
            const result = await axios.put(`http://localhost:5000/data/${id.id}`, updatedData);
            setData(result.data);
        } catch (error) {
            console.log(error)
        }
    }

    const createForm = async (updatedData: any) => {
        const generateNumber: any = Math.random();
        const newData = { ...updatedData, 'id': generateNumber }
        try {
            const result = await axios.post(`http://localhost:5000/data`, newData);
            setData(result.data);
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        getEmployeeData();
    }, [id]);

    useEffect(() => {
        data &&
            Object.entries(data).forEach(([key, value]: any) => {
                EmployeeFormMethods.setValue(key, value, { shouldValidate: true });
            });
    }, [data]);

    console.log(EmployeeFormMethods.watch(), EmployeeFormMethods.formState.errors)

    return (
        <div className="form">
            <div className="form_header">
                <h1>Employee Registration</h1>
            </div>
            <FormProvider {...EmployeeFormMethods}>
                <form onSubmit={EmployeeFormMethods.handleSubmit(EmployeeFormSubmit)}>
                    <div className="form_container">

                        {/* <TextFieldForm
                            name="role"
                            label="Role"
                        /> */}

                        {EMPLOYEE_FORM_ELEMENTS?.map((rows: any) => {
                            return (
                                <div className={`rowThree ${rows.className}`}>
                                    {rows.controls?.map((item: any) => {
                                        const updatedItem = getAdditionalProps(item);
                                        return DynamicFieldLoad(item.type, updatedItem);
                                    })}
                                </div>
                            );
                        })}

                        {/* {NewEMPLOYEE_FORM_ELEMENTS?.map((item: any) => {
                            const updatedItem = getAdditionalProps(item);
                            return DynamicFieldLoad(item.type, updatedItem);
                        })} */}

                    </div>
                    <div className="form_footer">
                        <PrimaryButton type="submit"
                            onClick={EmployeeFormMethods.handleSubmit(EmployeeFormSubmit)}

                        >Submit</PrimaryButton>
                    </div>
                </form>
            </FormProvider>
        </div>
    );
};

export default EmployeeForm;
