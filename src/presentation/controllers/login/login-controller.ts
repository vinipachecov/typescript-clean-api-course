import { Controller, HttpRequest, HttpResponse, Authentication } from './login-controller-protocols'
import { badRequest, serverError, unauthorized, ok } from '../../helper/http/http-helpers'
import { Validation } from '../signup/signup-controller-protocols'

export class LoginController implements Controller {
  constructor (
    private readonly authentication: Authentication,
    private readonly validation: Validation) {
    this.validation = validation
    this.authentication = authentication
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { email, password } = httpRequest.body
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }
      const accessToken = await this.authentication.auth({ email, password })
      if (!accessToken) {
        return unauthorized()
      }
      return ok({ accessToken })
    } catch (error) {
      return serverError(error)
    }
  }
}
