
export const generateOTP = () => {
    const otp = Math.floor(1000 + Math.random() * 9000);
    return otp;
}

export const formatPhoneNumber = (unformattedNumber: string) => {
    let number = unformattedNumber;

    if (number.charAt(0) === "0" || number.charAt(0) === "+")
        number = number.substring(1);

    if (number.substring(0, 3) === "255")
        number = number.substring(3);

    return "+255" + number;
}