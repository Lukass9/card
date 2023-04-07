import { motion } from "framer-motion";
import { FieldErrors, Path, UseFormRegister } from "react-hook-form";
import { InputOptions, Inputs } from "../Form";
import { Input, Label, Wrapp2, Error } from "../Form.style";

interface Props {
    name: Path<Inputs>,
    type: string,
    placeholder: string,
    isSmall?: boolean,
    register: UseFormRegister<Inputs>
    inputOptions: InputOptions
    errors: FieldErrors<Inputs>
}

export const FormInput: React.FC<Props> = ({errors, name, type, placeholder, isSmall = false, register, inputOptions}) => {
    const variants = {
        normal: { rotate:0, x:0 },
        error: { 
            rotate: [2,0,2,0,2,0],
            x:[4,0,4,0,4,0],
            transition: {
                duration: .2,
            }
        }
      }

    return (
        <Wrapp2
            isSmall={isSmall}>
            <Label htmlFor={name}>{name}</Label>
            <Input as={motion.input}
                {...register(name,{ ...inputOptions })}
                id={name} 
                type={type}
                maxLength={inputOptions.maxLength?.value}
                placeholder={placeholder}
                error={Boolean( errors[name] )}
                variants={variants}
                animate={errors[name]? "error" : "normal"} 
                />
            <Error>{errors[name]?.message}</Error>
        </Wrapp2>
    )
};