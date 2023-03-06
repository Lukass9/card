import { Input, Label, Wrapp2 } from "../Form.style";

interface Props {
    name: string,
    type: string,
    placeholder: string,
    isSmall?: boolean,
}

export const FormInput: React.FC<Props> = ({name, type, placeholder, isSmall = false}) => {
    return (
        <Wrapp2
            isSmall={isSmall}>
            <Label htmlFor={name}>{name}</Label>
            <Input 
                id={name} 
                type={type}
                placeholder={placeholder}
                />
        </Wrapp2>
    )
};