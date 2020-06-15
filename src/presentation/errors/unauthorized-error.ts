export class UnauthorizedError extends Error {
  constructor () {
    super('unautorized error')
    this.name = 'UnauthorizedError'
  }
}
