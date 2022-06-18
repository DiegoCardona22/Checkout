// @packages
import { TypedUseSelectorHook, useSelector as useReduxSelector } from 'react-redux';

// @scripts
import { RootState } from 'store/reducers';

// @types
import { DictionaryType } from './dictionary';

export type DictionaryState = {
  home: DictionaryType;
  collections: DictionaryType;
  individualCollection: DictionaryType;
  marketplace: DictionaryType;
  notFound: DictionaryType;
  privacyPolicies: DictionaryType;
  ranking: DictionaryType;
  uploadPage: DictionaryType;
  detailPage: DictionaryType;
  profile: DictionaryType;
  termsOfService: DictionaryType;
};

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
