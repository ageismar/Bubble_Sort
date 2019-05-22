beforeEach(function () {
    spyOn(window, 'swap').and.callThrough(); 
    
    
});

describe('Bubble Sort', function(){
    it('calls on swap', function(){
    bubbleSort([9,5,6,7,2,4])
    expect(window.swap.calls.count()).toEqual(11)
    })

    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });

    it('if array has one element it returns original array', function(){
        expect( bubbleSort([1])).toEqual([1])
    })

    it('returns same array if already a sorted array', function(){
        expect( bubbleSort([1,2,3,6])).toEqual([1,2,3,6])
    })

    it('returns a sorted array from an unsorted array', function(){
        expect( bubbleSort([6,8,2,4])).toEqual([2, 4, 6, 8])
    })

  });
