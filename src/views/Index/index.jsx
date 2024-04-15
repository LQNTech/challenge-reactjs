import { Button } from "../../component/Button";
import { Text } from "../../component/Text/text";
import { Title } from "../../component/Text/title";

export const Index = () => {
  return (
    <div>
      <Title id="id_page_title">Challenge ReactJS</Title>
      <Text id="id_page_description">
        Haz click en el botón para ir al contenido
      </Text>
      <Button id="id_button_start">Iniciar</Button>
    </div>
  );
};
