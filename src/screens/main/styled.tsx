import styled from "styled-components"
import { FourthColor, MainColor, SecondColor, ThirdColor } from "../../constants/colors"

export const Container = styled.div`
    color: ${ThirdColor};
    background-color: ${MainColor};
    
`
export const MainHeader = styled.div`
    display: flex;
    background-color: ${FourthColor};
    justify-content: space-around;
    align-items: center;
    height: 15vh;
    margin-bottom: 15px;
    button{
        background-color: ${FourthColor};
        color: #000000;
        width: 500px;
        height: 8vh;
        border-radius: 5px;
        font-family: 'Montserrat', sans-serif;
        font-size: 3rem;
        margin-top: 1rem;
        border-style:none;

        &:hover {
            background-color: ${ThirdColor};
            color: ${SecondColor}
        }
    }
    select{
        background-color: ${FourthColor};
        color: #000000;
        width: 500px;
        height: 8vh;
        border-radius: 5px;
        font-family: 'Montserrat', sans-serif;
        font-size: 3rem;
        margin-top: 1rem;
        border-style: none;

        &:hover {
            background-color: ${ThirdColor};
            color: ${SecondColor}
        }
    }
`

export const Select = styled.select`
  display: grid;
  grid-template-areas: "select";
  align-items: center;
  position: relative;

  select,
  &::after {
    grid-area: select;
  }
`