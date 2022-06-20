// @packages
import classNames from "classnames";

// @styles
import classes from "./styles.module.scss";

type BannerProps = {
  className?: string;
  dataTestId?: string;
  id?: string;
  image: string;
};

export const Banner = ({
  className,
  dataTestId = "my-banner",
  id = "banner",
  image
}: BannerProps) => (
  <div
    className={classNames(classes.bannerContainer, className)}
    data-testid={dataTestId}
    id={id}
    style={{ backgroundImage: `url(${image})` }}
  />
);
