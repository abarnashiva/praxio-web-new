import { cn } from "../util";
import React, { useState } from "react";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
// have to set the blur effect when the count exceeds.
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  inputClassName?: string;
  prefix?: string;
  suffix?: React.ReactElement | string;
  muted?: boolean;
  bgColor?: string;
  type?: string;
  rows?: number;
  maxLength?: number;
}
const wrapperClass = "relative rounded-sm px-3 py-2";
const normalRingClass = "ring-1 ring-neutral-500 ring-opacity-50";
const focusRingClass = "focus-within:ring-2 focus-within:ring-primary";
const hoverRingClass = "hover:ring-opacity-80";
const disableRingClass = "bg-slate-100  pointer-events-none";
const ringClass = `${normalRingClass} ${focusRingClass} ${hoverRingClass}`;

const peerFocusClass =
  "peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-primary";
const peerNonEmptyClass = "-top-2.5 text-xs";
const peerEmptyClass = "top-2";
const TextInput = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      prefix,
      suffix,
      inputClassName,
      bgColor,
      muted = false,
      type = "text",
      rows,
      maxLength,
      ...rest
    },
    ref
  ) => {
    const [isVisible, setIsVisible] = useState(false);
    const isTextArea = type === "textarea";
    const labelClass = `absolute left-3 text-gray-500  ${
      !muted ? "" : "bg-slate-100"
    } 
    ${bgColor && !muted ? bgColor : ""}
    ${!bgColor && !muted ? "bg-white" : ""}
    max-w-[calc(100%-1rem)] truncate transition-all duration-200 transform pointer-events-none `;
    const inputClass = `w-full border-none outline-none text-base  ${
      muted ? "bg-slate-100" : "bg-transparent"
    } p-0`;
    const peerClass = `${peerFocusClass} ${
      rest.value || muted ? peerNonEmptyClass : peerEmptyClass
    }  }`;

    return (
      <div>
        <div
          className={`flex ${wrapperClass} ${
            muted ? disableRingClass + " border" : ringClass
          }`}
        >
          {prefix && <div className="pr-1 text-neutral-500">{prefix}</div>}
          {isTextArea ? (
            <textarea
              rows={rows}
              ref={ref as React.RefObject<HTMLTextAreaElement>}
              maxLength={maxLength}
              className={`peer ${inputClass} ${inputClassName}`}
              disabled={muted}
              {...(rest as any)} //this type is for fixing the type issues for building the app
            /> //fix later
          ) : (
            <input
              ref={ref}
              type={isVisible ? "text" : type}
              className={cn("peer", inputClass, inputClassName)}
              maxLength={maxLength}
              disabled={muted}
              {...rest}
            />
          )}
          {type === "password" && (
            <div
              className="cursor-pointer text-lg py-1"
              onClick={() => setIsVisible((x) => !x)}
            >
              {isVisible ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
            </div>
          )}
          {suffix}
          <label className={`${labelClass} ${peerClass}`} htmlFor={rest.id}>
            {label}
          </label>
        </div>
      </div>
    );
  }
);

TextInput.displayName = "TextInput";

export default TextInput;
