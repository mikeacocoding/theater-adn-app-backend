import { Controller, Get, Res, HttpStatus, Post, Body, UsePipes, ValidationPipe, HttpException, Delete, Param, HttpCode } from '@nestjs/common';
import getAllMovieTicketsUseCase from 'src/application/UseCases/movie-ticket/getAllMovieTickets.usecase';
import MovieTicketCommand from 'src/application/UseCases/movie-ticket/commands/movie-ticket.command';
import CreateMovieTicketUseCase from 'src/application/UseCases/movie-ticket/createMovieTicket.usecase';
import DeleteMovieTicketByTicketIdUseCase from 'src/application/UseCases/movie-ticket/deleteMovieTicketByTicketId.usecase';
import { CalculateMovieTicketUseCase } from 'src/application/UseCases/movie-ticket/calculateMovieTicketValue.usecase';

@Controller('tickets/')
export class MovieTicketController {
  constructor(
    private getAllMovieTicketsUseCase: getAllMovieTicketsUseCase,
    private createMovieTicketUseCase: CreateMovieTicketUseCase,
    private deleteMovieTicketByTicketIdUseCase: DeleteMovieTicketByTicketIdUseCase,
    private calculateMovieTicketValueUseCase: CalculateMovieTicketUseCase
  ) {}

  @Get()
  public async getMovieTickets(@Res() res): Promise<any> {
    const tickets = await this.getAllMovieTicketsUseCase.handle();
    return res.status(HttpStatus.OK).json(tickets);
  }

  @Post('/cost')
  @UsePipes(new ValidationPipe({ transform: true}))
  public calculateCost(@Res() res, @Body() movieTicket: MovieTicketCommand): string{
    const value = this.calculateMovieTicketValueUseCase.handle(movieTicket);
    let ticketValue = new MovieTicketCommand();
    ticketValue.value = value.get();
    return res.status(HttpStatus.OK).json(ticketValue);
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true}))
  public async createMovieTicket(
    @Res() res,
    @Body() movieTicket: MovieTicketCommand,
  ): Promise<any> {
    try{
      const movieTicketCreated = await this.createMovieTicketUseCase.handle(movieTicket);
      return res.status(HttpStatus.CREATED).json(movieTicketCreated);
    }catch(e){
      throw new HttpException(e.message,HttpStatus.BAD_REQUEST);
    }
  }

  @Delete(':ticketId')
  public async deleteMovieTicket(@Res() res, @Param('ticketId') ticketId: number): Promise<any>{
    const movieTicketDeleted = await this.deleteMovieTicketByTicketIdUseCase.handle(ticketId);
    if(movieTicketDeleted.isEmpty()){
      return res.status(HttpStatus.OK).json({message:'Nada por eliminar'});
    }
    return res.status(HttpStatus.OK).json(movieTicketDeleted);
  }

}
