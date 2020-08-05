import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import getAllMovieTicketsUseCase from 'src/application/UseCases/movie-ticket/getAllMovieTickets.usecase';

@Controller('tickets/')
export class MovieTicketController{

    constructor(private getAllMovieTicketsUseCase: getAllMovieTicketsUseCase){}

    @Get()
    public async getTickets(@Res() res) {
        const tickets = await this.getAllMovieTicketsUseCase.handle();
        return res.status(HttpStatus.OK).json(tickets);
    }

}