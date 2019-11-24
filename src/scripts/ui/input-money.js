import InputField from './input-field';

export default class InputMoney extends InputField {

    constructor(fieldID, onChange = null, hdlValidate = null) {
        super(fieldID, onChange, hdlValidate);
        this._prepareEvents();
    }

    _prepareEvents() {
        const ALLOW_VALUES = new RegExp("[0-9]");
        const ALLOW_KEYS = ['ArrowRight', 'ArrowLeft', 'Backspace', 'Delete'];

        this._element.addEventListener('keydown',
            event => !(ALLOW_VALUES.test(event.key) || ALLOW_KEYS.indexOf(event.key) !== -1) && event.preventDefault() 
        );

        this._element.addEventListener('input', 
            () => this.setValue(this.getValue())
        );
    }

    setValue(val) {
        if (val.length > 2) {
            const afterCommaValue = val.substring(val.length - 2);
            var beforeCommaValue = val.substring(0, val.length - 2);
            const contMillhar = Math.ceil(beforeCommaValue.length / 3) - 1;
            console.log(contMillhar)
            if (contMillhar > 0) {
                for (var i = 0; i < contMillhar; i++) {
                    const indexDot = beforeCommaValue.length - (3 * (i + 1) + i);
                    beforeCommaValue = beforeCommaValue.substring(0, indexDot) +'.'+ beforeCommaValue.substring(indexDot);
                }
            }
            
            val =  beforeCommaValue + ',' + afterCommaValue;

        }
        this._element.value = val.length ? "R$ " + val : "";
    }

    getValue() {
        return this._element.value
                    .replace("R$ ", "")
                    .replace(/[.,]/g, "");
    }
}