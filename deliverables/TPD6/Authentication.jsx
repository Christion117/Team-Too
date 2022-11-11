import React,{useState} from 'react'


function Authentication() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <div>Authentication
        <form>
            <label>Username</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}></input>
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
            <button onClick={() => {
                if (username === 'admin' && password === 'admin') {
                    setIsAuthenticated(true)
                }
            }}>Login</button>
        </form>
    </div>
  )
}

export default Authentication