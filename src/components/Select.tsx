import React, { useState } from "react";
import AutoClearInput from "./AutoClearInput";

export interface DropdownType {
  id: number;
  name: string;
}

interface SelectProps {
  label: string;
  options?: DropdownType[];
  onChange?: (selectedValue: number) => void;
  value?: number;
  muted?: boolean;
}

// This check wether the blur is outside the element completely
function isCompleteBlur(event: React.FocusEvent<HTMLDivElement>): boolean {
  const { currentTarget, relatedTarget } = event;
  return !relatedTarget || !currentTarget.contains(relatedTarget as Node);
}

export const Select = React.forwardRef<HTMLInputElement, SelectProps>(
  ({ label, options, value, muted = false, onChange }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState<string>();
    const [filterValue, setFilterValue] = useState<string>();
    const [selectedOption, setSelectedOption] = useState<DropdownType | null>(
      null
    );

    React.useEffect(() => {
      if (!value || selectedOption?.id === value) {
        return;
      }
      const selection = options?.find((o) => o.id === value);
      if (selection) {
        setSelectedOption(selection);
        setInputValue(selection.name);
      }
    }, [options, selectedOption?.id, value]);

    const handleOptionClick = React.useCallback(
      (option: DropdownType) => {
        setInputValue(option.name);
        setSelectedOption(option);
        onChange?.(option.id);
        setFilterValue(undefined);
      },
      [onChange]
    );

    const handleBlur = React.useCallback(
      (e: React.FocusEvent<HTMLDivElement>) => {
        if (!isCompleteBlur(e)) {
          return;
        }
        setIsOpen(false);
        setFilterValue(undefined);

        // reset the input value
        if (!selectedOption) {
          setInputValue("");
        } else {
          setInputValue(selectedOption.name);
        }
      },
      [selectedOption]
    );

    const filteredOptions = React.useMemo(
      () =>
        filterValue === undefined
          ? options
          : options?.filter((x) =>
              x.name.toLowerCase().includes(filterValue.toLowerCase())
            ),
      [filterValue, options]
    );

    return (
      <div
        role="button"
        className="relative"
        tabIndex={0}
        onBlur={handleBlur}
        onClick={() => {
          !muted ? setIsOpen((x) => !x) : "";
        }}
      >
        <AutoClearInput
          ref={ref}
          label={label}
          value={inputValue}
          suffix={!muted ? (isOpen ? "⯅" : "⯆") : ""}
          onChange={(e) => {
            setInputValue(e.target.value);
            setFilterValue(e.target.value);
          }}
          muted={muted}
        />
        <div
          className={`${
            !isOpen && "hidden"
          } absolute w-full mt-1 border border-gray-200 rounded-sm shadow-lg bg-white z-20`}
          style={{ maxHeight: "10.4rem", overflowY: "auto" }}
        >
          {filteredOptions?.map((option, index) => (
            <div
              key={index}
              className={`${
                option.id === selectedOption?.id && "bg-blue-100"
              } px-3 py-2 hover:bg-gray-100 cursor-pointer`}
              onClick={() => handleOptionClick(option)}
            >
              {option.name}
            </div>
          ))}
          {!filteredOptions?.length && (
            <div className="px-3 py-2 text-neutral-500">No data</div>
          )}
        </div>
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;
