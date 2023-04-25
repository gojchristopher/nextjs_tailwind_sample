import { forwardRef, InputHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Size = "md" | "lg" | "xl";

type Variants = "outlined" | "unstyled" | "flushed" | "filled";

export type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  variants?: Variants;
};

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  function InputField(props, ref) {
    const {
      onChange,
      className,
      onBlur,
      onFocus,
      placeholder,
      value,
      label,
      variants = "outlined",
    } = props;

    return (
      <div className="flex h-auto w-auto flex-col font-montserrat">
        {label && <div className="pb-1 font-[500]">{label}</div>}
        <input
          className={twMerge(
            "h-10 w-full  focus:outline-none",
            /** outlined */
            variants === "outlined" &&
              "border-pr rounded-md border border-primary-700 px-2 py-1  focus:ring-4 focus:ring-purple-200",

            /** flushed  */
            variants === "flushed" && "border-b focus:border-b-primary-700",

            /** filled */
            variants === "filled" &&
              "rounded-lg bg-slate-200 px-2 py-1 focus:border focus:border-primary-700 focus:bg-transparent focus:ring-4 focus:ring-primary-200",

            /** unstyled */
            variants === "unstyled" && "",
            className
          )}
          ref={ref}
          value={value}
          type="text"
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          placeholder={placeholder}
        />
      </div>
    );
  }
);
