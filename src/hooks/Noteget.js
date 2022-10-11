import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { ViewNote } from '../api';


export const Noteget = () => {

  const [get, setget] = useState({
    data: []
  })

  useEffect(() => {
    const eventViewNote = async() => {
        try {
          const {data} =  await ViewNote.get('/notes');
          const { msg } = data
          setget({
            data: msg
          })
        } catch (error) {
          setTimeout(() =>{
              console.log(error);
              Swal.fire('Error al crear la nota', error.response.data.errors.name.msg , 'error');
              return;
          }, 10)
        }
      };
      eventViewNote();
  }, []);

  return {
    get
  }
}


