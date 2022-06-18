// @packages
import { DictionaryState } from 'types/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: DictionaryState = {
  collections: {},
  detailPage: {},
  home: {},
  individualCollection: {},
  marketplace: {},
  notFound: {},
  privacyPolicies: {},
  profile: {},
  ranking: {},
  termsOfService: {},
  uploadPage: {}
};

const textSlice = createSlice({
  name: 'globalText',
  initialState,
  reducers: {
    changeTextHome(state, action: PayloadAction<string>) {
      state.home = JSON.parse(action.payload) ?? {};
    },
    changeTextCollections(state, action: PayloadAction<string>) {
      state.collections = JSON.parse(action.payload) ?? {};
    },
    changeTextIndividualCollection(state, action: PayloadAction<string>) {
      state.individualCollection = JSON.parse(action.payload) ?? {};
    },
    changeTextMarketplace(state, action: PayloadAction<string>) {
      state.marketplace = JSON.parse(action.payload) ?? {};
    },
    changeTextNotFound(state, action: PayloadAction<string>) {
      state.notFound = JSON.parse(action.payload) ?? {};
    },
    changeTextPrivacyPolicies(state, action: PayloadAction<string>) {
      state.privacyPolicies = JSON.parse(action.payload) ?? {};
    },
    changeTextTermsOfService(state, action: PayloadAction<string>) {
      state.termsOfService = JSON.parse(action.payload) ?? {};
    },
    changeTextRanking(state, action: PayloadAction<string>) {
      state.ranking = JSON.parse(action.payload) ?? {};
    },
    changeTextUploadPage(state, action: PayloadAction<string>) {
      state.uploadPage = JSON.parse(action.payload) ?? {};
    },
    changeTextProfile(state, action: PayloadAction<string>) {
      state.profile = JSON.parse(action.payload) ?? {};
    },
    changeTextDetailPage(state, action: PayloadAction<string>) {
      state.detailPage = JSON.parse(action.payload) ?? {};
    }
  }
});

export const {
  changeTextHome,
  changeTextCollections,
  changeTextIndividualCollection,
  changeTextMarketplace,
  changeTextNotFound,
  changeTextPrivacyPolicies,
  changeTextRanking,
  changeTextUploadPage,
  changeTextDetailPage,
  changeTextProfile,
  changeTextTermsOfService
} = textSlice.actions;
export default textSlice.reducer;
