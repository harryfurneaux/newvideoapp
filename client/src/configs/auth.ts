export default {
  meEndpoint: '/auth/me',
  loginEndpoint: '/users/log-in',
  registerEndpoint: '/users/sign-up',
  addJobEndPoint: '/interviewer/create',
  getJobsEndpPoint: '/interviewer',
  storageTokenKeyName: 'accessToken',
  onTokenExpiration: 'refreshToken', // logout | refreshToken
  addQuestion: '/questions'
}
