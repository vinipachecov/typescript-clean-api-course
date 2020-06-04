import { Validation } from '../../protocols/validation'
import { InvalidParamError } from '../../errors'
import { EmailValidator } from '../../protocols'

export class EmailValidation implements Validation {
  private readonly fieldName: string
  private readonly emailValidation: EmailValidator

  constructor (fieldName: string, emailValidation: EmailValidator) {
    this.fieldName = fieldName
    this.emailValidation = emailValidation
  }

  validate (input: any): Error {
    const isValid = this.emailValidation.isValid(input[this.fieldName])
    if (!isValid) {
      return new InvalidParamError(this.fieldName)
    }
  }
}
