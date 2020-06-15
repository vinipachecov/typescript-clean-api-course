import { Router } from 'express'
import { makeSignUpController } from '../factories/signup/signup'
import { adaptRoute } from '../adapters/express/express-route-adapters'

export default (router: Router): void => {
  router.post('/signup', adaptRoute(makeSignUpController()))
}