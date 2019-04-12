describe('quiz function', () =>{
  
  it('filters and displays big numbers', () =>{
    let array = [1, 3, 5, 7, 2];

    expect(bigFinder(array)).toEqual(['Wow, 7 is big!']);
      
  });
});
