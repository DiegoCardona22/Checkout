/* eslint-disable max-len */
type LogoFooterProps = {
  width?: number;
  height?: number;
};

const Logo = ({ width = 350, height = 40 }: LogoFooterProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="black"
    viewBox={`0 0 ${width * 2} ${height * 2}`}
  >
    <path d="M3 39.5V76h530V3H3v36.5zM482 24v9h18v19h-18v6c0 5.8-.1 6-2.2 5.5-7.4-1.8-51.9-11.5-52.5-11.5-.4 0 7.5-8.3 17.7-18.5L463.5 15H482v9zm-363.1 5.9c2.2 1.4.4 3.3-2 2-2.7-1.4-5.9-.2-5.9 2.2 0 1.4 1.3 2.5 4.4 3.9 5.4 2.3 6.6 5.1 3.9 8.9-2.4 3.2-9.2 4.2-11.3 1.6-1.8-2.2-.5-3 2.6-1.6 3.5 1.6 6.4.5 6.4-2.4 0-1.7-.9-2.7-3.9-3.9-4.8-1.9-6.5-4.5-5.2-7.9.5-1.4 1.6-2.7 2.3-3 2.1-.9 7.2-.7 8.7.2zm8.1 2.4c0 3.2.2 3.3 3 2.9 4.7-.7 6 1.1 6 8.4 0 5-.3 6.4-1.5 6.4-1.1 0-1.5-1.3-1.5-5.3 0-6.3-1-8.2-3.9-7.2-1.8.5-2.1 1.4-2.1 6.6 0 5.2-.2 5.9-2 5.9-1.9 0-2-.7-2-10.5s.1-10.5 2-10.5c1.6 0 2 .7 2 3.3zm82.1-2.3c2.4 1.3 2.6 6.8.4 7.7-1.3.5-1.3.8.5 2 2.6 1.8 2.6 5.7 0 8.3-1.5 1.5-3.3 2-7.5 2H197V29h5.1c2.8 0 5.9.5 7 1zm42.4.3c2.6 2 .4 2.9-3.3 1.5-2.7-1.1-3.5-1-5.9.8-2.2 1.7-2.9 3-3.1 6.7-.5 7 4.3 10.7 9.9 7.7 2.7-1.5 4.7-.1 2.4 1.7-3 2.1-10 1.6-13-1-5-4.3-4.2-14.2 1.4-17.2 3.3-1.8 9.2-1.9 11.6-.2zm23.5 9.2c0 9.8-.1 10.5-2 10.5s-2-.7-2-10.5.1-10.5 2-10.5 2 .7 2 10.5zm34.5-8.5c0 .8-.8 1.6-1.7 1.8-1.3.2-1.8-.3-1.8-1.8s.5-2 1.8-1.8c.9.2 1.7 1 1.7 1.8zm7.5 3.7v5.7l2.8-2.7c1.5-1.5 3.7-2.7 4.7-2.7 1.6 0 1.4.5-1.3 3.3l-3.3 3.4 3.1 3.8c3.5 4.4 3.5 4.5 1.3 4.5-1-.1-3-1.7-4.5-3.7l-2.8-3.6v3.6c0 3-.4 3.7-2 3.7-1.9 0-2-.7-2-10.5s.1-10.5 2-10.5c1.8 0 2 .7 2 5.7zm32-4.7c0 .5-1.3 1-3 1h-3v9.5c0 8.8-.1 9.5-2 9.5s-2-.7-2-9.5V31h-3.5c-1.9 0-3.5-.5-3.5-1 0-.6 3.5-1 8.5-1s8.5.4 8.5 1zm31 2.5c0 2 .5 2.5 2.5 2.5 1.4 0 2.5.4 2.5 1 0 .5-1.1 1-2.6 1-2.4 0-2.5.2-2.2 5.2.2 4.3.6 5.3 2 5.3 2.7 0 2.6 2 0 2.3-3.8.6-5.2-1.5-5.2-7.3 0-3.4-.5-5.5-1.2-5.7-.9-.3-.8-.9.5-2.2.9-1 1.7-2.4 1.7-3.2 0-.8.5-1.4 1-1.4.6 0 1 1.1 1 2.5zM151 37c4.5 4.5 1.3 13-4.9 13-4.5 0-7.3-2.9-7.3-7.5 0-2.8.6-4.4 2.2-5.7 2.9-2.4 7.5-2.3 10 .2zm7.8 3.5 1.5 5 1.5-5.3c1-3.7 2-5.2 3.2-5.2 1.3 0 2.2 1.5 3.2 5.2l1.5 5.3 1.7-5.3c1.1-3.2 2.3-5.2 3.3-5.2.8 0 1.3.6 1 1.3-.3.7-1.3 4.1-2.2 7.5-2.2 7.8-4.6 8.4-6.5 1.7-.7-2.5-1.6-4.5-2-4.5-.4 0-1.3 2-2 4.5-1.9 6.8-4.1 6-6.8-2.3-2.6-8.2-2.7-8.4-.6-8 1 .2 2.3 2.3 3.2 5.3zm28-3.8c.2.9-.5 1.1-2.6.7-2.1-.4-3.1-.2-3.5 1-.5 1.2.4 2 3.4 3.2 3.4 1.4 4 2 3.7 4.3-.4 3-4.1 4.7-8.2 3.7-3.9-1-3.2-2.7 1-2.4 5 .4 5.6-1.8 1-3.7-2-.9-3.6-1.7-3.6-1.9 0-.3-.3-1.1-.6-1.9-.8-2.3 2.5-4.8 5.9-4.5 1.7.2 3.2.9 3.5 1.5zm31.9 2.8c1 2.5 2.1 4.5 2.4 4.5.4 0 1.4-2 2.3-4.5 1-2.5 2.4-4.5 3.3-4.5 1.7 0 1.5 1-3.2 11.7-2 4.7-4 7.9-5.1 8.2-1.3.2-1.5-.1-.9-1.5 1.6-4.1 1.5-5.3-.9-10.8-3-6.7-3.1-7.6-1.2-7.6.8 0 2.2 2 3.3 4.5zm47.5-2.8c1 .9 1.8 2.7 1.8 4 0 2.1-.4 2.3-5 2.3-3.7 0-5 .4-5 1.5 0 2.2 3.4 3.6 7.2 2.8 3-.6 3.2-.5 1.9 1-1.9 2.4-7.6 2.2-10.1-.3-1.2-1.2-2-3.3-2-5.5 0-6.3 6.7-9.9 11.2-5.8zm23 0c1 .9 1.8 2.7 1.8 4 0 2.1-.4 2.3-5 2.3-3.6 0-5 .4-5 1.4 0 2.5 2.7 3.8 6.7 3 3.5-.6 3.7-.6 2.4.9-1.7 2.1-7 2.2-9.9.1-2.7-1.9-3.1-8.8-.5-11.6 2-2.2 7-2.3 9.5-.1zM303 36c0 .6-.8 1-1.8 1-3 0-4.2 2.2-4.2 7.7 0 4-.4 5.3-1.5 5.3-1.2 0-1.5-1.5-1.5-7.4v-7.3l4.5-.1c2.5-.1 4.5.3 4.5.8zm6 6.5c0 6-.3 7.5-1.5 7.5s-1.5-1.5-1.5-7.5.3-7.5 1.5-7.5 1.5 1.5 1.5 7.5zm50-5.5c1.1 1.1 2 2.9 2 4 0 1.7-.7 2-5 2-3.6 0-5 .4-5 1.4 0 2.4 2.7 3.8 6 3.1 1.7-.4 3-.2 3 .3 0 1.3-2.5 2.2-6 2.2-3.3 0-7-4-7-7.5 0-6.2 7.8-9.7 12-5.5zm13.8-.2c.3.8-.6 1.2-2.9 1-4.3-.4-5 1.9-1 3.3 4.2 1.5 5.5 4 3.5 6.8-1.2 1.7-2.4 2.1-5.2 1.9-1.9-.2-3.7-.9-4-1.6-.3-.8.6-1.2 2.9-1 4.6.4 5.1-2.3.7-4.3-6-2.6-4.4-8.3 2-7.7 2 .2 3.7.9 4 1.6z" />
    <path d="M463.9 18.7c-.1 1.8-.3 2.1-.6 1-.7-2.7-2.3-1-2.4 2.6-.1 2.4-.3 2.6-.6.9-.7-3.7-2.3-2.5-2.5 2-.1 3.8-.2 3.9-.5 1-.6-4.7-2.3-2.9-2.5 2.6-.1 3.7-.2 4-.5 1.4-.7-5.1-2.3-3.7-2.5 2-.1 5.1-.2 5.1-.5 1-.6-5.8-2.3-4.3-2.4 2.1l-.2 5.2-.7-4c-.7-4.5-1.7-3.3-2.3 3l-.4 4-.1-4.3c-.1-2.6-.6-4.1-1.2-3.7-1.1.7-1.4 9.5-.3 9.5.5 0 9-2.7 19-6.1l18.3-6.1V16h-17l-.1 2.7zM456.5 42.3l-24 8.2 32 .3c17.6.1 32.6 0 33.3-.3.9-.3 1.2-2.6 1-8.2l-.3-7.8-9-.2c-8.9-.2-9.4 0-33 8zM440.7 39.7c-1.1 1-.8 6.3.3 6.3.6 0 1-1.6 1-3.5 0-3.6-.2-4-1.3-2.8zM437.7 41.7c-1.1 1-.8 5.3.3 5.3.6 0 1-1.4 1-3 0-3.1-.2-3.5-1.3-2.3zM434 46.5c0 .8.5 1.5 1 1.5.6 0 1-.7 1-1.5s-.4-1.5-1-1.5c-.5 0-1 .7-1 1.5zM431.5 48c-.3.5-.1 1 .4 1 .6 0 1.1-.5 1.1-1 0-.6-.2-1-.4-1-.3 0-.8.4-1.1 1zM436.5 52.5c1.8.7 41.8 9.5 43.2 9.5.9 0 1.3-1.5 1.3-5v-5l-22.7.1c-12.6 0-22.3.2-21.8.4zM200 34.6c0 3.4.1 3.5 3.1 3.2 6.3-.6 6.1-6.8-.2-6.8-2.7 0-2.9.3-2.9 3.6zM200 44c0 3.6.3 4 2.4 4 4.1 0 5.6-1.1 5.6-4s-1.5-4-5.6-4c-2.1 0-2.4.4-2.4 4zM143.2 38.2c-2.7 2.7-.9 9.8 2.4 9.8 2 0 4.4-3 4.4-5.5 0-4.2-4.2-6.9-6.8-4.3zM259.2 38.2c-2 2-1.4 2.8 2.3 2.8 3.7 0 4.9-2.2 1.9-3.4-2.2-.8-2.8-.8-4.2.6zM282.2 38.2c-2 2-1.4 2.8 2.3 2.8 1.9 0 3.5-.4 3.5-.8 0-1.2-2.2-3.2-3.5-3.2-.6 0-1.6.5-2.3 1.2zM352.2 38.2c-2 2-1.4 2.8 2.3 2.8 1.9 0 3.5-.4 3.5-.8 0-1.2-2.2-3.2-3.5-3.2-.6 0-1.6.5-2.3 1.2z" />
  </svg>
);

export default Logo;