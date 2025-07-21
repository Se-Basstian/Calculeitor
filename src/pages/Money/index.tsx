import clsx from "clsx";
import { useReducer } from "react";
import PageWidth from "../../components/common/PageWidth";
import NumberInput from "../../components/ui/NumberInput";
import Result from "../../components/ui/Result";
import {
  type State as MoneyState,
  reducer as moneyReducer,
} from "../../store/reducers/moneyReducer";
import style from "./style.module.css";

const initialState: MoneyState = {
  money: [
    { bill: 200, times: "" },
    { bill: 100, times: "" },
    { bill: 50, times: "" },
    { bill: 20, times: "" },
    { bill: 10, times: "" },
    { bill: 5, times: "" },
    { bill: 2, times: "" },
    { bill: 1, times: "" },
    { bill: 0.5, times: "" },
    { bill: 0.2, times: "" },
    { bill: 0.1, times: "" },
  ],
  result: 0,
};

const Money = () => {
  const [stateMoney, dispatchMoney] = useReducer(moneyReducer, initialState);

  const showMoneyDataInNumerInput = stateMoney.money.map((item, idx) => {
    const formattedLabel = `S/ ${item.bill < 0.6 ? item.bill.toFixed(2) : item.bill}`;

    return (
      <NumberInput
        key={crypto.randomUUID()}
        label={formattedLabel}
        value={item.times}
        setValue={{ index: idx, dispatch: dispatchMoney }}
      />
    );
  });

  return (
    <PageWidth className={clsx(style.Money)}>
      <h2 className={clsx(style.Money__h2)}>Cuenta dinero</h2>

      <div className={clsx(style.Money__NumberInputGroup)}>
        {showMoneyDataInNumerInput}
      </div>

      <Result>{`S/ ${stateMoney.result.toFixed(2)}`}</Result>
    </PageWidth>
  );
};

export default Money;
