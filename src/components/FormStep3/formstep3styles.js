import styled from "styled-components"
import { darkGreen } from "../Base/colors"
import { Input } from "../FormComponent/FormBaseComponents/formbasecomponentsstyles";
import { BBp } from "../Base/fonts";

export const FormStep3Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    @media (max-width: 768px) {
        padding-bottom: 80px;
    }
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

export const DateText = styled(BBp)`
    color: ${darkGreen};
    margin-block-end: 10px;
    margin-block-start: 0px;
    font-size: 12px;
`;