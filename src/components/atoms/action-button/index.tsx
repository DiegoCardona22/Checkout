// @packages
import classNames from 'classnames';
import { Button, Spinner } from 'react-bootstrap';

type ButtonProps = {
  className?: string;
  dataTestId?: string;
  disabled?: boolean;
  eventType?: string;
  id?: string;
  label: string;
  loading?: boolean;
  onClick? : () => void;
  size?: 'lg' | 'sm';
  sizeIcon?: 'lg' | 'sm';
  startIcon?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'primary-outline' | 'primary-outline-white' | 'dark';
};

const ActionButton = ({
  className,
  dataTestId = 'my-button',
  disabled = false,
  eventType = '',
  id = 'action-button',
  label,
  loading = false,
  onClick = () => null,
  size,
  sizeIcon = 'sm',
  startIcon,
  type,
  variant = 'primary'
}: ButtonProps) => {
  const textClass = (variant === 'primary' || variant === 'primary-outline-white') ? 'text-white' : 'text-dark';

  return (
    <Button
      id={id}
      data-testid={dataTestId}
      size={size}
      type={type}
      className={classNames(
        className,
        textClass
      )}
      onClick={onClick}
      disabled={disabled || loading}
      variant={variant}
      data-event-type={eventType}
    >
      {startIcon && (
        <i
          className={classNames(
            sizeIcon,
            startIcon
          )}
          aria-hidden="true"
        />
      )}
      {loading && <Spinner size="sm" animation="border" />}
      <span>{label}</span>
    </Button>
  );
};

export default ActionButton;
