
import { ButtonConteiner } from "./styles"

const Button = ({label, onClick}) => {
    return (
      <ButtonConteiner onClick={onClick} type="button">
        {label}
      </ButtonConteiner>
    );
  }
  
  export default Button;
  