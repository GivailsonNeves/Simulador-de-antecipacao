export default class Prepayment {

    constructor(value, amountParcels, mdr) {
        this.value = value;
        this.amountParcels = amountParcels;
        this.mdr = mdr / 100;

        this.value = this.value * (1 - this.mdr);
        this.parcelValue = this.value / amountParcels;
        this.monthTax = this.mdr / 30;
    }

    inOneDay() {
        return this._calcAmountToReceive(0);
    }

    inFifteenDays() {
        return this._calcAmountToReceive(15);
    }

    inThirtyDays() {
        return this._calcAmountToReceive(30);
    }

    inNinetyDays() {
        return this._calcAmountToReceive(90);
    }

    _calcAmountToReceive(daysToReceive) {
        var total = 0;
        for (var i = 1; i <= this.amountParcels; i++) {
            total += this._calcParcelValue(daysToReceive, i);
        }
        return total;
    }

    _calcParcelValue(daysToReceive, indexParcel) {
        var baseDays = Math.max( indexParcel * 30 - daysToReceive, 0);
        var parcelValue = (1 - baseDays * this.monthTax) * this.parcelValue;
        return parseFloat(parcelValue.toFixed(2));
    }

}