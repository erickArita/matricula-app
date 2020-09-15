import { db } from "../firebase/firebaseConfig"

export const getStudents = async () => {
    console.log('getStudents')

    const first = db.collection("students")
        .where('date', '==' , '2020')

        // .limit(2);

    const documentSnapshots = await first.get();

    const data =  documentSnapshots.docs.map(doc => (doc.data()))
    return data; 
}