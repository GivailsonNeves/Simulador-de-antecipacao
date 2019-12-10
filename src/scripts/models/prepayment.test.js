import Prepayment from './prepayment';

describe('Prepayment class', () => {

    const VALUE = 150;
    const PARCELS = 3;
    const MDR = 4;

    const VALUE_WITH_TAX = 144;
    const VALUE_ONE_DAY = 132.48;
    const VALUE_FIFTEEN_DAYS = 135.36;
    const VALUE_THIRTY_DAYS = 138.24;
    const VALUE_NINETY_DAYS = 144;

    let prepayment;

    beforeEach(() => {
        prepayment = new Prepayment(VALUE, PARCELS, MDR);
    });

    it('should create object', () => {    
        expect(prepayment).not.toBeNull();
    });

    it('should calc parcelValue', () => {
        expect(prepayment._calcParcelValue(0, 1)).toBe(46.08);
        expect(prepayment._calcParcelValue(0, 2)).toBe(44.16);
        expect(prepayment._calcParcelValue(0, 3)).toBe(42.24);
    });

    it('should calculate first tax', () => {    
        expect(prepayment.value).toBe(VALUE_WITH_TAX);
    });

    it('should calculate amount for one day', () => {    
        expect(prepayment._calcAmountToReceive(0)).toBe(VALUE_ONE_DAY);
    });

    it('should calculate in one day', () => {    
        expect(prepayment.inOneDay()).toBe(VALUE_ONE_DAY);
    });

    it('should calculate in fifteen days', () => {    
        expect(prepayment.inFifteenDays()).toBe(VALUE_FIFTEEN_DAYS);
    });

    it('should calculate in thirty days', () => {    
        expect(prepayment.inThirtyDays()).toBe(VALUE_THIRTY_DAYS);
    });

    it('should calculate in ninety days', () => {    
        expect(prepayment.inNinetyDays()).toBe(VALUE_NINETY_DAYS);
    });

});