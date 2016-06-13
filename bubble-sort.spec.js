describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    var testArr = [];
    expect( bubbleSort(testArr) ).toEqual( [] );
  });
  it('handles an array with single item', function(){
    testArr = [1];
    expect( bubbleSort(testArr) ).toEqual( [1] );
  });
  it('handles an already sorted array', function(){
    testArr = [1,2,3,4,5,6];
    expect( bubbleSort(testArr) ).toEqual( [1,2,3,4,5,6] );
  });
  it('handles an unsorted array', function(){
    testArr = [2,1,3,6,5,4];
    expect( bubbleSort(testArr) ).toEqual( [1,2,3,4,5,6] );
  });
});
