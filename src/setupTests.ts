/* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/ban-ts-comment */

// @ts-ignore
const Enzyme = require('enzyme');

// @ts-ignore
const Adapter = require('@wojtekmaj/enzyme-adapter-react-17');

Enzyme.configure({ adapter: new Adapter() });
require('enzyme').configure({ adapter: new Adapter() });
