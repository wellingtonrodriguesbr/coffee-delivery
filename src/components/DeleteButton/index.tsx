import { Trash } from "phosphor-react";
import { Button } from "./styles";

export function DeleteButton() {
  return (
    <Button>
      <Trash size={16} weight="regular" />
      <span>Remover</span>
    </Button>
  );
}
