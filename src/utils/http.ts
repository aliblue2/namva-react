import { QueryClient } from "@tanstack/react-query";
import { baseUrl } from "../App";

export const queryClient = new QueryClient();

export const fetchMovies = async (signal, page, searchParam) => {
  let endPoint = `movies?page=${page}`;
  if (searchParam && page) {
    endPoint = `movies?q=${searchParam}&page=${page}`;
  } else if (searchParam) {
    endPoint = `movies?q=${searchParam}`;
  }

  const response = await fetch(baseUrl + endPoint, {
    signal: signal,
  });

  if (!response.ok) {
    const error = new Error("مشکل در برقراری ارتباط");
    error.status = response.status;
    error.info =
      "خطا در برقراری ارتباط با سرور ! وضعیت اینترنت خود را بررسی کنید.";
  }

  const { data } = await response.json();
  return data;
};

export const fetchMovieDetail = async (id) => {
  const response = await fetch(baseUrl + `movies/${id}`);
  if (!response.ok) {
    const error = new Error("مشکل در برقراری ارتباط");
    error.status = response.status;
    error.info =
      "خطا در برقراری ارتباط با سرور ! وضعیت اینترنت خود را بررسی کنید.";
  }

  return await response.json();
};

export const fetchGenres = async (signal) => {
  const response = await fetch(baseUrl + "genres", {
    signal: signal,
  });
  if (!response.ok) {
    const error = new Error("مشکل در برقراری ارتباط");
    error.status = response.status;
    error.info =
      "خطا در برقراری ارتباط با سرور ! وضعیت اینترنت خود را بررسی کنید.";
  }

  return await response.json();
};

export const fetchMoviesByGenId = async (signal, id) => {
  const response = await fetch(baseUrl + `genres/${id}/movies`, {
    signal: signal,
  });
  if (!response.ok) {
    const error = new Error("مشکل در برقراری ارتباط");
    error.status = response.status;
    error.info =
      "خطا در برقراری ارتباط با سرور ! وضعیت اینترنت خود را بررسی کنید.";
  }

  const { data } = await response.json();
  return data;
};

export const signupFc = async (data) => {
  const response = await fetch("register", {
    body: JSON.stringify(data),
    method: "POST",
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    const error = new Error("cant register as user");
    error.status = response.status;
    error.info = await response.json().message;
    throw error;
  }

  return redirect("/auth?mode=login");
};
