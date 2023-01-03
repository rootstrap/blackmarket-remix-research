import { useEffect, useState } from 'react';
import cn from 'classnames';

interface ValidationMessageProps {
  error: string;
  isSubmitting?: boolean;
}

export const ValidationMessage = ({ error, isSubmitting = false }: ValidationMessageProps) => {
  const [show, setShow] = useState(!!error);

  useEffect(() => {
    const id = setTimeout(() => {
      const hasError = !!error;
      setShow(hasError && !isSubmitting);
    });
    return () => clearTimeout(id);
  }, [error, isSubmitting]);

  return (
    <div
      className={cn('text-red-500', { 'h-4 opacity-100': show }, { 'h-0 opacity-0': !show })}
      style={{ transition: 'all 300ms ease-in-out' }}
    >
      {error}
    </div>
  );
};
