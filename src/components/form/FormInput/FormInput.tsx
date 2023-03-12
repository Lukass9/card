import { FieldErrors, Path, UseFormRegister } from "react-hook-form";
import { InputOptions, Inputs } from "../Form";
import { Input, Label, Wrapp2 } from "../Form.style";

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
    return (
        <Wrapp2
            isSmall={isSmall}>
            <Label htmlFor={name}>{name}</Label>
            <Input 
                {...register(name,{ ...inputOptions })}
                id={name} 
                type={type}
                maxLength={inputOptions.maxLength?.value}
                placeholder={placeholder}
                />
            {errors[name]?.message}
        </Wrapp2>
    )
};