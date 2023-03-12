import { Path, UseFormRegister } from "react-hook-form";
import { Inputs } from "../Form";
import { DoubleInput, InputWrapp, Label, WrappDoubleInput } from "../Form.style";

interface Props {
    name: Path<Inputs>,
    name2: Path<Inputs>,
    type: string,
    label: string,
    register: UseFormRegister<Inputs>,
    required: boolean;
}

export const FormDoubleInput: React.FC<Props> = ({register, required, name, type, name2, label }) => {
    return (
        <WrappDoubleInput>
            <Label htmlFor={name}>{label}</Label>
            <InputWrapp>
                <DoubleInput 
                    {...register(name,{required})}
                    id={name} 
                    type={type}
                    placeholder={name}
                    />
                <DoubleInput 
                    {...register(name2,{required})}
                    id={name2} 
                    type={type}
                    placeholder={name2}
                    />
            </InputWrapp>
        </WrappDoubleInput>
    )
};