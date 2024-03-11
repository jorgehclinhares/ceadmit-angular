export interface UserListResponse {
  message: string;
  data: UserList;
}

export interface UserList {
  users: User[];
}

export interface User {
  id: number;
  identifier: string;
  first_name: string;
  last_name: string;
  photo: any;
  telephone: string;
  birthday: string;
  mari_stat_id: number;
}

export interface UserListParam {
  value: string | undefined;
  count: string;
  offset: string;
}
