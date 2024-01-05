import styled from "@emotion/styled";

export const Form = styled.form`
    width: 350px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content:flex-start;
    gap: 30px;
    border: 3px solid green;
    margin-bottom: 25px;
`;

export const Label = styled.label`
    display: block;
    font-size: 20px;
`;

export const Input = styled.input`
    display: block;  
    margin-top: 10px;
    border: 1px solid green;
    border-radius: 4px;
    height:20px;
`;

export const Button = styled.button`
    width: 100px;
    border: 1px solid green;
    border-radius: 4px;
    background-color: inherit;
`;