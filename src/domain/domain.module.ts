import { Module } from '@nestjs/common';
import ValidateMovieTicketDayService from './movie-ticket/services/ValidateMovieTicketDay.service';
import ValidateMovieTicketHourServide from './movie-ticket/services/ValidateMovieTicketHour.service';

@Module({
    providers: [ValidateMovieTicketDayService, ValidateMovieTicketHourServide],
    exports: [ValidateMovieTicketDayService, ValidateMovieTicketHourServide]
})
export class DomainModule {}
