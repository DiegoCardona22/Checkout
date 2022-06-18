/**
 * Returns the current language of the browser.
 * @returns {string}
 */
export const getNavigatorLanguage = () =>
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
  navigator.language || navigator.userLanguage;

/**
 * Returns the window inner height.
 * @returns {number}
 */
export const getWindowInnerHeight = () =>
  window.innerHeight;

/**
 * Returns the window inner width.
 * @returns {number}
 */
export const getWindowInnerWidth = () =>
  window.innerWidth;

/**
 * Returns a Storage object (localStorage or sessionStorage)
 * according to the device name specified as argument.
 * @param {string} device - Valid values are: 'localStorage' and
 * 'sessionStorage'.
 * @returns {Storage}
 */
export const getStorage = (device: any) => {
  switch (device) {
    case 'localStorage':
      return localStorage;
    case 'sessionStorage':
      return sessionStorage;
    default:
      return null;
  }
};

/**
 * Encodes a string to Base64.
 * @param {string} str - The string to be encoded.
 * @returns {string}
 */
export const encodeBase64String = (str: any) =>
  window.btoa(str);

/**
 * Decodes a Base64 string.
 * @param {string} str - The string to be decoded.
 * @returns {string}
 */
export const decodeBase64String = (str: any) =>
  window.atob(str);

/**
 * Opens the passed-in url in a new tab.
 * @param {string} url - The url to navigate to.
 */
export const navigateToExternalUrl = (url: any) => {
  window.open(url, '_blank');
};

/**
 * Returns the unique identifier of the device.
 * @param {string} value - The value to be hashed.
 * @param {string} index - The index of the value.
 * @param {string} self - The self of the value.
 */
export const onlyUnique = (value: any, index: any, self: any) => self.indexOf(value) === index;

/**
 * Return true if the passed-in value is a valid address.
 * @param {string} email - The email to be validated.
 * @returns {boolean} - True if the passed-in value is a valid email.
 */
export const EmailValidator = (email: HTMLFormControlsCollection | any) => {
  const re = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email?.Email?.value);
};

/**
 * return true if the passed-in value is a valid name.
 * @param {string} name - The name to be validated.
 * @returns {boolean} - True if the passed-in value is a valid name.
 */
export const NameValidator = (name: HTMLFormControlsCollection | any) => name.Name.value.length > 0;

/**
 * return true if the passed-in value is a valid message.
 * @param {string} message - The message to be validated.
 * @returns {boolean} - True if the passed-in value is a valid message.
 */
export const MessageValidator = (message: HTMLFormControlsCollection | any) => message.Message.value.length > 0;
