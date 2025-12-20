import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const Button = styled.button`
  width: 336px;
  height: 48px;
  background-color: ${theme.colors.dark.red};
  border-radius: 6px;
  border: none;

  color: #fff;
  font-size: 15px;
  font-weight: 400;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.2s ease, transform 0.1s ease;

  &:hover {
    background-color: ${theme.colors.dark.white};
    color: ${theme.colors.dark.darkBlue};
  }
  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
