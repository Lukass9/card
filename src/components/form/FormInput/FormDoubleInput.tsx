import { FieldErrors, Path, UseFormRegister } from "react-hook-form";
import { InputOptions, Inputs } from "../Form";
import { DoubleInput, Error, InputWrapp, Label, WrappDoubleInput } from "../Form.style";

interface Props {
    name: Path<Inputs>,
    name2: Path<Inputs>,
    type: string,
    label: string,
    register: UseFormRegister<Inputs>
    inputOptions: InputOptions
    errors: FieldErrors<Inputs>
}

export const FormDoubleInput: React.FC<Props> = ({inputOptions, register, name, type, name2, label, errors}) => {
    return (
        <WrappDoubleInput>
            <Label htmlFor={name}>{label}</Label>
            <InputWrapp>
                <DoubleInput 
                    {...register(name,{ ...inputOptions })}
                    id={name} 
                    type={type}
                    placeholder={name}
                    error={Boolean( errors[name] )}
                    />
                <DoubleInput 
                    {...register(name2,{ ...inputOptions })}
                    id={name2} 
                    type={type}
                    placeholder={name2}
                    error={Boolean( errors[name2] )}
                    />
            </InputWrapp>
            <Error> {errors[name]?.message || errors[name2]?.message} </Error>
        </WrappDoubleInput>
    )
};