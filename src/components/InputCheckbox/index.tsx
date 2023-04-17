import classNames from "classnames";
import { useRef, useState } from "react";
import { usePaginatedTransactions } from "src/hooks/usePaginatedTransactions";
import { InputCheckboxComponent } from "./types";

export const InputCheckbox: InputCheckboxComponent = ({
  id,
  checked = false,
  disabled,
  onChange,
}) => {
  const { current: inputId } = useRef(`RampInputCheckbox-${id}`);
  const [isChecked, setIsChecked] = useState(checked);
  const paginatedTransactionsUtils = usePaginatedTransactions();

  return (
    <div className="RampInputCheckbox--container" data-testid={inputId}>
      <label
        htmlFor={inputId}
        className={classNames("RampInputCheckbox--label", {
          "RampInputCheckbox--label-checked": checked,
          "RampInputCheckbox--label-disabled": disabled,
        })}
      />
      <input
        id={inputId}
        type="checkbox"
        className="RampInputCheckbox--input"
        checked={isChecked}
        disabled={disabled}
        onChange={() => onChange(!checked)}
        onClick={() => {
          setIsChecked((c) => !c);
          paginatedTransactionsUtils.invalidateData();
        }}
      />
    </div>
  );
};
