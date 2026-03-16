import { useState } from "react"
import ManageUser from "./manage_user"

function Homepage() {
     const [page, setPage] = useState("home")

  return (
    <div>

      {/* Navbar */}
      <nav>
        <button onClick={() => setPage("Homepage")}>Home</button>
        <button onClick={() => setPage("manage_user")}>Manage User</button>
      </nav>

      {/* Content */}
      <div>
        {page === "Homepage" && <h1>Welcome Admin</h1>}
        {page === "manage_user" && <ManageUser />}
      </div>

    </div>
  )
}

export default Homepage