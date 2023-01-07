export const HTTP_STATUS_OK = 200;
export const HTTP_STATUS_CREATED = 201;
export const HTTP_BAD_REQUEST = 400;
export const HTTP_STATUS_INTERNAL_SERVER_ERROR = 500;
export const API_NO_BODY_PROVIDED = { message: 'You have not provided a JSON input for the endpoint, please provide valid input for the endpoint you are accessing' }
export const API_BAD_BODY_PROVIDED = { message: 'You have provided bad input for the endpoint, please provide all required fields' }
export const API_INTERNAL_SERVER_ERROR = { message: `An internal server error has occured, this means there's something wrong on our end! Apologies!` }