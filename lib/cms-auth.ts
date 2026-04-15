export const CMS_COOKIE_NAME = "cms_auth";
export const CMS_COOKIE_VALUE = "1";

const CMS_USERNAME = "Admin";
const CMS_PASSWORD = "admin123";

export function validateCmsCredentials(username: string, password: string): boolean {
  return username === CMS_USERNAME && password === CMS_PASSWORD;
}

export function isCmsCookieValid(cookieValue?: string): boolean {
  return cookieValue === CMS_COOKIE_VALUE;
}
