import React from "react";
import { Controller, Path, UseFormReturn } from "react-hook-form";

interface FormItemProps {
  errorText?: string;
  helpText?: string;
  children: React.ReactElement;
}

export const FormItem = ({
  errorText,
  helpText,
  children,
}: FormItemProps): React.ReactElement => {
  const helpFieldClass = `text-xs ml-3 ${
    !errorText ? "text-slate-500" : "text-red-500"
  }`;

  return (
    <div className="pt-3">
      {children}
      <div className="h-4">
        <p className={helpFieldClass}>{errorText ? errorText : helpText}</p>
      </div>
    </div>
  );
};

interface Label {
  label: string;
}

export function createFormItem<
  SchemaType extends Record<string, any>,
  ChildProps extends Label
>(
  control: UseFormReturn<SchemaType>["control"],
  errors: UseFormReturn<SchemaType>["formState"]["errors"],
  Component: React.ComponentType<ChildProps>
) {
  return function FormInput({
    label,
    helpText,
    name,
    ...rest
  }: {
    label: string;
    helpText?: string;
    name: Path<SchemaType>;
  } & Omit<ChildProps, "label">) {
    return (
      <FormItem errorText={errors[name]?.message as string} helpText={helpText}>
        <Controller
          name={name}
          control={control}
          render={({ field }) => {
            const componentProps = {
              ...(rest as unknown as Omit<ChildProps, "label">),
              label,
            } as ChildProps;
            return <Component {...componentProps} {...field} />;
          }}
        />
      </FormItem>
    );
  };
}

export default FormItem;
