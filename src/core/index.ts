// @scripts
import settings from 'config/settings';
import { addAjaxInterceptors } from './ajax-interceptors';
import { constants } from './constants';
import { initializeReduxWrapperStore } from 'src/store';
import { initializeServiceMocker } from './service-mocker';

// @exports
export * from './constants';

const getEnvironment = () => ({
  isLocal: settings.environment.name === constants.environment.LOCAL,
  isUnitTest: settings.environment.name === constants.environment.UNIT_TEST
});

export const environment = getEnvironment();
export const store = initializeReduxWrapperStore(environment);
export const serviceMocker = initializeServiceMocker(store);
addAjaxInterceptors();
