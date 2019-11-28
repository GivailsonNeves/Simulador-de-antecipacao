export default class MoneyFormat {

    constructor() {
        throw error("esta classe não pode ser instânciada!");
    }

    static format(val) {
        if (parseInt(val) === 0 || !val) return "";
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

        }
        return "R$ " + val;
    }

}