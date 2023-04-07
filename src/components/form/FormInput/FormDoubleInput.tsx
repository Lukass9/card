import { motion } from "framer-motion";
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

export const FormDoubleInput: React.FC<Props> = ({ inputOptions, register, name, type, name2, label, errors }) => {
    const variants = {
        normal: { rotate: 0, x: 0 },
        error: {
            rotate: [2, 0, 2, 0, 2, 0],
            x: [4, 0, 4, 0, 4, 0],
            transition: {
                duration: .2,
            }
        }
    }
    return (
        <WrappDoubleInput>
            <Label htmlFor={name}>{label}</Label>
            <InputWrapp>
                <DoubleInput as={motion.input}
                    {...register(name, {
                        ...inputOptions,
                        max: {
                            value: 12,
                            message: 'Max value is 12'
                        },
                        min: {
                            value: 3,
                            message: 'Min value is 1'
                        }
                        })}
                    id={name}
                    type={type}
                    placeholder={name}
                    error={Boolean(errors[name])}
                    variants={variants}
                    animate={errors[name] ? "error" : "normal"}
                />
                <DoubleInput as={motion.input}
                    {...register(name2, { ...inputOptions })}
                    id={name2}
                    type={type}
                    placeholder={name2}
                    error={Boolean(errors[name2])}
                    variants={variants}
                    animate={errors[name2] ? "error" : "normal"}
                />
            </InputWrapp>
            <Error> {errors[name]?.message || errors[name2]?.message} </Error>
        </WrappDoubleInput>
    )
};