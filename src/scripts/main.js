import InputFields from './ui/input-field';
import InputMoney from './ui/input-money';

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
            console.log('calcular valor');
        }
        console.log('invalid', invalid);
    }
}