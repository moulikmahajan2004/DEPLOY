
import React from 'react'
import './stripe.css'
import { useNavigate } from 'react-router-dom';
import './mainpage'
 
const Jump = () =>
{
  // const navigate = useNavigate();
  // console.log('Jump function is called');
  // navigate('/');
  window.location.href = '/main'; 
}
const Payment = () => {

  return (
   
    <stripe-pricing-table pricing-table-id="prctbl_1O1V2XSDEQySCvaLcW4X9Qcf"
publishable-key="pk_test_51NzT8DSDEQySCvaLfQRkI36xW6gUGjrd7zSLZIttwikfKUGbO8S22RCA1aO4dQJX2HUj8i7CImngXpzg9xyOkrhI000KAftEXS"
onSuccessfulSubscription = {Jump}
>
</stripe-pricing-table>
      
   
  )
}

export default Payment;





