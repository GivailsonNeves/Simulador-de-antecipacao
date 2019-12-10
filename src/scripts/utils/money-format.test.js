import MoneyFormat from './money-format';

describe('MoneyFormat class', () => {

    const ENTER_NUMBER = "150000";
    const FORMATED_EXPECTED = "R$ 1.500,00";
    const FLOATING_EXPECTED = 1500.00;

    it('should not create instance', () => {
        try {
            new MoneyFormat();
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
        }
    });

    it('should not format number', () => {    
        expect(MoneyFormat.format("")).toBe("");
    });

    it('should not have dot', () => {    
        expect(MoneyFormat.format("10023")).not.toContain(".");
    });

    it('should format number', () => {    
        expect(MoneyFormat.format(ENTER_NUMBER)).toBe(FORMATED_EXPECTED);
    });

    it('should format one digit', () => {    
        expect(MoneyFormat.format("2")).toBe("R$ 0,02");
    });

    it('should format two digits', () => {    
        expect(MoneyFormat.format("24")).toBe("R$ 0,24");
    });

    it('should clear mask', () => {
        expect(MoneyFormat.clearMask(FORMATED_EXPECTED)).toBe(ENTER_NUMBER);
        expect(MoneyFormat.clearMask("")).toBe("");
    });

    it('should convert formated to float', () => {
        expect(MoneyFormat.formatToFloat(FORMATED_EXPECTED)).toBe(FLOATING_EXPECTED);
        expect(MoneyFormat.formatToFloat("")).toBe(0);
    });

});