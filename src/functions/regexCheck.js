export default function regexCheck(type, value) {

    if(!type || !value){
        return
    }

    const birthdayRegex = /^(19|20)\d{2}(\/|-)(0[1-9]|1[1-2])(\/|-)(0[1-9]|[12][0-9]|3[01])$/;
    const firstNameRegex = /^[A-Za-z]+$/;
    const lastNameRegex = /^[A-Za-z]{1}[a-z]+([ ]?[A-Za-z]{1}[a-z]+)?$/;
    const phoneRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const streetAddressRegex = /^[0-9]+ [A-Za-z ]+$/;

    const provinceRegex = /^[A-Za-z\s]+$/;
    const cityRegex = /^[A-Za-z\s]+$/;
    const postalCodeRegex = /^[A-Za-z][0-9][A-Za-z] *[0-9][A-Za-z][0-9]$/i;

    const secretRegex = /^(\W|^)which\sone\??$/;
    const skillTestRegex = /^12$/;

    const listOfRegex = {
        "birthday": birthdayRegex,
        "firstName": firstNameRegex,
        "lastName": lastNameRegex,
        "phone": phoneRegex,
        "email": emailRegex,
        "streetAddress": streetAddressRegex,
        "province": provinceRegex,
        "city": cityRegex,
        "postalCode": postalCodeRegex,
        "secretRegex": secretRegex,
        "skillTest": skillTestRegex
    };

    const inputType = listOfRegex[type];
    const regexTest = inputType.test(value);
    console.log(regexTest);
    console.log("input error check")
    return regexTest;
    // if (type == "birthday" && )

}