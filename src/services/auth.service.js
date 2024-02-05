import api from "./api";
import TokenService from "./token.service";

class AuthService {
  login(username, password) {
    return api
      .post("/authenticate", {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          TokenService.setUser(response.data);
        }

        return response.data;
      });
  }




  logout() {
    TokenService.removeUser();
  }

  register(username, email, password) {
    return api.post("/auth/signup", {
      username,
      email,
      password
    });
  }

  getCurrentUser() {
    return TokenService.getUser();
  }
}

export default new AuthService();

//
// import api from "./api";
// import TokenService from "./token.service";
//
// class AuthService {
//   login(username, password) {
//     return api
//         .post("/auth/signin", {
//           username,
//           password
//         })
//         .then(response => {
//           if (response.data.accessToken) {
//             TokenService.setUser(response.data);
//           }
//
//           return response.data;
//         });
//   }
//
//   logout() {
//     TokenService.removeUser();
//   }
//
//   register(username, email, password) {
//     return api.post("/auth/signup", {
//       username,
//       email,
//       password
//     });
//   }
//
//   getCurrentUser() {
//     return TokenService.getUser();
//   }
// }
//
// export default new AuthService();
