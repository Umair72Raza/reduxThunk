import React from 'react'
import { useNavigate } from 'react-router-dom'
const HomeComp = () => {
    const navigate = useNavigate();
    
    return (
        <div>
          <h1>Home</h1>
          <button onClick={() => navigate('/TestingRedux')} >Testing</button>
        </div>
      )
    }
export default HomeComp