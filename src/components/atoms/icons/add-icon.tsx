/* eslint-disable max-len */
type AddIconProps = {
  width?: number;
  height?: number;
};

const AddIcon = ({ width = 24, height = 24 }: AddIconProps) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    aria-labelledby="plus-sign-title"
    role="img"
  >
    <title id="plus-sign-title">Add Icon</title>
    <path
      d="M18.5 10H10V1.5a.5.5 0 0 0-1 0V10H.5a.5.5 0 0 0 0 1H9v8.5a.5.5 0 0 0 1 0V11h8.5a.5.5 0 0 0 0-1z"
      className="sc-hcJkSI kBrRgu"
    />
  </svg>
);

export default AddIcon;
