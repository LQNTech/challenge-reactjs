import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import { Index } from "./index";

test("test index page", () => {
  const { getByTestId } = render(<Index />);
  expect(getByTestId("id_page_title").textContent).toBe("Challenge ReactJS");
  expect(getByTestId("id_page_description").textContent).toBe(
    "Haz click en el botón para ir al contenido"
  );
  expect(getByTestId("id_button_start").textContent).toBe("Iniciar");
  expect(getByTestId("id_button_start").nodeName).toBe("BUTTON");
});
