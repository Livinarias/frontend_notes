import Swal from 'sweetalert2';
import { EditNote } from "../api";


const updateNoteApi = async(note) => {
  try {
    const { data } =  await EditNote.update('/edit-note', note);
    console.log(data);
    Swal.fire('Nota Modificada', 'sucess');
  } catch (error) {
    setTimeout(() =>{
        console.log(error);
        Swal.fire('Error al editar la nota', error.response.data.errors.name.msg , 'error');
        return;
    }, 10)
  }
};

export default updateNoteApi;