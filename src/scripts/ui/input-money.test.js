import InputMoney from './input-money';
import MockInput from '../test-mock/mock-input';

describe('InputMoney class', () => {

    var inputMoney;
    var mockInput;

    beforeEach(() => {
        mockInput = new MockInput();
        inputMoney = new InputMoney(mockInput);
    });

    it('should create instance', () => {
        expect(inputMoney).not.toBeNull();
    });

    it ('should added event', () => {
        new InputMoney(mockInput, () => {});
        expect(Object.keys(mockInput.events).length).toBeGreaterThan(0);
    });

    it('should set element value', () => {
        inputMoney.setValue("150000")
        expect(mockInput.value).toBe("R$ 1.500,00");
    });

    it('should get element value', () => {
        const newValue = "1500";
        mockInput.value = newValue;
        expect(inputMoney.getValue()).toBe(newValue);
    });

    it('should return float value', () => {
        mockInput.value = "R$ 14,32";
        expect(inputMoney.getFloatValue()).toBe(14.32);
    });

    it ('should be valid', () => {
        inputMoney.setValue('1500');
        expect(inputMoney.isValid()).toBeTruthy();
        inputMoney.clearField();
        const inp = new InputMoney(mockInput, () => {}, () => true);
        expect(inp.isValid()).toBeTruthy();
    });

    it ('should clear field', () => {
        inputMoney.setValue('teste');
        inputMoney.clearField();
        expect(mockInput.value).toBe("");
    });

});