describe('Merge Sort', function(){
  it('is able to split an array into two halves of even length', function() {
    var whole = [1,2,3,4];
    var answer = [[1,2],[3,4]];
    expect(split(whole)).toEqual(answer);
  });
  it('is able to split an array into two halves of odd length', function() {
    var whole = [1,2,3];
    var answer = [[1],[2,3]];
    expect(split(whole)).toEqual(answer);
  });
  it('is able to merge two sorted arrays into one sorted array', function(){
    var arr1 = [1,2];
    var arr2 = [3,4,5];
    var answer = [1,2,3,4,5];
    expect(merge(arr1,arr2)).toEqual(answer);

  });
  it('handles an empty array', function(){
    var testArr = [];
    expect( mergeSort(testArr) ).toEqual( [] );
  });
  it('handles an array with single item', function(){
    testArr = [1];
    expect( mergeSort(testArr) ).toEqual( [1] );
  });
  it('handles an already sorted array', function(){
    testArr = [1,2,3,4,5,6];
    expect( mergeSort(testArr) ).toEqual( [1,2,3,4,5,6] );
  });
  it('handles an unsorted array', function(){
    testArr = [2,1,3,6,5,4];
    expect( mergeSort(testArr) ).toEqual( [1,2,3,4,5,6] );
  });
});
