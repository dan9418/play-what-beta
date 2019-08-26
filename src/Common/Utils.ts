export class Utils {

    static moduloSum = (a: number, b: number, divisor: number, offset: number = 0, subtraction: boolean = false): number => {
        let dividend = (subtraction) ? ((a - offset) - (b - offset)) : ((a - offset) + (b - offset));
        return Utils.modulo(dividend, divisor) + offset;
    }

    static modulo = (a: number, b: number): number => {
        return ((a % b) + b) % b;
    }

}