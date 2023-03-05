import { DoubleInput, InputWrapp, Label, WrappDoubleInput } from "../Form.style";

interface Props {
    name: string,
    name2: string,
    type: string,
    label: string,
}

export const FormDoubleInput: React.FC<Props> = ({name, type, name2, label }) => {
    return (
        <WrappDoubleInput>
            <Label htmlFor={name}>{label}</Label>
            <InputWrapp>
                <DoubleInput 
                    id={name} 
                    type={type}
                    placeholder={name}
                    />
                <DoubleInput 
                    id={name2} 
                    type={type}
                    placeholder={name2}
                    />
            </InputWrapp>
        </WrappDoubleInput>
    )
};