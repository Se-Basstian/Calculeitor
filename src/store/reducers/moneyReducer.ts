interface Money {
  bill: number;
  times: string;
}

export interface State {
  money: Money[];
  result: number;
}

export type Action = {
  type: "SET_VALUE";
  payload: { index: number; value: string };
};

export function reducer(state: State, action: Action): State {
  const { index, value } = action.payload;

  switch (action.type) {
    case "SET_VALUE": {
      if (index < 0 || index >= state.money.length) {
        return state;
      }

      const updatedMoney: Money[] = state.money.map((item, idx) => {
        if (idx === index) {
          return { ...item, times: value };
        }

        return item;
      });

      const newResult = updatedMoney.reduce((suma, item) => {
        const timesToNumeric = Number(item.times);
        const result = Number.isNaN(timesToNumeric)
          ? 0
          : timesToNumeric * item.bill;

        return suma + result;
      }, 0);

      return {
        money: updatedMoney,
        result: newResult,
      };
    }

    default:
      return state;
  }
}
