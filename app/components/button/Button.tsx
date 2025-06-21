export interface ButtonProps {
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
  backgroundColor?: string;
}

export const Button = ({
  primary = false,
  size = 'medium',
  label,
  onClick,
  backgroundColor,
}: ButtonProps) => {
  const baseClasses = `
    font-semibold rounded transition-colors
    focus:outline-none focus:ring-2 focus:ring-offset-2
  `;

  const sizeClasses = {
    small: 'text-sm px-3 py-1',
    medium: 'text-base px-5 py-2',
    large: 'text-lg px-6 py-3',
  }[size];

  const modeClasses = primary
    ? `bg-[var(--color-primary)] text-[var(--color-accent-text)] hover:bg-[var(--color-on-hover)] focus:ring-[var(--color-primary)]`
    : `bg-[var(--color-secondary)] text-[var(--color-primary)] hover:bg-[var(--color-green-light)] focus:ring-[var(--color-secondary)]`;

  return (
    <button
      type="button"
      className={`${baseClasses} ${sizeClasses} ${modeClasses}`}
      style={backgroundColor ? { backgroundColor } : undefined}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
