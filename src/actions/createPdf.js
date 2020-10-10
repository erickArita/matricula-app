import { db } from "../firebase/firebaseConfig"
import { types } from "../types/types"
import jsPDF from 'jspdf'
import { unsetLoading } from "./studentsData"
import { date } from "../helers/date"

export const getStudentsToPdf = () => {
    return (dispatch) => {
        const first = db.collection("students")
            .where('registered', '==', true)

        first.get()
            .then((querySnapshop) => {

                const students = querySnapshop.docs.map(data => (data.data()))
                generatePDF(students)
                dispatch(unsetLoading())
            });
    }
}

const generatePDF = (studentsAproved) => {
    const { day, month, year } = date()
    const doc = new jsPDF({
        orientation: 'l',
        unit: 'mm',
        format: 'letter',
        putOnlyUsedFonts: true,
        floatPrecision: 16 // or "smart", default is 16
    });
    studentsAproved.forEach(student => {

        doc.setFontSize(20)
        doc.text(80, 60, 'CONSTANCIA DE MATRÍCULA')

        doc.setFontSize(10)
        doc.text(50, 80, `Los suscritos Director(a) y Secretario(a) del Centro Educativo SUPERACIÓN CASHAPA con código`, { align: 'justify' })
        doc.text(50, 85, `042100062M02,ubicado en el municipio de Santa Rita del departamento de COPÁN, por este medio`, { align: 'justify' })
        doc.text(50, 90, `CERTIFICA QUE: ${student.name} con R. N. E. ${student.numIdentidad} ,se matriculó en este `, { align: 'justify' })
        doc.text(50, 95, `Centro Educativo para realizar estudios en el ${student.grado} grado.`)
        doc.text(50, 105, `Y para los fines que el interesado(a) estime conveniente se le extiende la presente en el municipio de 
Santa Rita a los ${day} del mes de ${month} del ${year}.`)

        doc.text(80, 140, 'Director(a)                                                             Secretario(a)')
        doc.line(70, 135, 107, 135)
        doc.line(150, 135, 185, 135)
        doc.addPage()
    })

    doc.save('matriculados.pdf')
}
export const registeredStudents = (studentsAproved) => ({
    type: types.createPdf,
    payload: studentsAproved
})
export const setLoadingPdf = () => ({
    type: types.setCreatePdf
})

export const unSetLoadingPdf = () => ({
    type: types.unSetCreatePdf
})
