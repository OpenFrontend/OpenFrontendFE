import { api, getAuthHeaders, get, post, update, del } from "./common";

export const loginAPI = async (userlogin) => {
  //path e.g.
  let url = `${api}/Auth/login`;
  let authHeader = getAuthHeaders();
  return await post(url, userlogin, { ...authHeader });
};
export const signupAPI = async (userlogin) => {
  //another path e.g.
  console.log(userlogin);
  let url = `${api}/Auth/register`;
  let authHeader = getAuthHeaders();
  return await post(url, userlogin, { ...authHeader });
};
