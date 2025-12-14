import { useState } from 'react'
import { User } from '@repo/types'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const user: User = { id: '1', name: 'Test User', email: 'test@example.com' }

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          User from shared types: {user.name}
        </p>
      </div>
    </>
  )
}

export default App
