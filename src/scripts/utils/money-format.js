export default class MoneyFormat {

    constructor() {
        throw new Error("esta classe não pode ser instânciada!");
    }

    static format(val) {
        if (parseInt(val) === 0 || !val) return "";

        val = parseInt(val) + "";

        if (val.length > 2) {
            const afterCommaValue = val.substring(val.length - 2);
            var beforeCommaValue = val.substring(0, val.length - 2);
            const contMillhar = Math.ceil(beforeCommaValue.length / 3) - 1;
            if (contMillhar > 0) {
                for (var i = 0; i < contMillhar; i++) {
                    const indexDot = beforeCommaValue.length - (3 * (i + 1) + i);
                    beforeCommaValue = beforeCommaValue.substring(0, indexDot) +'.'+ beforeCommaValue.substring(indexDot);
                }
            }
            
            val =  beforeCommaValue + ',' + afterCommaValue;

            return "R$ " + val;
        } else {
            switch(val.length) {
                case 1: return "R$ 0,0" + val;
                case 2: return "R$ 0," + val;
            }
        }
    }

    static clearMask(val) {
        if(!val) return "";
        return val.replace(/[.,R$\s]/g, '');
    }

    static formatToFloat(val) {
        if(!val) return 0;
        return parseInt(MoneyFormat.clearMask(val)) / 100;
    }

}