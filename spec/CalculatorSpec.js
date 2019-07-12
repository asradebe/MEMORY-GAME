describe ("Add", function() {
it ("add two numbers, equal zero", function() {
    let result = Add(0,0);
    expect(result).toBe(0);
})

it ("add negative numbers, should equal to -2", function() {
    let result = Add(-1, -1);
    expect(result).toBe(-2);
})

it ("add as many numbers, should equal 10", function() {
    let result = Add(1,2,3,4);
    expect(result).toBe(10);
})

it ("add two numbers, should equal 9", function() {
    let result = Add(4, 5);
    expect(result).toBe(9);
})

it ("add as many numbers, should equal 10", function() {
    let result = Add(1,2,3,4);
    expect(result).toBe(10);
})
});

    describe ("Multiply", function() {
        it ("multiply two numbers, should equal 2", function() {
            let result = Multiply(1,2);
            expect(result).toBe(2);
                })
                it ("multiply two numbers, should equal 24", function() {
                    let result = Multiply(1,2,3,4);
                    expect(result).toBe(24);
            
        })
            });