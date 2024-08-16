import fiestaFetch from './instance.ts';

export const getError1 = () => {
  return fiestaFetch.get('/error1', { headers: { 'Content-Type': 'application/json' } });
};
export const getError2 = () => {
  return fiestaFetch.get('/error2', { headers: { 'Content-Type': 'application/json' } });
};
export const getError3 = () => {
  return fiestaFetch.get('/error3', { headers: { 'Content-Type': 'application/json' } });
};
export const getError4 = () => {
  return fiestaFetch.get('/error4', { headers: { 'Content-Type': 'application/json' } });
};
