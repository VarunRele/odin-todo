const getDate = () => {
    let date_ob = new Date()
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();

    return {date_ob, date, month, year}
}

const getCurrentDateAndTime = () => {
    const { date_ob, date, month, year } = getDate()
    let minutes = date_ob.getMinutes();
    let seconds = date_ob.getSeconds();
    let hours = date_ob.getHours();

    return year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds
}

const getCurrentDate = () => {
    const { date, month, year } = getDate()
    return year + "-" + month + "-" + date
}

export {getCurrentDate, getCurrentDateAndTime}