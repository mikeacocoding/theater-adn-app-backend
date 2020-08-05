import { Controller, Get, Res, HttpStatus, Post, Body } from '@nestjs/common';
import getAllMovieTicketsUseCase from 'src/application/UseCases/movie-ticket/getAllMovieTickets.usecase';
import MovieTicketCommand from 'src/application/UseCases/movie-ticket/commands/movie-ticket.command';
import CreateMovieTicketUseCase from 'src/application/UseCases/movie-ticket/createMovieTicket.usecase';

@Controller('tickets/')
export class MovieTicketController {
  constructor(
    private getAllMovieTicketsUseCase: getAllMovieTicketsUseCase,
    private createMovieTicketUseCase: CreateMovieTicketUseCase,
  ) {}

  @Get()
  public async getMovieTickets(@Res() res): Promise<any> {
    const tickets = await this.getAllMovieTicketsUseCase.handle();
    return res.status(HttpStatus.OK).json(tickets);
  }

  @Post()
  public async createMovieTicket(
    @Res() res,
    @Body() movieTicket: MovieTicketCommand,
  ): Promise<any> {
    const movieTicketCreated = await this.createMovieTicketUseCase.handle(movieTicket);
    return res.status(HttpStatus.OK).json(movieTicketCreated);
  }
}