import {FaTimes,FaRegCircle,FaPen} from 'react-icons/fa';

function Icons({name}){
   if(name=="cross"){
     return <FaTimes/>
   }
   else if(name=="circle"){
     return <FaRegCircle/>
   }
   else{
    return <FaPen/>
   }
}

export default Icons