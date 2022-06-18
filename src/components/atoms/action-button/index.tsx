// @packages
import classNames from 'classnames';
import { Button, Spinner } from 'react-bootstrap';

// @styles
import classes from './styles.module.scss';

type ButtonProps = {
  className?: string;
  dataTestId?: string;
  disabled?: boolean;
  eventType?: string;
  type?: 'button' | 'submit' | 'reset';
  id?: string;
  label: string;
  loading?: boolean;
  onClick? : () => void;
  size?: 'lg' | 'sm';
  sizeIcon?: 'lg' | 'sm';
  startIcon?: string;
  variant?: 'primary' | 'primary-outline' | 'primary-outline-white' | 'dark';
};

const ActionButton = ({
  className,
  dataTestId = 'my-button',
  disabled = false,
  eventType = '',
  id = 'action-button',
  type,
  label,
  loading = false,
  onClick = () => null,
  size,
  sizeIcon = 'sm',
  startIcon,
  variant = 'primary'
}: ButtonProps) => {
  const textClass = (variant === 'primary' || variant === 'primary-outline-white') ? 'text-white' : 'text-dark';

  const customVariant = {
    dark: classes.dark,
    'primary-outline': classes['primary-outline'],
    'primary-outline-white': classes['primary-outline-white']
  } as unknown as { [key: string]: string };

  return (
    <Button
      id={id}
      data-testid={dataTestId}
      size={size}
      type={type}
      className={classNames(
        classes.button,
        className,
        customVariant[variant] ?? `btn-${variant}`,
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
            classes['start-icon'],
            sizeIcon,
            startIcon
          )}
        />
      )}
      {loading && <Spinner size="sm" animation="border" className={classes.loading} />}
      <span>{label}</span>
    </Button>
  );
};

export default ActionButton;
