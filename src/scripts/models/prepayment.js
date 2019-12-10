export default class Prepayment {

    constructor(value, amountParcels, mdr) {
        this.value = value;
        this.amountParcels = amountParcels;
        this.mdr = mdr / 100;

        this.value = this.value * (1 - this.mdr);
    }

    inOneDay() {
        return 0;
    }

    inFifteenDays() {
        return 0;
    }

    inThirtyDays() {
        return 0;
    }

    inSixtyDays() {
        return 0;
    }

    inNinetyDays() {
        return 0;
    }

}