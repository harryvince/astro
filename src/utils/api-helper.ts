import { API_NO_BODY_PROVIDED, HTTP_BAD_REQUEST } from "./constants";

/**
 * Default required response for api routes in astro.
 * @param {object} object Javascript / Json to return in API Response.
 * @param {number} number HTTP Repsonse code to return in API Response.
 * @returns {Response} returns a JSON & HTTP response for use in the Astro api routes
 */
export const ApiResponse = (object: any, statusCode: number): Response => {
  return new Response(JSON.stringify(object), { status: statusCode });
};
