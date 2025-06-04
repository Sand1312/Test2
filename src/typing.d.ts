declare namespace API {
  type LoginParams = {
    email?: string;
    password?: string;
  };

  type RegisterParms = {
    email?: string;
    password?: string;
    confirmPassword?: string;
  };

  type LoginResult = {
    email?: string;
    token?: string;
  };
}
