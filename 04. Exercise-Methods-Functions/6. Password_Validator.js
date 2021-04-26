function passValidator(password) {
    let isValid = true;
    function passLength(password) {

        if (password.length >= 6 && password.length <= 10) {
            return true;
        }
        else {
            return 'Password must be between 6 and 10 characters';

        }
    }

    function lettersOrDigit(password) {

        for (let i = 0; i < password.length; i++) {
            
            let currentEl = password[i].charCodeAt(0);
            if (currentEl >= 65 && currentEl <= 90 ||
                currentEl >= 97 && currentEl <= 122 ||
                currentEl >= 48 && currentEl <= 57) {
                isValid = true;
            } else {
                
                return 'Password must consist only of letters and digits';
            }
        }
        return isValid;
    }

    function digitCounter(password) {
        let count = 0;

        for (let i = 0; i < password.length; i++) {
            let currentEl = password[i].charCodeAt(0);;
            if (currentEl >= 48 && currentEl <= 57) {
                count++;
            }
        }
        if (count >= 2) {
            isValid = true;
        } else {
            return 'Password must have at least 2 digits';

        }
        return isValid;
    }
    let result = [];
    if (passLength(password) !== true) {
        result.push(passLength(password));
    }
    if (lettersOrDigit(password) !== true) {
        result.push(lettersOrDigit(password))
    }
    if (digitCounter(password) !== true) {
        result.push(digitCounter(password));

    }
    if (passLength(password) === true &&
        lettersOrDigit(password) === true &&
        digitCounter(password) === true) {
        result.push('Password is valid')
    }
    return result.join('\n')
}
console.log(passValidator('logIn'));