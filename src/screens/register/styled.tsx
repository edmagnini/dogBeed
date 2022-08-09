import styled from "styled-components"
import { FourthColor, MainColor, SecondColor, ThirdColor } from "../../constants/colors"

export const Container = styled.div`

`

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
        button{
        background-color: ${MainColor};
        color: #000000;
        width: 500px;
        height: 8vh;
        border-radius: 5px;
        font-family: 'Montserrat', sans-serif;
        font-size: 2rem;
        margin-top: 1rem;
        border-style:none;

        &:hover {
            background-color: ${FourthColor};
            color: ${SecondColor}
        }
    };
    
`
export const Form = styled.form`

`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;  
    position: relative;
    margin-top: 25vh;
    input{
        padding: 5px;
        margin: .8vh;
        width: 500px;
        height: 8vh;
        font-family: 'Montserrat', sans-serif;
        font-size: 1.5rem;
        border-width: 0px 0px 0px 0px;
        border-radius: 5px;
        outline: none;
    } 
    label{
        position: absolute;
        background-color: transparent;
        top: 15%;
        left: 5%;
        transform-origin: 0 0;
        font-size: 3rem;
        transition: transform 0.2s ease-in-out;
    } 
    input:focus ~ label,
    input:valid ~ label{
        transform: translateY(-1.1em) scale(0.8);
        color:${SecondColor};
    }
`

export const Input = styled.input`

`