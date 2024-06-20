import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const params= useParams()
    return (
        <div>
            I am {useParams.username}
        </div>
    )
}

export default User
