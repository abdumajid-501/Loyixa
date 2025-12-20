import styled from "styled-components";
import { theme } from "../../../styles/theme";
import { breackpoints } from "../../../styles/breackpoints";


export const Card = styled.div`
   width: 100%;
   max-width: 400px;
   border-radius: .625rem;
   background-color: ${theme.colors.dark.semiDarkBlue};
   padding: 1.5rem 1.5rem 2rem 1.5rem;
   display: flex;
   flex-direction: column;
   gap: 2.5rem;

   @media ${breackpoints.table} {
    padding: 2rem;
   }
`