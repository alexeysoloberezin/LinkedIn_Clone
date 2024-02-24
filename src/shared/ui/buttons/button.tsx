import React from 'react';

export type ButtonProps = {
  text: string;
  onClick?: () => void;
  variant?: ButtonVariants;
  outlined?: boolean;
  loading?: boolean;
  rounded?: string;
  notifyCount?: number;
}

type ButtonVariants = 'primary' | 'secondary';

const Button: React.FC<ButtonProps> = ({
                                         text,
                                         onClick = () => {
                                         },
                                         variant,
                                         classes = '',
                                         rounded = 'full',
                                         loading = false,
                                         outlined = false,
                                       }) => {
  const roundedClass = {
    full: 'rounded-full',
    md: 'rounded-md',
    lg: 'rounded-lg',
    none: '', // No rounding
  }[rounded] || '';

  const baseStyle = `px-4 py-1 text-base font-medium focus:outline-none duration-200 hover:ring-2 focus:ring-2`;
  const variantStyles = {
    primary: outlined
      ? 'text-blue-600 border border-blue-600 hover:bg-blue-100'
      : 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: outlined
      ? 'text-gold-700 border font-semibold border-gold-500 hover:bg-gold-500 hover:text-black ring-gold-500'
      : 'bg-gold-500 text-black font-semibold hover:bg-gold-500 ring-gold-500',
  }

  variant = variant || 'primary';

  const getVariantStyle = (variant: 'primary' | 'secondary') => variantStyles[variant] || '';

  const cursor = loading ? 'cursor-not-allowed' : 'cursor-pointer';

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${getVariantStyle(variant)} ${roundedClass} ${cursor} ${classes}`}
      disabled={loading}
    >
      {loading ? (
        <div className="flex justify-center items-center p-1 ">
          <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></div>
        </div>
      ) : (
        text
      )}
    </button>
  );
};

export default Button;
