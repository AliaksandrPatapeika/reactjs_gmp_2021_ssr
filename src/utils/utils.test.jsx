import fileMock from '../tests/mocks/fileMock';
import * as utils from './utils';

describe('utils', () => {
  test('isValidVoteAverage', () => {
    expect(utils.isValidVoteAverage(undefined)).toEqual(true);
    expect(utils.isValidVoteAverage('100500')).toEqual(true);
    expect(utils.isValidVoteAverage('vote average')).toEqual(false);
  });

  test('isValidUrl', () => {
    expect(utils.isValidUrl(undefined)).toEqual(true);
    expect(utils.isValidUrl('https://url.com/img.jpg')).toEqual(true);
    expect(utils.isValidUrl('wrong url')).toEqual(false);
  });

  test('addDefaultSrc', () => {
    const mockEvent = {target: {src: ''}};

    utils.addDefaultSrc(mockEvent);
    expect(mockEvent.target.src).toEqual(fileMock);
  });

  test('convertMovieData', () => {
    const mockMovieData = {
      poster_path: 'https://posters.com/12345',
      genres: [{label: 'comedy'}, {label: 'drama'}],
      budget: 1000,
      revenue: 1000,
      runtime: 1000,
      vote_average: 7.5,
      vote_count: 1000
    };
    const mockResult = {
      poster_path: 'https://posters.com/12345',
      genres: ['comedy', 'drama'],
      budget: 1000,
      revenue: 1000,
      runtime: 1000,
      vote_average: 7.5,
      vote_count: 1000
    };

    expect(utils.convertMovieData(mockMovieData)).toEqual(mockResult);
  });

  test('scrollToTop', () => {
    window.scrollTo = jest.fn();
    utils.scrollToTop();
    expect(window.scrollTo).toHaveBeenCalled();
  });
});
