export const storeCookie = (key, value, days) => {
    let expiryDate = new Date ();
    
    days = days || 365;

    expiryDate.setDate(expiryDate.getDate() + days)
    console.log (expiryDate);

    let cookie = document.cookie = key + "=" + value + "; expires=" +expiryDate.toGMTString() + "; path=/";
    console.log(cookie);
    return cookie;
}

export const readCookie = (cookieKey) => {
    const result = new RegExp(`(?<=${cookieKey}=)[^;]*`);
    console.log(result);
    try {
        let cookie = document.cookie.match(result)[0];
        console.log(cookie);
        return cookie;
    } catch (error) {
        console.log("cookie not found")
        return false
    }
}