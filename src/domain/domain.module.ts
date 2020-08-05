import { Module } from '@nestjs/common';
import ValidateMovieTicketDayService from './movie-ticket/services/ValidateMovieTicketDay.service';
import ValidateMovieTicketHourServide from './movie-ticket/services/ValidateMovieTicketHour.service';
import { CalculateMovieTicketValueService } from './movie-ticket/services/CalculateMovieTicketValue.service';

@Module({
    providers: [ValidateMovieTicketDayService, ValidateMovieTicketHourServide, CalculateMovieTicketValueService],
    exports: [ValidateMovieTicketDayService, ValidateMovieTicketHourServide, CalculateMovieTicketValueService]
})
export class DomainModule {}
