export default class InputField {

    constructor(element, onChange = null, hdlValidate = null) {
        this._element = element;
        this._hdlValidate = hdlValidate;
        this._onChange = onChange;
        this._prepareEvents();
    }

    _prepareEvents() {
        if (this._onChange)
            this._element.addEventListener('input', () => this._onChange(this.getValue()) );
    }

    getValue() {
        return this._element.value;
    }

    isValid() {
        return ( this._hdlValidate && this._hdlValidate(this.getValue()) ) || !!this.getValue();
    }

    setValue(val) {
        this._element.value = val;
    }

    clearField() {
        this._element.value = '';
    }

}