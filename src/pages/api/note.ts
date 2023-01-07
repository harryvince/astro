import type { APIRoute } from "astro";
import { ApiResponse } from "../../utils/api-helper";
import { prisma } from "../../server/db/client";
import {
  API_BAD_BODY_PROVIDED,
  API_INTERNAL_SERVER_ERROR,
  HTTP_BAD_REQUEST,
  HTTP_STATUS_CREATED,
  HTTP_STATUS_INTERNAL_SERVER_ERROR,
} from "../../utils/constants";

export const get: APIRoute = async ({ request }) => {
  const notes = await prisma.note.findMany();
  return ApiResponse(notes, 200);
};

export const post: APIRoute = async ({ request }) => {
  const { Title, Data } = await request?.json();
  if (!Title || !Data)
    return ApiResponse(API_BAD_BODY_PROVIDED, HTTP_BAD_REQUEST);

  const note = await prisma.note
    .create({
      data: { Title, Data },
    })
    .catch(() => {
      return ApiResponse(
        API_INTERNAL_SERVER_ERROR,
        HTTP_STATUS_INTERNAL_SERVER_ERROR
      );
    });

  return ApiResponse({ note }, HTTP_STATUS_CREATED);
};
