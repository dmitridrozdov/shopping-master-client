const formatDate = (date) => {
    const d = new Date(date)
    const month = `${d.getMonth() + 1}`
    const day = `${d.getDay()}`
    const year = d.getFullYear()

    const normalizedMonth = month.length === 1 ? `0${month}` : month
    const normalizedDay = day.length === 1 ? `0${day}` : day
    return [year, normalizedMonth, normalizedDay].join('-')
}

export default formatDate;