const api = require('../services/api');

export const POPULATE_MESSAGES_PENDING = 'POPULATE_MESSAGES_PENDING';
export const POPULATE_MESSAGES_SUCCESS = 'POPULATE_MESSAGES_SUCCESS';
export const POPULATE_MESSAGES_FAILED = 'POPULATE_MESSAGES_FAILED';
export const POST_MESSAGE_PENDING = 'POST_MESSAGE_PENDING';
export const POST_MESSAGE_SUCCESS = 'POST_MESSAGE_SUCCESS';
export const POST_MESSAGE_FAILED = 'POST_MESSAGE_FAILED';

function populateMessagesPending() {
  return {
    type: POPULATE_MESSAGES_PENDING,
  };
}

function populateMessagesSuccess(messages) {
  return {
    type: POPULATE_MESSAGES_SUCCESS,
    messages
  };
}

function populateMessagesFailed(error) {
  return {
    type: POPULATE_MESSAGES_FAILED,
    error
  };
}

function postMessagePending() {
  return {
    type: POST_MESSAGE_PENDING,
  };
}

function postMessageSuccess() {
  return {
    type: POST_MESSAGE_SUCCESS,
  };
}

function postMessageFailed(error) {
  return {
    type: POST_MESSAGE_FAILED,
    error
  };
}

export function postMessage({ name, text }) {
  return (dispatch) => {
    dispatch(postMessagePending());

    api.postMessage({ name, text })
    .then(
      () => dispatch(postMessageSuccess()),
      (err) => dispatch(postMessageFailed(err))
    );
  };
}

export function populateMessages() {
  return (dispatch) => {
    dispatch(populateMessagesPending());

    api.fetchMessages()
    .then(
      (messages) => dispatch(populateMessagesSuccess(messages)),
      (err) => dispatch(populateMessagesFailed(err))
    );
  };
}
