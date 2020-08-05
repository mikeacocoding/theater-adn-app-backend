import BusinessError from 'src/domain/errors/business.error';

export default class InvalidMovieTicketDayError extends BusinessError {
  constructor(message: string, name?: string) {
    super(message);
    this.name = name || InvalidMovieTicketDayError.name;
  }
}
