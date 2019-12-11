import InputFields from './ui/input-field';
import InputMoney from './ui/input-money';
import Prepayment from './models/prepayment';
import MoneyFormat from './utils/money-format';

export default class Main {

    constructor() {
        this._captureFields();
        this._prepareFields();
    }

    _captureFields() {
        this.inputValor = document.getElementById('valorVenda');
        this.inputParcelas = document.getElementById('qtdParcelas');
        this.inputMDR = document.getElementById('pctMDR');
    }

    _prepareFields() {
        this._form = [
            new InputMoney(this.inputValor, () => this._checkForm()),
            new InputFields(this.inputParcelas, () => this._checkForm(), value => this._checkMaxParcelas(value)),
            new InputFields(this.inputMDR, () => this._checkForm())
        ];
    }

    _checkMaxParcelas(total) {
        var isValid = total > 0 && total <= 12;
        const maxParcelasAlert = document.getElementById('maxParcelas');

        maxParcelasAlert.classList.remove('invalid');
        if (isValid) maxParcelasAlert.classList.add('invalid');

        return isValid;
    }

    _checkForm() {        
        const invalid = this._form.filter(f => f.isValid() === false ).length > 0;
        if (!invalid) {

            const prepayment = new Prepayment(
                this._form[0].getValue(),
                this._form[1].getValue(),
                this._form[2].getValue()
            );

            this._showResult(prepayment);
        } else {
            this._clearResult();
        }
    }

    _showResult(prepayment) {
        this._displayformatValue('tomorrow', prepayment.inOneDay());
        this._displayformatValue('fifteen', prepayment.inFifteenDays());
        this._displayformatValue('thirty', prepayment.inThirtyDays());
        this._displayformatValue('ninety', prepayment.inNinetyDays());
    }

    _clearResult() {
        this._displayformatValue('tomorrow', 0);
        this._displayformatValue('fifteen', 0);
        this._displayformatValue('thirty', 0);
        this._displayformatValue('ninety', 0);
    }

    _displayformatValue(fielId, value) {
        document.getElementById(fielId).innerHTML = MoneyFormat.format(value);
    }
}