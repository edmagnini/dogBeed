import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { Container, Form, FormContainer, Input, InputContainer } from "./styled"
import axios from "axios";
import { globalUrl } from "../../constants/globalUrl";

const Register = () => {
    const navigate = useNavigate();

    const { form, onChange, cleanFields } = useForm({
        email: "",
    });

    const handleLogin = async (event: any) => {
        event.preventDefault();
        const body = form
        try {
            const response = await axios.post(`${globalUrl}/register`, body)
            localStorage.setItem("token", response.data.user.token)
            navigate("/main");
        } catch (error) {
            alert("Falha ao realizar o login. Por favor, tente novamente.")
            // console.log(error)
        }
        cleanFields();
    };

    return (
        <Container>
            <Form onSubmit={handleLogin}>
                <FormContainer>
                    <InputContainer>
                        <Input
                            name={"email"}
                            value={form.email}
                            onChange={onChange}
                            required
                        >
                        </Input>
                        <label>E-mail</label>
                    </InputContainer>
                    <button>Login</button>
                </FormContainer>
            </Form>
        </Container>
    )
}

export default Register;