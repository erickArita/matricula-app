export const handleErrorTraslator = (error) => {
    switch (error) {
        case 'auth/user-not-found':

            return 'Correo No encontrado';
        case 'auth/wrong-password':

            return 'Contraseña incorrecta';
        case 'auth/email-already-in-use':

            return 'Email en uso';

        default:
            return 'usuario no existente';
    }
}