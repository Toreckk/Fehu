import { useState } from "react";
import { User } from "@repo/types";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const user: User = { id: "1", name: "Admin User", email: "admin@fehu.com" };

  return (
    <>
      <h1>Fehu Admin</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>Admin Portal - User: {user.name}</p>
      </div>
    </>
  );
}

export default App;
