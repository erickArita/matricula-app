import { storage } from '../firebase/firebaseConfig'
import { uid } from 'rand-token';
import Swal from 'sweetalert2';

const token = uid(6);
export const uploadFile = (file, handleinputFile) => {
     
    const refStorange = storage.ref(`students/${token}/${file.name}`)

    const task = refStorange.put(file)

    task.on(
        'state_changed',
        snapshot => {

            const progress = snapshot.bytesTransferred / snapshot.totalBytes * 100
         
            Swal.fire({

                title: 'Subiendo ',
                text: `Espere un momento ${progress}%`,

                allowOutsideClick: false,
                onBeforeOpen: () => {
                    Swal.showLoading()
                }
            })



        },
        err => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Ocurrio un error en la carga del archivo',
                footer: 'Verifica tu conexión'
            });
        },
        async () => {
            Swal.close()

            const url = await task.snapshot.ref.getDownloadURL();
           
          
            handleinputFile(url)
            Swal.fire({

                icon: 'success',
                title: 'Archivo guardado',
                showConfirmButton: false,
                timer: 1500
            })
        }
    )


}
