// @packages
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

// @scripts
import { config } from '../config';

const mockedServices = {} as { [key: string]: any };

export const initializeServiceMocker = (store : any) => {
  const mockAdapter = new MockAdapter(axios, { delayResponse: config.settings.serviceMocker.delayResponse });
  const serviceMocker = {
    replyWithMockData: () => {
      const include = config.settings.serviceMocker.include || [];
      Object.keys(mockedServices).forEach((name) => {
        if (include.some(item => item === name)) {
          mockedServices[name](mockAdapter, store);
        }
      });
      mockAdapter.onAny().passThrough();
    },
    replyWithNetworkError: () => {
      mockAdapter.reset();
      mockAdapter.onAny().networkError();
    }
  };

  serviceMocker.replyWithMockData();
  return serviceMocker;
};
