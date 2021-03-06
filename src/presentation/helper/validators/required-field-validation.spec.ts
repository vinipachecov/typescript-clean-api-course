import { RequiredFieldValidation } from './required-field-validation'
import { MissingParamError } from '../../errors'

const makeSut = (): RequiredFieldValidation => new RequiredFieldValidation('field')
describe('RequiredField Validation', () => {
  test('should return a MissingParamError if Validation fails', () => {
    const sut = makeSut()
    const error = sut.validate({ name: 'any_name' })
    expect(error).toEqual(new MissingParamError('field'))
  })

  test('should not return error if Validation succeeds', () => {
    const sut = makeSut()
    const error = sut.validate({ field: 'any_name' })
    expect(error).toBeFalsy()
  })
})
