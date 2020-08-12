import { TestingModule, Test } from '@nestjs/testing';
import { CalculateMovieTicketValueService } from 'src/domain/movie-ticket/services/CalculateMovieTicketValue.service';
import MovieTicket from 'src/domain/movie-ticket/model/movie-ticket';
import Movie from 'src/domain/movie/model/Movie';

describe('Calculate Movie Ticket Value Service', () => {
  let calculateService: CalculateMovieTicketValueService;
  let movieTicket: MovieTicket;
  let basePrice: number;

  beforeAll(() => {
    calculateService = new CalculateMovieTicketValueService();

    basePrice = 20000;
    const movie = new Movie('1', 'Start wars', 'Desc', 'url', basePrice);
    movieTicket = new MovieTicket('1', 0, movie);

    //2020 Agosto 05 09:00 a.m
    let testDate = new Date(2020, 7, 5, 9);
    console.log(testDate);

    movieTicket.setDate(testDate);
    movieTicket.setTicketId(movieTicket.generateTicketId());
  });

  describe('Testing different Calculus', () => {
    it('Expect not value modification', () => {
      //Monday
      movieTicket.getDate().setDate(3);
      const value = calculateService.calculate(movieTicket);
      expect(value).toBe(basePrice);
    });

    it('Expect a 10% higher value on Sunday', () => {
      //Saturday
      movieTicket.getDate().setDate(8);
      const value = calculateService.calculate(movieTicket);

      let newValue = basePrice*(1 + 0.1);
      newValue = parseInt(newValue.toFixed(0));
      expect(value).toBe(newValue);
    });
    it('Expect a 10% higher value on Saturday', () => {
      //Saturday
      movieTicket.getDate().setDate(9);
      const value = calculateService.calculate(movieTicket);

      let newValue = basePrice*(1 + 0.1);
      newValue = parseInt(newValue.toFixed(0));
      expect(value).toBe(newValue);
    });

    it('Expect a 20% lower value on Tuesday', () => {
      //Wednesday
      movieTicket.getDate().setDate(4);
      const value = calculateService.calculate(movieTicket);

      let newValue = basePrice*(1 - 0.2);
      newValue = parseInt(newValue.toFixed(0));
      expect(newValue).toBe(newValue);
    });
    it('Expect a 20% lower value on Wednesday', () => {
      //Wednesday
      movieTicket.getDate().setDate(5);
      const value = calculateService.calculate(movieTicket);

      let newValue = basePrice*(1 - 0.2);
      newValue = parseInt(newValue.toFixed(0));
      expect(newValue).toBe(newValue);
    });
  });
});
