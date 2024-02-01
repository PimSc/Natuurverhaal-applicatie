import api from './api';

// Get all users
class UserService {
  getPublicContent() {
    return api.get('/users/all');
  }

  // Get 1 user
  getUserBoard() {
    return api.get('/users/{username}');
  }

  getModeratorBoard() {
    return api.post('/users');
  }

  // getAdminBoard() {
  //   return api.get('/test/admin');
  // }










// class UserService {
//   getPublicContent() {
//     return api.get('/test/all');
//   }
//
//   getUserBoard() {
//     return api.get('/test/user');
//   }
//
//   getModeratorBoard() {
//     return api.get('/test/mod');
//   }
//
//   getAdminBoard() {
//     return api.get('/test/admin');
//   }
}

export default new UserService();
