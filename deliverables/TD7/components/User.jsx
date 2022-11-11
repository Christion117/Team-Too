import React from 'react'
import { useState } from 'react'

export default function User() {
  const [userID, setUserID] = useState('')
  const [userHistory, setUserHistory] = useState({})
  
  return (
    <div>User</div>
  )
}
