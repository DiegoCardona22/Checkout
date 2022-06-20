/* eslint-disable react/no-danger */
// @packages
import classnames from 'classnames';
import { ReactNode } from 'react';

// @styles
import classes from './styles.module.scss';

// @types
import { variants } from 'types/typography';

type TypographyProps = {
  children: ReactNode | string;
  className?: string;
  dangerouslySetInnerHTML?: boolean;
  variant?: variants;
};

const Typography = ({
  children,
  className,
  dangerouslySetInnerHTML,
  variant = 'body'
}: TypographyProps) => {
  const componentClasses = classnames(className, classes[variant]);
  if (variant.search('body') > 0) {
    if (dangerouslySetInnerHTML) {
      return <p className={componentClasses} dangerouslySetInnerHTML={{ __html: children as string }} />;
    }
    return (
      <p className={componentClasses}>
        {children}
      </p>
    );
  }
  if (variant === 'span' || variant === 'title1-italic' || variant === 'title2-italic') {
    if (dangerouslySetInnerHTML) {
      return <span className={componentClasses} dangerouslySetInnerHTML={{ __html: children as string }} />;
    }
    return (
      <span className={componentClasses}>
        {children}
      </span>
    );
  }

  if (dangerouslySetInnerHTML) {
    return <div className={componentClasses} dangerouslySetInnerHTML={{ __html: children as string }} />;
  }
  return (
    <div className={componentClasses}>
      {children}
    </div>
  );
};

Typography.defaultProps = {
  className: '',
  dangerouslySetInnerHTML: false,
  variant: 'body'
};

export default Typography;
