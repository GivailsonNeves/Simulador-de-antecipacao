import InputField from './input-field';
import MockInput from '../test-mock/mock-input';

describe('InputField class', () => {

    var inputField;
    var mockInput;

    beforeEach(() => {
        mockInput = new MockInput();
        inputField = new InputField(mockInput);
    });

    it('should create instance', () => {
        expect(inputField).not.toBeNull();
    });

    it ('should added event', () => {
        new InputField(mockInput, () => {});
        expect(Object.keys(mockInput.events).length).toBeGreaterThan(0);
    });

    it('should set element value', () => {
        const newValue = "teste";
        inputField.setValue(newValue)
        expect(mockInput.value).toBe(newValue);
    });

    it('should get element value', () => {
        const newValue = "teste";
        mockInput.value = newValue;
        expect(inputField.getValue()).toBe(newValue);
    });

    it ('should be valid', () => {
        inputField.setValue('teste');
        expect(inputField.isValid()).toBeTruthy();
        inputField.clearField();
        const inp = new InputField(mockInput, () => {}, () => true);
        expect(inp.isValid()).toBeTruthy();
    });

    it ('should clear field', () => {
        inputField.setValue('teste');
        inputField.clearField();
        expect(mockInput.value).toBe("");
    });

});