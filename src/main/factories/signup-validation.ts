import { ValidationComposite } from '../../presentation/helper/validators/validation-composite'
import { RequiredFieldValidation } from '../../presentation/helper/validators/required-field-validation'
import { Validation } from '../../presentation/helper/validators/validation'
import { CompareFieldValidation } from '../../presentation/helper/validators/compare-fields-validation'

export const makeSignUpValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['name', 'email', 'password', 'passwordConfirmation']) {
    validations.push(new RequiredFieldValidation(field))
  }
  validations.push(new CompareFieldValidation('password', 'passwordConfirmation'))
  return new ValidationComposite(validations)
}
