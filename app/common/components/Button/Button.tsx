import cn from 'classnames';

interface ButtonProps {
	label: string;
	variant?: 'primary' | 'outline';
	fullWidth?: boolean;
	onClick: () => void;
	disabled?: boolean;
}

enum ButtonVariants {
	PRIMARY = 'primary',
	OUTLINE = 'outline',
}

export const Button = ({
	label,
	variant = 'primary',
	fullWidth = false,
	disabled = false,
	onClick,
}: ButtonProps) => {
	return (
		<button
			disabled={disabled}
			className={cn(
				'mt-3 block rounded-lg p-3',
				'disabled:bg-gray-200 disabled:text-gray-700',
				'hover:border-none hover:bg-blue-700 hover:text-white',
				'focus:outline-dashed focus:outline-2 focus:outline-offset-2 focus:outline-blue-600',
				'active:bg-blue-900 active:outline active:outline-4 active:outline-blue-50',
				{ 'w-full': fullWidth },
				{ 'bg-black p-3 text-white': variant === ButtonVariants.PRIMARY },
				{ 'border-1 border-black bg-white text-black': variant === ButtonVariants.OUTLINE }
			)}
			onClick={onClick}
		>
			{label}
		</button>
	);
};
