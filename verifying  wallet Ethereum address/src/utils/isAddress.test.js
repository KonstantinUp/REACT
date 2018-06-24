import isAddress from './isAddress'

describe('isAddress function tests', () => {
    describe('when string contains 40 letter  ', () => {
        it('error should be empty', () => {
            let result = isAddress("0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d");
            expect(result.error).toBe('')
        });
         describe('when all letters uppercase', () => {
                it('error equals Address is not in a checksummed format because it is all either lowercased or uppercased.', () => {
                    let result = isAddress("0XC1912FEE45D61C87CC5EA59DAE31190FFFFF232D");
                    expect(result.error).toBe('Address is not in a checksummed format because it is all either lowercased or uppercased.')
                });
            });
        describe('when all letters lowercase', () => {
                it('error equals Address is not in a checksummed format because it is all either lowercased or uppercased.', () => {
                    let result = isAddress("c1912fee45d61c87cc5ea59dae31190fffff232d");
                    expect(result.error).toBe('Address is not in a checksummed format because it is all either lowercased or uppercased.')
                });
            });
    });
    describe('when string less than 40 letter ', () => {
        it('error equals Address must start with 0x and should be of 40 characters long', () => {
            let result = isAddress("c1912fee45d61c87cc5ea59dae31190fffff232");
            expect(result.error).toBe('Address must start with 0x and should be of 40 characters long')
        });
    });
    describe('when string more than 40 letter ', () => {
        it('error equals Address must start with 0x and should be of 40 characters long', () => {
            let result = isAddress("c1912fee45d61c87cc5ea59dae31190fffff23222");
            expect(result.error).toBe('Address must start with 0x and should be of 40 characters long')
        });
    });
    describe('when Ethereum address is invalid', () => {
        it('error equals  Ethereum address is invalid', () => {
            let result = isAddress("0xC1912fEE45d61C87Cc5EA59DaE31190FFFFf232d");
            expect(result.error).toBe('This Ethereum address is invalid.')
        });
    });
    describe('when Ethereum address is valid', () => {
        it('error should be empty', () => {
            let result = isAddress("0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d");
            expect(result.error).toBe('')
        });
    });
});
