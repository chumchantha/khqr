import { KHQR, CURRENCY, COUNTRY, TAG } from "ts-khqr";

const result = KHQR.generate({
  tag: TAG.INDIVIDUAL, // TAG.MERCHANT
  accountID: "chumchantha@aclb",
  merchantName: "Chum Chantha",
  // optional
  merchantID: "012345678",
  acquiringBank: "Dev Bank",
  merchantCity: "Phnom Penh", // default 'Phnom Penh'
  currency: CURRENCY.KHR, // default KHR
  amount: 10000, // default 0
  countryCode: COUNTRY.KH, // default KH
  additionalData: {
    mobileNumber: "85512345678",
    billNumber: "INV-2022-12-25",
    storeLabel: "Ishin Shop",
    terminalLabel: "012345",
    purposeOfTransaction: "Payment",
  },
  languageData: {
    languagePreference: "ZH",
    merchantNameAlternateLanguage: "文山",
    merchantCityAlternateLanguage: "金边",
  },
  upiMerchantAccount: "",
});

console.log(result);
