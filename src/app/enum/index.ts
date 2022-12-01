export enum StatusCode {
  Unknown = 0,
  OK = 200,
  Created = 201,
  BadRequest = 400,
  ValidationCode = 401,
  InternalServerError = 500,
  NotFound = 404,
  Conflict = 409,
  Forbidden = 403,
  tokenExpire = 422,
}
