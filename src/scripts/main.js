import InputFields from './ui/input-field';
import InputMoney from './ui/input-money';
import Prepayment from './models/prepayment';
import MoneyFormat from './utils/money-format';

export default class Main {
    
    constructor() {
        this._prepareFields();
    }

    _prepareFields() {
        this._form = [ 
            new InputMoney(document.getElementById('valorVenda'), () => this._checkForm() ),
            new InputFields(document.getElementById('qtdParcelas'), () => this._checkForm() ),
            new InputFields(document.getElementById('pctMDR'), () => this._checkForm() )
        ];
    }

    _checkForm() {
        const invalid = this._form.filter( f => !f.isValid() ).length > 0;
        if (!invalid) {

            const prepayment = new Prepayment(
                this._form[0].getValue(),
                this._form[1].getValue(),
                this._form[2].getValue()
            );

            this._showResult(prepayment);
        }
    }

    _showResult(prepayment) {
        document.getElementById('tomorrow').innerHTML = MoneyFormat.format(prepayment.inOneDay());
        document.getElementById('fifteen').innerHTML = MoneyFormat.format(prepayment.inFifteenDays());
        document.getElementById('thirty').innerHTML = MoneyFormat.format(prepayment.inThirtyDays());
        document.getElementById('ninety').innerHTML = MoneyFormat.format(prepayment.inNinetyDays());
    }
}