// @scripts
import initialState from './initial-state';
import language from './text';
import masterData from './master-data';
import mockData from './mock-data';
import settings from './settings';
import { getServices } from './services';

const getConfiguration = () => {
  const servicesPlaceholders = settings.services;
  const services = getServices(servicesPlaceholders);
  return {
    initialState,
    masterData,
    mockData,
    services,
    settings,
    text: language[initialState.language]
  };
};

export const config = getConfiguration();
