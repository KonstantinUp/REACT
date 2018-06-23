import CryptoJS from 'crypto-js'
import sha3 from 'crypto-js/sha3'

let Sha3 = function  (value, options) {
    if (options && options.encoding === 'hex') {
        if (value.length > 2 && value.substr(0, 2) === '0x') {
            value = value.substr(2);
        }
        value = CryptoJS.enc.Hex.parse(value);
    }
    return sha3(value, {
        outputLength: 256
    }).toString();
};

export default Sha3