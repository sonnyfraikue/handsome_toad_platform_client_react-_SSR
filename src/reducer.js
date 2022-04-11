import produce from "immer";
import { config } from "../config";

const intialState = {
  currentUser: null,
  call: 0,
  autoSearch: false,
  cardToken: null,
  suggestedDomains: [],
  purchasedDomains: [],
  contact: {
    id: null,
    account_id: null,
    label: "",
    first_name: "",
    last_name: "",
    job_title: "",
    organization_name: "",
    email: "",
    phone: "",
    fax: "",
    address1: "",
    address2: "",
    city: "",
    state_province: "",
    postal_code: "",
    country: "",
    created_at: "",
    updated_at: "",
  },
  currentTemplate: null,
  currentFeatures: [],
  locale: {
    currency: "USD",
    languange: "en_GB",
    domain:
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/"
        : config.RAZZLE_DOMAIN,
    code: "+1",
    vatrate: null,
    cc: "US",
  },
  basket: {
    domains: [],
    summary: {
      price: 0,
      total: 0,
      vat_rate: 20,
      vat_price: 0,
      discount_price: 0,
    },
  },
  order: [],
  paymentResponse: {},
  modal: { iframeUrl: null, content: null, show: false, title: null },
  pricedDomain: { data: {} },
  searchedDomain: {
    data: {
      domain: "",
      premium: false,
      registration_price: 0,
      renewal_price: 0,
      transfer_price: 0,
      available: false,
      period: 0,
    },
  },
};

const reducer = produce((draftState, action) => {
  switch (action.type) {
    case "launchModal":
      draftState.modal = {
        iframeUrl: action.payload.iframeUrl,
        title: action.payload.title,
        content: null,
        show: true,
      };
      break;
    case "closeModal":
      draftState.modal = {
        iframeUrl: null,
        content: null,
        show: false,
        title: null,
      };
      break;
    case "removeFeature":
      var index = draftState.currentFeatures.findIndex(
        (feature) => feature.id === action.payload.id
      );
      if (index !== -1) draftState.currentFeatures.splice(index, 1);
      break;
    case "applyFeature":
      var index = draftState.currentFeatures.findIndex(
        (x) => x.id === action.payload.id
      );
      if (index === -1) {
        draftState.currentFeatures.push(action.payload);
      }
      break;
    case "removeTemplate":
      draftState.currentTemplate = null;
      break;
    case "applyTemplate":
      draftState.currentTemplate = action.payload;
      break;
    case "domain-suggest":
      draftState.suggestedDomains.push(action.payload.domainSuggest);
      break;
    case "domain-suggest-reset":
      draftState.suggestedDomains = [];
      break;
    case "add-purchased-domain":
      draftState.purchasedDomains = action.payload.purchasedDomains;
      break;
    case "domain-search":
      draftState.searchedDomain = action.payload.domainSearch;
      break;
    case "domain-price":
      draftState.pricedDomain = action.payload.domainPrice;
      break;
    case "auto-search-true":
      draftState.autoSearch = true;
      break;
    case "auto-search-false":
      draftState.autoSearch = false;
      break;
    case "update-payment-response":
      draftState.paymentResponse = action.payload.paymentResponse;
      break;
    case "set-domain-to-basket":
      
      draftState.basket.domains = action.payload.domain
      break;
    case "add-domain-to-basket":
      var index = draftState.basket.domains.findIndex(
        (x) => x.domain === action.payload.domain.domain
      );
      if (index === -1) {
        draftState.basket.domains.push(action.payload.domain);
      }
      break;
    case "update-basket-summary":
      draftState.basket.summary.price = action.payload.summary.price;
      draftState.basket.summary.total = action.payload.summary.total;
      draftState.basket.summary.vat_price = action.payload.summary.vat_price;
      draftState.basket.summary.vat_rate = action.payload.summary.vat_rate;
      draftState.basket.summary.discount_price =
        action.payload.summary.discount_price;
      break;
    case "add-to-order":
      var index = draftState.order.findIndex(
        (x) => x["domain_id"] === action.payload.order["domain_id"]
      );
      if (index === -1) {
        draftState.order.push(action.payload.order);
      }
      break;
    case "remove-domain-from-basket":
      var index = draftState.basket.domains.findIndex(
        (x) => x.domain === action.payload.domain.domain
      );
      if (index !== -1) draftState.basket.domains.splice(index, 1);
      break;
    case "empty-basket":
      draftState.basket.domains = [];
      break;
    case "update-call-count":
      draftState.call++;
      break;
    case "reset-call-count":
      draftState.call = 0;
      break;
    case "add-contact":
      // var index = draftState.basket.findIndex(
      //   (x) => x.domain === action.payload.domain.domain
      // );
      // if (index === -1) {

      draftState.contact = action.payload.contact;
      // }
      break;
    case "locale":
      draftState.locale = action.payload.locale;
      break;
    case "set-cardToken":
      draftState.cardToken = action.payload.cardToken;
      break;
    case "unset-cardToken":
      draftState.cardToken = null;
      break;
    case "login":
      draftState.currentUser = action.payload;
      break;
    case "logout":
      draftState.currentUser = null;
      break;
    default:
      break;
  }
}, intialState);

export default reducer;
