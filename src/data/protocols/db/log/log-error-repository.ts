// Keep every interface responsible for a single method
// to keep the Interface Segregation Principle from SOL-I-D

export interface LogErrorRepository {
  logError(stack: string): Promise<void>
}
