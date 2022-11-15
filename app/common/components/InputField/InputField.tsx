import crossError from '../../../icons/Exclude.svg';

export const InputField = ({
	label = '',
	placeholder = '',
	isRequired = false,
	disabled = false,
	error = '',
	type = 'text',
}: InputFieldProps) => {
	return (
		<div className='mt-4 flex flex-col'>
			{label && (
				<label htmlFor='email' className='block'>
					{label} {isRequired && '*'}
				</label>
			)}
			<input
				id='email'
				type={type}
				disabled={disabled}
				placeholder={placeholder}
				className='mt-1 h-12 rounded-lg border-1 border-solid border-black p-3 focus:outline-none'
				formNoValidate
			/>
			{error && (
				<div className='mt-1 flex text-red-600'>
					<img src={crossError} alt='error' />
					<small className='ml-2 block'>{error}</small>
				</div>
			)}
		</div>
	);
};

interface InputFieldProps {
	label?: string;
	placeholder?: string;
	isRequired?: boolean;
	disabled?: boolean;
	error?: string;
	type?: 'text' | 'password' | 'email' | 'file' | 'date';
}
