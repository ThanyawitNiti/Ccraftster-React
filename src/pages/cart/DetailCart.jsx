import React from 'react'

export default function DetailCart({amount,name,price,photo}) {
  return (
    <tbody>
            {/* row 1 */}
            <tr>
              <th className='w-20 h-20'>
                <img src={photo}/>
              </th>
              <td>{name}</td>
              <td>{price}</td>
              <td>{amount}</td>
            </tr>
           
          </tbody>
  )
}
