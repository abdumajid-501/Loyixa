import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const Input = styled.input`
    width: 100%;
    padding: 0 1rem 1.125rem 1rem;
    border-bottom: 2px solid ${theme.colors.dark.greyishBlue};
    outline: none;

    &::placeholder {
        color: ${theme.colors.dark.white50};
    }
    &:focus {
        border-bottom-color: ${theme.colors.dark.white};
    }
` 