import { useEffect, useState } from "react";
import { Container, DogImagesContainer, DogPhoto, DogPhotoContainer } from "./styled";



const DogCards = (props: any) => {

    const [modalIsOpen, setModalIsOpen] = useState<Boolean>(false)
    const [dogIndex, setDogIndex] = useState()

    useEffect(() => {


        if (modalIsOpen) {
            document.body.classList.add('active-modal')
        } else {
            document.body.classList.remove('active-modal')
        }
        console.log(modalIsOpen)
    }, [modalIsOpen])

    const toggleModalSetDog = (item: any) => {
        setDogIndex(item)
        setModalIsOpen(!modalIsOpen);
    };
    const toggleModal = () => {
        setModalIsOpen(!modalIsOpen);
    };

    return (
        <Container>
            <DogImagesContainer onClick={() => () => toggleModal()}>
                {props.data?.list?.map((item: any, index: number) => {
                    return (
                        <DogPhotoContainer key={index} onClick={() => toggleModalSetDog(item)}>
                            <DogPhoto src={item} />
                            <p>{props.data?.breed} {index + 1}</p>
                        </DogPhotoContainer>
                    )
                })}

            </DogImagesContainer>
            {modalIsOpen && (
                <div className="modal" onClick={ () => toggleModal()}>
                    <div className="overlay">
                        
                    </div>
                    <div className="modal-content">
                    <img src={dogIndex}/>
                    </div>
                </div>
            )
            }
        </Container>
    )
}

export default DogCards