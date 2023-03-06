import { Button, FormCard, FormWrapp, Wrapp } from "./Form.style";
import { FormDoubleInput } from "./FormInput/FormDoubleInput";
import { FormInput } from "./FormInput/FormInput";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    cardholderName: string,
    cardNumber: string,
    mm: string,
    yy: string,
    cvc: string,
};

interface Props { }

export const Form: React.FC<Props> = props => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
    return (
        <FormCard>
            <FormWrapp>
                <FormInput name="CARDHOLDER NAME" type="text" placeholder="e.g. Jane Applesed" />
                <FormInput name="CARD NUMBER" type="number" placeholder="e.g. 1234 5678 9123 0000" />
                <Wrapp>
                    <FormDoubleInput label="EXP. DATE (MM/YY)" name="MM" name2="YY" type="text" />
                    <FormInput isSmall={true} name="CVC" type="number" placeholder="e.g. 123" />
                </Wrapp>
                <Button> Confirm </Button>
            </FormWrapp>
        </FormCard>
    )
};