// @json
import services from './services.json';

/**
 * @param {string} servicesPlaceholders - The base service url for the current environment.
 * @return {Object}
 */
export const getServices = (servicesPlaceholders : any) => {
  const servicesString = JSON.stringify(services);

  const parsedServices = Object.entries(servicesPlaceholders)
    .reduce((element, [serviceName, serviceUrl]) =>
      element.replace(
        new RegExp(`{${serviceName}}`, 'g'),
          <string>serviceUrl
      ), servicesString);

  return JSON.parse(parsedServices);
};
