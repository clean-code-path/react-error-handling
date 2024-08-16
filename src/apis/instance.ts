import { createFiestaError } from './error';

export type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export interface FiestaResponse<T> {
  statusCode: number;
  status: string;
  message: string;
  data: T;
}

const fiestaFetch = async (url: string, method: Method, options: RequestInit) => {
  const baseUrl = 'http://localhost:3000';

  const defaultOptions: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const finalOptions = {
    method,
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options?.headers,
    },
  };

  const response = await fetch(baseUrl + url, finalOptions);
  if (!response.ok) {
    console.log('error');
    const errorData = (await response.json()) as unknown;
    throw createFiestaError(errorData);
  }
  return await response.json();
};
const instance = {
  get: async <T>(
    url: string,
    options: Omit<RequestInit, 'body'> = {}
  ): Promise<FiestaResponse<T>> => fiestaFetch(url, 'GET', options),
  post: async <T>(
    url: string,
    body = {},
    options: Omit<RequestInit, 'body'> = {}
  ): Promise<FiestaResponse<T>> =>
    fiestaFetch(url, 'POST', { body: JSON.stringify(body), ...options }),
  put: async <T>(
    url: string,
    body = {},
    options: Omit<RequestInit, 'body'> = {}
  ): Promise<FiestaResponse<T>> =>
    fiestaFetch(url, 'PUT', { body: JSON.stringify(body), ...options }),
  delete: async <T>(
    url: string,
    options: Omit<RequestInit, 'body'> = {}
  ): Promise<FiestaResponse<T>> => fiestaFetch(url, 'DELETE', { ...options }),
};

export default instance;
