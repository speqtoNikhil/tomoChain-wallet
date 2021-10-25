/**
 *
 * TomoWallet - My Wallet Page - Constants
 *
 */
// Actions
export const LOAD_COIN_DATA = 'TOMOWALLET/MY_WALLET/LOAD_COIN_DATA';
export const LOAD_COIN_DATA_FAILED =
  'TOMOWALLET/MY_WALLET/LOAD_COIN_DATA_FAILED';
export const LOAD_COIN_DATA_SUCCESS =
  'TOMOWALLET/MY_WALLET/LOAD_COIN_DATA_SUCCESS';
export const LOAD_TOKEN_OPTIONS = 'TOMOWALLET/MY_WALLET/LOAD_TOKEN_OPTIONS';
export const LOAD_TOKEN_OPTIONS_SUCCESS =
  'TOMOWALLET/MY_WALLET/LOAD_TOKEN_OPTIONS_SUCCESS';
export const LOAD_TRANSACTION_DATA =
  'TOMOWALLET/MY_WALLET/LOAD_TRANSACTION_DATA';
export const LOAD_TRANSACTION_DATA_SUCCESS =
  'TOMOWALLET/MY_WALLET/LOAD_TRANSACTION_DATA_SUCCESS';
export const RESET_RECEIVE_TOKEN_FORM =
  'TOMOWALLET/MY_WALLET/RESET_RECEIVE_TOKEN_FORM';
export const RESET_SEND_TOKEN_FORM =
  'TOMOWALLET/MY_WALLET/RESET_SEND_TOKEN_FORM';
export const RESET_STATE = 'TOMOWALLET/MY_WALLET/RESET_STATE';
export const SET_TABLE_TYPE = 'TOMOWALLET/MY_WALLET/SET_TABLE_TYPE';
export const SUBMIT_SEND_TOKEN = 'TOMOWALLET/MY_WALLET/SUBMIT_SEND_TOKEN';
export const TOGGLE_RECEIVE_TOKEN_POPUP =
  'TOMOWALLET/MY_WALLET/TOGGLE_RECEIVE_TOKEN_POPUP';
export const TOGGLE_SEND_TOKEN_POPUP =
  'TOMOWALLET/MY_WALLET/TOGGLE_SEND_TOKEN_POPUP';
export const TOGGLE_SUCCESS_POPUP = 'TOMOWALLET/MY_WALLET/TOGGLE_SUCCESS_POPUP';
export const UPDATE_RECEIVE_TOKEN_ERRORS =
  'TOMOWALLET/MY_WALLET/UPDATE_RECEIVE_TOKEN_ERRORS';
export const UPDATE_RECEIVE_TOKEN_INPUT =
  'TOMOWALLET/MY_WALLET/UPDATE_RECEIVE_TOKEN_INPUT';
export const UPDATE_SEND_TOKEN_ERRORS =
  'TOMOWALLET/MY_WALLET/UPDATE_SEND_TOKEN_ERRORS';
export const UPDATE_SEND_TOKEN_INPUT =
  'TOMOWALLET/MY_WALLET/UPDATE_SEND_TOKEN_INPUT';
export const UPDATE_SEND_TOKEN_POPUP_STAGE =
  'TOMOWALLET/MY_WALLET/UPDATE_SEND_TOKEN_POPUP_STAGE';
export const SCAN_PRIVACY_DATA = 'TOMOWALLET/MY_WALLET/SCAN_PRIVACY_DATA';
export const SCAN_PRIVACY_DATA_FAILED =
  'TOMOWALLET/MY_WALLET/SCAN_PRIVACY_DATA_FAILED';
export const SCAN_PRIVACY_DATA_SUCCESS =
  'TOMOWALLET/MY_WALLET/SCAN_PRIVACY_DATA_SUCCESS';
export const TOGGLE_DEPOSIT_PRIVACY_POPUP =
  'TOMOWALLET/MY_WALLET/TOGGLE_DEPOSIT_PRIVACY_POPUP';
export const UPDATE_DEPOSIT_PRIVACY_INPUT =
  'TOMOWALLET/MY_WALLET/UPDATE_DEPOSIT_PRIVACY_INPUT';
export const UPDATE_DEPOSIT_PRIVACY_ERRORS =
'TOMOWALLET/MY_WALLET/UPDATE_DEPOSIT_PRIVACY_ERROR';
export const UPDATE_DEPOSIT_PRIVACY_POPUP_STAGE =
'TOMOWALLET/MY_WALLET/UPDATE_DEPOSIT_PRIVACY_POPUP_STAGE';
export const TOGGLE_DEPOSIT_SUCCESS_POPUP = 'TOMOWALLET/MY_WALLET/TOGGLE_DEPOSIT_SUCCESS_POPUP';
export const TOGGLE_WITHDRAW_PRIVACY_POPUP =
'TOMOWALLET/MY_WALLET/TOGGLE_WITHDRAW_PRIVACY_POPUP';
export const UPDATE_WITHDRAW_PRIVACY_POPUP_STAGE =
'TOMOWALLET/MY_WALLET/UPDATE_WITHDRAW_PRIVACY_POPUP_STAGE';
export const UPDATE_WITHDRAW_PRIVACY_INPUT =
  'TOMOWALLET/MY_WALLET/UPDATE_WITHDRAW_PRIVACY_INPUT';
export const UPDATE_WITHDRAW_PRIVACY_ERRORS =
  'TOMOWALLET/MY_WALLET/UPDATE_WITHDRAW_PRIVACY_ERROR';
export const TOGGLE_WITHDRAW_SUCCESS_POPUP = 'TOMOWALLET/MY_WALLET/TOGGLE_WITHDRAW_SUCCESS_POPUP';
export const SCAN_PRIVACY_TRANSACTION =
  'TOMOWALLET/MY_WALLET/SCAN_PRIVACY_TRANSACTION';
export const SCAN_PRIVACY_TRANSACTION_SUCCESS =
  'TOMOWALLET/MY_WALLET/SCAN_PRIVACY_TRANSACTION_SUCCESS';
export const SCAN_PRIVACY_TRANSACTION_FAILED =
  'TOMOWALLET/MY_WALLET/SCAN_PRIVACY_TRANSACTION_FAILED';
export const UPDATE_PROCESS =
  'TOMOWALLET/MY_WALLET/UPDATE_PROCESS';
export const LOAD_BALANCE_SUCCESS = 'TOMOWALLET/MY_WALLET/LOAD_BALANCE_SUCCESS';
// Domain Key
export const DOMAIN_KEY = 'myWallet';

// Tables' Column Names
export const PORTFOLIO_COLUMNS = {
  ACTIONS: 'actions',
  BALANCE: 'balance',
  ICON: 'icon',
  PRICE: 'price',
  PUBLISHER: 'publisher',
  SYMBOL: 'symbol',
  TOKEN_NAME: 'tokenName',
  TRANSACTION_FEE: 'txFee',
  VALUE: 'value',
  DECIMALS: 'decimals',
  TOKEN_ADDRESS: 'tokenAddress',
  TYPE: 'type',
  PRIVACY_BALANCE: 'privacyBalance',
};
export const TRANSACTION_COLUMNS = {
  TOKEN_TYPE: 'tokenType',
  TX_HASH: 'txHash',
  CREATE_TIME: 'createTime',
  FROM: 'from',
  TO: 'to',
  QUANTITY: 'quantity',
  TYPE: 'type',
};

// Popup Forms' Fields
export const SEND_TOKEN_FIELDS = {
  TOKEN: 'token',
  RECIPIENT: 'recipient',
  TRANSFER_AMOUNT: 'amount',
  MESSAGE: 'message',
  TRANSACTION_FEE: 'txFee',
};

// Send Token Popup' Stages
export const SEND_TOKEN_STAGES = {
  FORM: 1,
  PROCESSING: 2,
  CONFIRMATION: 3,
};

// Popup Forms' Fields
export const DEPOSIT_PRIVACY_FIELDS = {
  TOKEN: 'token',
  TRANSFER_AMOUNT: 'amount',
  TRANSACTION_FEE: 'txFee',
  MAIN_BALANCE: 'balance',
};

// Deposit Privacy Popup' Stages
export const DEPOSIT_STAGES = {
  FORM: 1,
  CONFIRMATION: 2,
};

// Withdraw Privacy Popup' Stages
export const WITHDRAW_STAGES = {
  FORM: 1,
  PROCESSING: 2,
  CONFIRMATION: 3,
};

// Popup Forms' Fields
export const WITHDRAW_PRIVACY_FIELDS = {
  TOKEN: 'token',
  TRANSFER_AMOUNT: 'amount',
  TRANSACTION_FEE: 'txFee',
  MAIN_BALANCE: 'balance',
};
