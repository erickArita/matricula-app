import { firestore } from '../firebase/firebaseConfig'

export const calclYears = (edad) => {
    if(!edad){
        return
    }
    const { seconds, nanoseconds } = edad;
    const jsDate = new firestore.Timestamp(seconds, nanoseconds).toDate();

    const now = new Date()

    const oldStudent = now.getFullYear() - jsDate.getFullYear()
 
    return oldStudent;
}