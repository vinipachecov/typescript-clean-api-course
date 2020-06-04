import { makeSignUpValidation } from './signup-validation'
import { ValidationComposite } from '../../presentation/helper/validators/validation-composite'
import { RequiredFieldValidation } from '../../presentation/helper/validators/required-field-validation'
import { Validation } from '../../presentation/helper/validators/validation'
import { CompareFieldValidation } from '../../presentation/helper/validators/compare-fields-validation'
import { EmailValidator } from '../../presentation/protocols'
import { EmailValidation } from '../../presentation/helper/validators/email-validation'

jest.mock('../../presentation/helper/validators/validation-composite')

const makeEmailValidator = (): EmailValidator => {
  class EmailValidatorStub implements EmailValidator {
    isValid (email: string): boolean {
      return true
    }
  }
  return new EmailValidatorStub()
}

describe('SignUpValidation Factory', () => {
  test('Should call ValidationComposite with all validators', () => {
    makeSignUpValidation()
    const validations: Validation[] = []
    for (const field of ['name', 'email', 'password', 'passwordConfirmation']) {
      validations.push(new RequiredFieldValidation(field))
    }
    validations.push(new CompareFieldValidation('password', 'passwordConfirmation'))
    validations.push(new EmailValidation('email', makeEmailValidator()))
    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  })
})
