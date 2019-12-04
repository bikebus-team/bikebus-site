import styled from "styled-components"
import { darkGreen, offWhite } from "../Base/colors"
import { Input } from "../FormComponent/FormBaseComponents/formbasecomponentsstyles";

export const FormStep3Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const SmallInput = styled(Input)`
`;

export const SmallInputWrapper = styled.div`
    width: 45%
`;

export const TimesWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
