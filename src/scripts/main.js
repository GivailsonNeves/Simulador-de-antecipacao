import InputFields from './ui/input-field';
import InputMoney from './ui/input-money';

export default class Main {
    
    constructor() {
        this._prepareFields();
    }

    _prepareFields() {
        this._form = [ 
            new InputMoney('valorVenda', () => this._checkForm() ),
            new InputFields('qtdParcelas', () => this._checkForm() ),
            new InputFields('pctMDR', () => this._checkForm() )
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