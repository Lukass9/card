import { Button, FormCard, FormWrapp, Wrapp } from "./Form.style";
import { FormDoubleInput } from "./FormInput/FormDoubleInput";
import { FormInput } from "./FormInput/FormInput";
import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect } from "react";

const spaceInCardNumber = (e: any) =>{
    if( e.nativeEvent.inputType !== "deleteContentBackward" && e.target.name === "CARD NUMBER"){
        if(e.target.value.length === 4) e.target.value = e.target.value + " "
        else if(e.target.value.length === 9) e.target.value = e.target.value + " "
        else if(e.target.value.length === 14) e.target.value = e.target.value + " "
    } 
}

export type Inputs = {
    "CARDHOLDER NAME": string,
    "CARD NUMBER" : string,
    MM: string,
    YY: string,
    CVC: string,
};

export type InputOptions = {
    required?: string | boolean,
    minLength?: {
        value: number,
        message: string
    },
    maxLength?: {
        value: number,
        message: string
    }
    onChange?: (e:any) => void
}

const cardholderOptions: InputOptions = {
    required: "wymagane jest to mordeczko",
    minLength: {
        value: 19,
        message: "minimum mordeczko to 19 znaczków"
    },
    maxLength : {
        value: 19,
        message: "Ziomek ogarnij więcej nie możesz"
    },
    onChange: (e) => {
        spaceInCardNumber(e)
        // console.log(e.target.value.length)
    }
}

const otherInputOptions: InputOptions = {
    required: true
} 

interface Props { 
    changeData: (
        name: "CARDHOLDER NAME" | "CARD NUMBER" | "MM" | "YY" | "CVC" | undefined, 
        newNumber :string
        ) =>  void,

    dataCard:{
        "CARDHOLDER NAME": string,
        "CARD NUMBER": string,
    }

}

export const Form: React.FC<Props> = ({changeData, dataCard}) => {
    const { register, handleSubmit, watch, formState: { errors }} = useForm<Inputs>({mode: "onChange",  defaultValues:{
        "CARDHOLDER NAME": "",
        "CARD NUMBER" : "",
        MM: "",
        YY: "",
        CVC: "",
    }});
    const onSubmit: SubmitHandler<Inputs> = data => alert(JSON.stringify(data));

    useEffect(()=>{
        const subscription = watch((data, {name, type}) => {
            if (name!==undefined) changeData(name, data[name] as string)
        })
        return ()=> subscription.unsubscribe()
    },[watch, dataCard])

    return (
        <FormCard onSubmit={handleSubmit(onSubmit)}>
            <FormWrapp>
                <FormInput
                    register={register} 
                    inputOptions = {otherInputOptions}
                    errors={errors}
                    name="CARDHOLDER NAME"
                    type="text" 
                    placeholder="e.g. Jane Applesed" />
                <FormInput 
                    register={register} 
                    inputOptions = {cardholderOptions} 
                    errors={errors}
                    name="CARD NUMBER" 
                    type="text"
                    placeholder="e.g. 1234 5678 9123 0000" />
                <Wrapp>
                    <FormDoubleInput 
                        label="EXP. DATE (MM/YY)"
                        register={register} 
                        required 
                        name="MM" 
                        name2="YY" 
                        type="text" />
                    <FormInput 
                        register={register} 
                        inputOptions = {otherInputOptions}  
                        errors={errors}
                        isSmall={true} 
                        name="CVC" 
                        type="number" 
                        placeholder="e.g. 123" />
                </Wrapp>
                <Button> Confirm </Button>
            </FormWrapp>
        </FormCard>
    )
};