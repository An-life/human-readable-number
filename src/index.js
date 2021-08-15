module.exports = function toReadable(number) {
    let arr1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen',
        'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let arr2 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if (number > -1 && number < 20) {
        return (arr1[number])
    } else if (number > 19 && number < 100 && number % 10 === 0) {
        let i = number / 10 - 2;
        return (arr2[i])
    } else if (number > 20 && number < 100) {
        let a = number / 10;
        let i = Math.trunc(a);
        let k = number % 10;
        return (arr2[i - 2] + " " + arr1[k]);
    } else if (number > 99 && number < 1000 && number % 100 === 0) {
        return (arr1[number / 100] + ' ' + 'hundred')
    } else if (number > 100 && number < 1000 && number % 100 < 20) {
        let a = number / 100
        let i = Math.trunc(a)
        let x = number % 100
        return (arr1[i] + ' ' + 'hundred' + ' ' + arr1[x])
    } else if (number > 100 && number < 1000 && number % 100 > 19 && number % 10 === 0) {
        let a = number / 100
        let i = Math.trunc(a)
        let x = (number % 100) / 10
        let y = Math.trunc(x)
        return (arr1[i] + ' ' + 'hundred' + ' ' + arr2[y - 2]);
    } else if (number > 100 && number < 1000 && number % 100 > 20) {
        let a = number / 100
        let i = Math.trunc(a)
        let m = (number % 100) / 10
        let y = Math.trunc(m)
        let x=(number % 100)%10
        return (arr1[i] + ' ' + 'hundred' + ' ' + arr2[y - 2] + ' ' + arr1[x])
    }


}
