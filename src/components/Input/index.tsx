import type { ComponentProps } from "react";

type InputProps = {
    className?: string;
} & ComponentProps<'input'>;

export function Input({ className, ...props }: InputProps) {
    const inactiveClassName = 'placeholder:text-base-label border-base-border';
    const activeClassName = 'focus:border-primary-blue outline-none';

    return <input className={`bg-base-input text-base-text border rounded-md py-3 px-4 ${inactiveClassName} ${activeClassName} ${className}`} {...props} />;
}