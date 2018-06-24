import Sha3 from './sha3'

function isChecksumAddress (address) {
    debugger;
    address = address.replace('0x','');
    var addressHash = Sha3 (address.toLowerCase());
    for (var i = 0; i < 40; i++ ) {
        if ((parseInt(addressHash[i], 16) > 7 && address[i].toUpperCase() !== address[i]) || (parseInt(addressHash[i], 16) <= 7 && address[i].toLowerCase() !== address[i])) {
            return { error: 'This Ethereum address is invalid.',validAddress:false};
        }
    }
   return {validAddress:true};
}

let  isAddress =  function  (address) {

    if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
        return  { error: 'Address must start with 0x and should be of 40 characters long',validAddress:false};

    } else if (/^(0x)?[0-9a-f]{40}$/.test(address) || /^(0x)?[0-9A-F]{40}$/.test(address) || /^(0X)?[0-9A-F]{40}$/.test(address)) {
        return  {error: 'Address is not in a checksummed format because it is all either lowercased or uppercased.',validAddress:false};
    } else {
        return isChecksumAddress(address);
    }
};

export  default isAddress;