/* eslint-disable react/display-name */
import React from "react";
import TextInput, { InputProps } from "./Input";

// This component auto-clears input on next change of input text


const AutoClearInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ ...rest }, ref) => {
    const [shownValue, setShownValue] = React.useState<string>("");
    const [removedValue, setRemovedValue] = React.useState<string | null>(null);

    React.useEffect(() => {
      if (typeof rest.value === "string") {
        if (removedValue === null && shownValue !== rest.value) {
          setShownValue(rest.value);
        } else if (removedValue !== null && removedValue !== rest.value) {
          setRemovedValue(rest.value);
        }
      }
    }, [removedValue, rest.value, shownValue]);

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setRemovedValue(shownValue);
      setShownValue("");
      rest.onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      if (removedValue !== null) {
        setRemovedValue(null);
        setShownValue(removedValue);
      }
      rest.onBlur?.(e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (removedValue !== null) {
        setRemovedValue(null);
      }
      setShownValue(e.target.value);
      rest.onChange?.(e);
    };

    return (
      <div className="relative">
        <TextInput
          ref={ref}
          {...rest}
          value={shownValue}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {
          <div className="absolute top-2 left-3 text-opacity-50 text-neutral-500">
            {removedValue}
          </div>
        }
      </div>
    );
  }
);

export default AutoClearInput;
