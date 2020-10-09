
export const date = () => {
    const date = new Date()
    const year = date.getFullYear()
    let month = date.getMonth()
    const day = date.getDate()
    switch (month) {
        case 0:
            month = 'Enero'
            break;

        case 1:
            month = 'Febrero'
            break;
        case 2:
            month = 'Marzo'
            break;
        case 3:
            month = 'Abril'
            break;
        case 4:
            month = 'Mayo'
            break;
        case 5:
            month = 'Junio'
            break;
        case 6:
            month = 'Julio'
            break;
        case 7:
            month = 'Agosto'
            break;
        case 8:
            month = 'Septiembre'
            break;
        case 9:
            month = 'Octubre'
            break;
        case 10:
            month = 'Noviembre'
            break;

        case 11:
            month = 'Diciembre'
            break;
    }
    return { year, month, day }

}
