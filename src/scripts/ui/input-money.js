import InputField from './input-field';
import MoneyFormat from '../utils/money-format';

export default class InputMoney extends InputField {

    constructor(fieldID, onChange = null, hdlValidate = null) {
        super(fieldID, onChange, hdlValidate);
        this._prepareEvents();
    }

    _prepareEvents() {
        const ALLOW_VALUES = new RegExp("[0-9]");
        const ALLOW_KEYS = ['Backspace', 'Delete'];

        this._element.addEventListener('keydown',
            event => !(ALLOW_VALUES.test(event.key) || ALLOW_KEYS.indexOf(event.key) !== -1) && event.preventDefault() 
        );

        this._element.addEventListener('input', 
            () => { this.setValue(this.getValue()); if (this._onChange) this._onChange(this.getValue()) }
        );
    }

    setValue(val) {
        this._element.value = MoneyFormat.format(val);
    }

    getValue() {
        return MoneyFormat.clearMask(this._element.value);
    }

    getFloatValue() {
        return MoneyFormat.formatToFloat(this._element.value);
    }
}