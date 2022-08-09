import styled from "styled-components"
import { SecondColor } from "../../constants/colors"

export const Container = styled.div`
    margin: 0px 0px 0px 10px;

    body.active-modal {
    overflow-y: hidden;
    }

    .modal, .overlay {
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    .overlay {
        background: rgba(49,49,49,0.8);
    }
    .modal-content {
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        line-height: 1.4;
        background: ${SecondColor};
        padding: 14px 28px;
        border-radius: 3px;
    }
`


export const DogImagesContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
`

export const DogPhotoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${SecondColor};
    height: 410px;
    width: 400px;
`

export const DogPhoto = styled.img`
    width: 350px;
    max-height: 350px;
    &:hover {
        transform: scale(1.005)
    }
`