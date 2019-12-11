import styled from "styled-components"
import { darkGreen } from "../Base/colors"
import { BBh3 } from "../Base/fonts";

export const FormFinalWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Title = styled(BBh3)`
    text-align: center;
    color: ${darkGreen};
`;

export const TextWrapper = styled.div`
  max-width: 600px
`;