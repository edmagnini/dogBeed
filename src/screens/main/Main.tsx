import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import DogCards from "../../components/DogCards/DogCards";
import { globalUrl } from "../../constants/globalUrl";
import { DogList } from "../../models/DogList";
import { DogTypes } from "../../models/DogTypes";
import { Container, MainHeader } from "./styled";

const Main = () => {
    const navigate = useNavigate();
    const [data, setData] = useState<DogList>()
    const [dogType, setDogType] = useState<DogTypes>()

    useEffect(() => {
        if (localStorage.getItem("token") == null) {
            navigate("/")
        }
        loadFeed(localStorage.getItem("token"))
    }, [dogType]);



    const loadFeed = async (token: any) => {
        try {
            if (!dogType) {
                const response: any = await axios.get(`${globalUrl}/list`,
                    {
                        headers: {
                            Authorization: token
                        }
                    }
                )
                setData(response.data)
            } else {
                const response: any = await axios.get(`${globalUrl}/list/?breed=${dogType}`,
                    {
                        headers: {
                            Authorization: token
                        }
                    }
                )
                setData(response.data)
            }

        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = (e: DogList | any) => {
        setDogType(e.target.value);
    }

    const handleLogout = () => {
        localStorage.removeItem("token")
        navigate("/")
    }

    return (
        <Container>
            <MainHeader>
                <select onChange={e => handleChange(e)}>
                    <option value="chihuahua">Chihuahua</option>
                    <option value="husky">Husky</option>
                    <option value="pug">Pug</option>
                    <option value="labrador">Labrador</option>
                </select>
                <button onClick={() => handleLogout()}>Logout</button>
            </MainHeader>
            <DogCards data={data} />
        </Container>
    )
}

export default Main