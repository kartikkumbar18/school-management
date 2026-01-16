export interface BackendUser {
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    is_staff: boolean;
    is_active: boolean;
    date_joined: string;
    last_login: string | null;
  }
  
  export interface TableUser {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    isStaff: boolean;
    status: "Active" | "Inactive";
  }
  