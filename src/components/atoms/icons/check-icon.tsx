/* eslint-disable max-len */
type CheckIconProps = {
  width?: number;
  height?: number;
};

const CheckIcon = ({ width = 24, height = 24 }: CheckIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="white"
    viewBox={`0 0 ${width} ${height}`}
  >
    <title>Check Icon</title>
    <path
      d="M9.5 20c-2.538 0-4.923-.988-6.718-2.782S0 13.038 0 10.501c0-2.538.988-4.923 2.782-6.718S6.962 1 9.5 1c2.538 0 4.923.988 6.718 2.783S19 7.963 19 10.501s-.988 4.923-2.782 6.717A9.438 9.438 0 0 1 9.5 20zm0-18C4.813 2 1 5.813 1 10.5S4.813 19 9.5 19s8.5-3.813 8.5-8.5S14.187 2 9.5 2z"
      fill="#1bab1e"
    />
    <path
      d="M7.5 14.5a.502.502 0 0 1-.354-.146l-3-3a.5.5 0 0 1 .707-.707l2.646 2.646 6.646-6.646a.5.5 0 0 1 .707.707l-7 7a.498.498 0 0 1-.354.146z"
      fill="#1bab1e"
    />
  </svg>
);

export default CheckIcon;
