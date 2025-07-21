import clsx from "clsx";
import type { ChangeEvent } from "react";
import type { Action as MoneyAction } from "../../../store/reducers/moneyReducer";
import style from "./style.module.css";

interface Props {
  label: string;
  value: string;
  setValue: {
    dispatch: (action: MoneyAction) => void;
    index: number;
  };
}
const NumberInput = ({ label, value, setValue }: Props) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const rawValue = event.target.value;

    let cleanedValue = rawValue.replace(/[^0-9]/g, "");

    const startsWithZero = cleanedValue.startsWith("0");
    if (startsWithZero) {
      cleanedValue = cleanedValue.replace(/0/, "");
    }

    setValue.dispatch({
      type: "SET_VALUE",
      payload: { index: setValue.index, value: cleanedValue },
    });
    console.log(value);
  };

  return (
    <div className={clsx(style.NumberInput)}>
      <label
        className={clsx(style.NumberInput__label)}
        htmlFor={`NumberInput-${label}`}
      >
        {label}
      </label>
      <input
        className={clsx(style.NumberInput__input)}
        id={`NumberInput-${label}`}
        type="text"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default NumberInput;
