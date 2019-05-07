const assert = require('chai').assert;
const app = require('../index');
const expect = require('chai').expect

describe('string calculator',()=>{

    describe('add method',()=>{

        describe('when sending an empty string',()=>{
            it('Should return 0',()=>{
                const result = app.add('');
                expect(result).to.equal(0);
            });       
        });

        describe('when sending a string with only sinlge number',()=>{
            it('Should return the number as integer',()=>{
                const result = app.add("1");
                expect(result).to.equal(1);
            });
        });

        describe('when sending a string with 2 number separate by ,',()=>{
            it('Should return the sum of the two numbers',()=>{
                const result = app.add("1,2");
                expect(result).to.equal(3);
            });
        });
        describe('when sending a string with 5 number separate by ,',()=>{
            it('Should return the sum of the 5 numbers',()=>{
                const result = app.add("1,2,3,4,5");
                expect(result).to.equal(15);
            });
        });

        describe('when sending a string by , or new line',()=>{
            it('Should return the sum of the all numbers',()=>{
                const result = app.add("1,\n2,3,4,5");
                expect(result).to.equal(15);
            });
        });
    });
});