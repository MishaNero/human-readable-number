module.exports = function toReadable (number) {
    let result = '';
    const first = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const second = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const third = ['twenty ', 'thirty ', 'forty ', 'fifty ', 'sixty ', 'seventy ', 'eighty ', 'ninety '];

    const string = number.toString();
    result = string.split('').map((element, i) => {
        let newString = '';
        if (string.length === 1 && string[0] === '0') {
            newString = 'zero';
        } else if (string.length === 3 && i === 0) {
            newString = `${first[element]} hundred `;
        } else if (string.length > 1 && string[string.length - 2] !== '1' && i === string.length - 2) {
            newString = third[element - 2];
        } else if (string.length > 1 && string[string.length - 2] === '1' && i === string.length - 1) {
            newString = second[element] || '';
        } else if (string[string.length - 2] !== '1' && i === string.length - 1) {
            newString = first[element];
        }
        return newString;
    }).join('');
    return result.trim();
}