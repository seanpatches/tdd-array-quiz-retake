const { bigFinder } = require('../lib/index.js');

describe('quiz function', () =>{
  
  it('filters and displays big numbers', () =>{
    let array = [1, 3, 5, 7, 2];

    expect(bigFinder(array)).toEqual(['Wow, 7 is big!']);
      
  });

  it('works with a my numbers', () => {
    let array = [10, 3, 5, 7, 2];

    expect(bigFinder(array)).toEqual(['Wow, 10 is big!', 'Wow, 7 is big!']);
  });

  it('works with a my numbers', () => {
    let array = [10, 3, 11, 5, 7, 2];

    expect(bigFinder(array)).toEqual(['Wow, 10 is big!', 'Wow, 11 is big!', 'Wow, 7 is big!']);
  });

});
