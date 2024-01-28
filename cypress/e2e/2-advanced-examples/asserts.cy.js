/// <reference types="cypress" />

it('Equality', () => {
    const a = 1;

    expect(a).equal(1);
    expect(a, 'Deveria ser 1').equal(1);
    expect(a).equal(1);
    expect('a').not.to.be.equal('b');


})

it('Truthy', () => {
    const a= true;
    const b = null;
    let c;

    expect(a).to.be.true;
    expect(b).to.be.null;
    expect(a).not.to.be.null
    expect(c).to.be.undefined
})

it('Object Equality', () => {
    const obj = {
        a : 1,
        b : 2
    }

    expect(obj).equal(obj)
    expect(obj).to.be.deep.equal({a : 1, b : 2})
    // Here, if I don't put the .deep, its will give an error
    expect(obj).include({a : 1})
    // To see a specific object 
    expect(obj).to.have.property('b')
    expect(obj).to.not.be.empty
})

it('Arrays', () => {
    const arr = [1,2,3]
    expect(arr).to.have.members([1,2,3])
    expect(arr).to.include.members([1,3])
    expect(arr).to.not.be.empty

})

it('Types', () => {
    const run = 1
    const string = 'String'

    expect(run).to.be.a('number')
    expect(string).to.be.a('string')
    expect({}).to.be.an('object')

})

it('String', () => {
    const str = 'Test String'

    expect(str).to.be.equal('Test String')
    expect(str).to.have.length(11)
    expect(str).to.contains('Test')
    expect(str).to.match(/String/)
    expect(str).to.match(/^Test/)
    // To see if its starts with Test, use the ^ symbol
    expect(str).to.match(/String$/)
    // To see if ended with String, use the $ symbol
})

it('Numbers', () => {
    const number = 4
    const floatNumber = 5.2123
    
    expect(number).to.be.equal(4)
    expect(number).to.be.above(3)
    expect(number).to.be.below(7)
    expect(floatNumber).to.be.equal(5.2123)
    expect(floatNumber).to.be.closeTo(5.2, 0.1)
})