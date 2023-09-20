import { styled } from "styled-components";

const InputStructure = styled.div`
  display: flex;
  flex-direction: column;

  border: none;

  animation: tilt-Right 1s cubic-bezier(.25,.46,.45,.94) both;

  label {
    margin-bottom: 5px;

    font-size: 1.5rem;
    font-weight: 300;
    line-height: 29px;

    color: var(--color-Brand1);
  }

  @keyframes tilt-Right{0%{transform:rotateX(-30deg) translateX(300px) skewX(30deg);opacity:0}100%{transform:rotateX(0deg) translateX(0) skewX(0deg);opacity:1}}
`;

const SelectStructure = styled.select`
  height: 40px;
  width: 84%;

  text-align: center;

  border-radius: 10px;
  border: 1px solid var(--color-Brand1);

  animation: tilt-Right 1s cubic-bezier(.25,.46,.45,.94) both;

  outline: none;

  font-size: 1rem;
  font-weight: 100;
  line-height: 20px;

  color: var(--color-Brand1);

  option{
    background-color: var(--color-Brand1);

    color: var(--color-White);
  }

  @keyframes tilt-Right{0%{transform:rotateX(-30deg) translateX(300px) skewX(30deg);opacity:0}100%{transform:rotateX(0deg) translateX(0) skewX(0deg);opacity:1}}
`;

const StyledInputField = styled.input`
  height: 40px;
  width: 0px;

  outline: none;
  
  padding: 14px;

  border: none;
  border-bottom: 2px solid var(--color-Brand1);

  color: var(--color-Grey3);

  font-size: 1rem;
  font-family: "Inter";
  font-weight: 400;
  line-height: 24px;

  animation: border_spacing 1s linear both; 
  animation-delay: 500ms;

  &::placeholder{
    font-size: .9rem;
    font-family: "Inter", sans-serif;
    font-weight: 100;
    line-height: 24px;

    color: var(--color-Brand1-80)
  }

  @keyframes border_spacing {
    0%{
      width: 0px;
      opacity: 0.5;
      border-bottom: 2px solid var(--color-Brand1-75);

    }

    100%{
      width: 95%;
      opacity: 1;
    }
  }
`;


export { InputStructure, SelectStructure, StyledInputField };
