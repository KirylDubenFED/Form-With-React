import { DOMAIN_URL } from '../constants/someApi';

export const someApiBuildUrl = (searchValue, filterValue) => (
  `${DOMAIN_URL}?search=${searchValue}&searchBy=${filterValue}`
);
