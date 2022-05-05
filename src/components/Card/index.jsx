import { Container } from './styles'
import { FaMapMarkerAlt } from "react-icons/fa";

const Card = (props) => {
    return (
        <Container>
            <h2>
                CEP: {props.cep} <FaMapMarkerAlt size={25} color="#940000" />
            </h2>
            <span>{props.logradouro}</span>
            <span>Complemento: {props.complemento}</span>
            <span>Bairro: {props.bairro}</span>
            <span>
                {props.localidade} - {props.uf}
            </span>
        </Container>
    )
}

export default Card