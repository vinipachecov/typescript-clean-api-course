import { ValidationComposite } from '../../../presentation/helper/validators/validation-composite'
import { RequiredFieldValidation } from '../../../presentation/helper/validators/required-field-validation'
import { Validation } from '../../../presentation/protocols/validation'
import { EmailValidatorAdapter } from '../../adapters/validators/email-validator-adapter'
import { EmailValidation, CompareFieldValidation } from '../../../presentation/helper/validators'

export const makeSignUpValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['name', 'email', 'password', 'passwordConfirmation']) {
    validations.push(new RequiredFieldValidation(field))
  }
  validations.push(new CompareFieldValidation('password', 'passwordConfirmation'))
  validations.push(new EmailValidation('email', new EmailValidatorAdapter()))
  return new ValidationComposite(validations)
}
