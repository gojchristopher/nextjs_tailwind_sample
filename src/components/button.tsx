import { ButtonHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

type Size = "sm" | "md";

type Variant = "solid" | "outline";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	size?: Size;
	variant?: Variant;
	isLoading?: boolean;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
	props,
	ref,
) {
	const {
		size = "md",
		variant = "solid",
		isLoading,
		className,
		children,
		...others
	} = props;

	return (
		<button
			ref={ref}
			className={twMerge(
				/* shared */
				"flex items-center justify-center gap-1 disabled:opacity-30 disabled:cursor-not-allowed rounded-md transition-all duration-200 outline-none focus:ring-primary-500/50 focus:ring-4 font-medium",
				/* small */
				size === "sm" && "h-10 px-3 py-3",
				/* medium */
				size === "md" && "h-11 px-4 py-3.5",
				/* solid */
				variant === "solid" && "text-white bg-primary-700 hover:bg-primary-800",
				/* outline */
				variant === "outline" &&
					"border border-primary-700 text-primary-700 hover:bg-primary-100",
				/* allow styles to be overriden outside */
				className,
			)}
			{...(isLoading && {
				disabled: true,
			})}
			{...others}
		>
			{children}
		</button>
	);
});
