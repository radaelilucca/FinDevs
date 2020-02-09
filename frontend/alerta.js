import Swal from 'sweetalert2'

 await Swal.fire({
   title: 'Invalid Password',
 text: 'Você tem certeza que quer remover o usuário?',
  icon: 'error',  
  confirmButtonColor: '#7159c1',  
   
 })