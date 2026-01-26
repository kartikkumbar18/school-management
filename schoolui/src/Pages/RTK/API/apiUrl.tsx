export const API_URLS = {
  AUTH: {
    LOGIN: "/api/login/",
  },
  USER: {
    ADD: "/api/users/",
    GET: "/api/users/",
    UPDATE: (id: string | number) => `/api/users/${id}/`,
    DELETE: (id: string | number) => `/api/users/${id}/`,
  },
  ROLE:{
    ADD:"/api/groups/",
    GET:"/api/groups",
    UPDATE:(id: string | number) => `/api/groups/${id}/`,
    DELETE:(id: string | number) => `/api/groups/${id}/`
  },
  ROLE_MAPPING:{
    ADD : "/api/user-group/",
    GET: "/api/user-group/",
    UPDATE: (id:string | number) => `/api/user-group/${id}`,
    DELETE: (id:string | number) => `/api/user-group/${id}`
  }
};
