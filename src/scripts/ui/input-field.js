export default class InputField {

    constructor(fieldID, onChange = null, hdlValidate = null) {
        this._element = document.getElementById(fieldID);
        this._hdlValidate = hdlValidate;
        this._onChange = onChange;
        this._prepareEvents();
    }

    _prepareEvents() {
        this._element.addEventListener('input', () => this._onChange && this._onChange(this.getValue()) );
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