import dayjs from 'dayjs'

export const dateTimeFormater = date => {
    const formatedDate = dayjs(date).format('DD/MM/YYYY HH:mm')
    return formatedDate
}