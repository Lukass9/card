import { Button, FormCard, FormWrapp, Wrapp } from "./Form.style";
import { FormDoubleInput } from "./FormInput/FormDoubleInput";
import { FormInput } from "./FormInput/FormInput";
import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect, useState } from "react";
import { FormComplite } from "./FormComplite/FormComplite";
import { AnimatePresence, motion } from "framer-motion";

const spaceInCardNumber = (e: any) => {
    if (e.nativeEvent.inputType !== "deleteContentBackward" && e.target.name === "CARD NUMBER") {
        if (e.target.value.length === 4) e.target.value = e.target.value + " "
        else if (e.target.value.length === 9) e.target.value = e.target.value + " "
        else if (e.target.value.length === 14) e.target.value = e.target.value + " "
    }
    else if(e.nativeEvent.inputType === "deleteContentBackward"){
        if (e.target.value.length === 4) e.target.value = e.target.value.substring(0,3) 
        else if (e.target.value.length === 9) e.target.value = e.target.value.substring(0,8) 
        else if (e.target.value.length === 14) e.target.value = e.target.value.substring(0,13) 
        
    }
}

export type Inputs = {
    "CARDHOLDER NAME": string,
    "CARD NUMBER": string,
    MM: string,
    YY: string,
    CVC: string,
};

export type InputOptions = {
    required?: string | boolean,
    minLength?: {
        value: number,
        message: string,
    },
    maxLength?: {
        value: number,
        message: string,
    },
    pattern?: {
        value: RegExp,
        message: string,
    },
    onChange?: (e: any) => void
}

const cardholderOptions: InputOptions = {
    required: "Can't be blank",
    minLength: {
        value: 19,
        message: "The minimum value is 19 characters"
    },
    maxLength: {
        value: 19,
        message: "The maximum value is 19 characters"
    },
    pattern: {
        value: /(\d{4} ){3}\d{4}/,
        message: 'Wrong format, numbers only'
    },
    onChange: (e) => {
        spaceInCardNumber(e)
    }
}

const otherInputOptions: InputOptions = {
    required: "Can't be blank"
}

interface Props {
    changeData: (
        name: "CARDHOLDER NAME" | "CARD NUMBER" | "MM" | "YY" | "CVC" | undefined,
        newNumber: string
    ) => void,

    dataCard: {
        "CARDHOLDER NAME": string,
        "CARD NUMBER": string,
        MM: string,
        YY: string,
        CVC: string
    }

}

export const Form: React.FC<Props> = ({ changeData, dataCard }) => {    
    const { register, handleSubmit, watch, formState: { errors, isSubmitSuccessful}, reset } = useForm<Inputs>({
        mode: "onBlur", defaultValues: {
            "CARDHOLDER NAME": "",
            "CARD NUMBER": "",
            MM: "",
            YY: "",
            CVC: "",
        }
    });
    const onSubmit: SubmitHandler<Inputs> = data => 
        console.log(JSON.stringify(data));
    const resetInput = () => {
        reset()
    }

    useEffect(() => {
        const subscription = watch((data, { name, type }) => {
            if (name !== undefined) changeData(name, data[name] as string)
        })
        return () => subscription.unsubscribe()
    }, [watch, dataCard])

    return (
        <FormCard onSubmit={handleSubmit(onSubmit)}>
            {/* <AnimatePresence mode="wait"> */}
                {isSubmitSuccessful
                    ?
                        <FormComplite resetInput={resetInput} />
                    :
                    <FormWrapp as={motion.div}
                        key="form"
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1, transition: { duration: .8 } }}
                        exit={{ x: -100, opacity: 0, transition: { duration: .8 } }}
                    >
                        <FormInput
                            register={register}
                            inputOptions={otherInputOptions}
                            errors={errors}
                            name="CARDHOLDER NAME"
                            type="text"
                            placeholder="e.g. Jane Applesed" />
                        <FormInput
                            register={register}
                            inputOptions={cardholderOptions}
                            errors={errors}
                            name="CARD NUMBER"
                            type="text"
                            placeholder="e.g. 1234 5678 9123 0000" />
                        <Wrapp>
                            <FormDoubleInput
                                label="EXP. DATE (MM/YY)"
                                register={register}
                                errors={errors}
                                inputOptions={otherInputOptions}
                                name="MM"
                                name2="YY"
                                type="number" />
                            <FormInput
                                register={register}
                                inputOptions={otherInputOptions}
                                errors={errors}
                                isSmall={true}
                                name="CVC"
                                type="number"
                                placeholder="e.g. 123" />
                        </Wrapp>
                        <Button> Confirm </Button>
                    </FormWrapp>
                }
            {/* </AnimatePresence> */}
        </FormCard>
    )
};