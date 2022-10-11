import Swal from 'sweetalert2';
import { CreateNote } from "../api";


const createNoteApi = async(note) => {
  try {
    const { data } =  await CreateNote.post('/new', note);
    console.log(data);
    Swal.fire('Nota Creada', 'sucess');
  } catch (error) {
    setTimeout(() =>{
        console.log(error);
        Swal.fire('Error al crear la nota', error.response.data.errors.name.msg , 'error');
        console.log("paso hasta aca");
        return;
    }, 10)
  }
};

export default createNoteApi;
