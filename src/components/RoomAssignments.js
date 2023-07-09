import React from 'react'

export default function RoomAssignments() {
  return (
    <div>
      <section id="room-assignments">
    <h2>Room Assignments</h2>
    
    <table>
      <thead>
        <tr>
          <th>Student Name</th>
          <th>Room Number</th>
          <th>Accommodation Type</th>
          <th>Check-In Date</th>
          <th>Check-Out Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John Smith</td>
          <td>101</td>
          <td>Single Room</td>
          <td>2023-06-15</td>
          <td>2024-05-31</td>
        </tr>
        <tr>
          <td>Jane Doe</td>
          <td>202</td>
          <td>Shared Room</td>
          <td>2023-06-18</td>
          <td>2024-06-30</td>
        </tr>
        <tr>
          <td>Michael Johnson</td>
          <td>305</td>
          <td>Dormitory</td>
          <td>2023-07-01</td>
          <td>2024-06-01</td>
        </tr>
       
      </tbody>
    </table>
  </section>
    </div>
  )
}
