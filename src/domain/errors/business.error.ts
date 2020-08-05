export default class BusinessError extends Error {
  constructor(message: string, name?: string) {
    super(message);
    this.name = name || BusinessError.name;
  }
}
