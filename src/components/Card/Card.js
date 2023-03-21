import React from 'react'
 import './Card.css'

export default function Card(props) {
  return (

    //    <div className='d-flex bg-white  justify-content-between align-items-center p-3 mt-5 border rounded'>
    //         <h4 className='mx-4 bghover'> {props.NameProject} </h4>
    //         <h5 className='mx-4 bghover'> {props.NamePerson}</h5>
    //         <h6 className='mx-4 bghover'> {props.Time} </h6>
    //         <h6 className='mx-4 bghover'> {props.budget} </h6> 
    //         <button className='btn btn-outline-danger p-2 rounded'>Delete</button>      
    //    </div>          
       
        

  
    <tr>
      <th scope="row">{props.hash}</th>
      <td className='text-nowrap p-2'> <i class="fa-solid fa-list-check ms-2" style={{color: "#9ca1ab"}}></i> {props.NameProject} </td>
      <td className='text-nowrap p-2'> <i class="fa-solid fa-user ms-2" style={{color: "#9ca1ab"}} ></i> {props.NamePerson}</td>
      <td className='text-nowrap p-2'> <i class="fa-regular fa-clock ms-2" style={{color: "#9ca1ab"}}></i> منذو   {props.Time} ساعات </td>
      <td className='text-nowrap p-2'><i class="fa-solid fa-money-bill-1-wave ms-2" style={{color:" #9ca1ab"}}></i>{props.budget}</td>
      <td><button className='btn btn-outline-danger p-2 rounded'>Delete</button></td>
    </tr>



       

  )
}
