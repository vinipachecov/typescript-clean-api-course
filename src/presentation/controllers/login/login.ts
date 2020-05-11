import { Controller, HttpRequest, HttpResponse } from '../../protocols'
import { badRequest } from '../../helper/http-helpers'
import { MissingParamError } from '../../errors'

export class LoginController implements Controller {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    return new Promise((resolve) => resolve(badRequest(new MissingParamError('email'))))
  }
}