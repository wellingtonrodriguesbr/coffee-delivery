import { Minus, Plus } from "phosphor-react";
import { useState } from "react";
import { ButtonContainer } from "./styles";

interface IncrementDecrementButtonProps {
  height: string;
}

export function IncrementDecrementButton({
  height,
}: IncrementDecrementButtonProps) {
  const [totalItems, setTotalItems] = useState(0);

  function handleDecrementItems() {
    if (totalItems <= 0) {
      setTotalItems(0);
    } else {
      setTotalItems((counter) => counter - 1);
    }
  }
  return (
    <ButtonContainer height={height}>
      <button onClick={handleDecrementItems}>
        <Minus size={14} weight="bold" />
      </button>
      <span>{totalItems}</span>
      <button onClick={() => setTotalItems((counter) => counter + 1)}>
        <Plus size={14} weight="bold" />
      </button>
    </ButtonContainer>
  );
}
