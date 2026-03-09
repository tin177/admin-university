import React, { useState } from "react";
import { auth, db } from "../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const uid = userCredential.user.uid;

      // get user role from Firestore
      const docRef = doc(db, "admin", uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const role = docSnap.data().role;
        alert("Login Successful!");

        // RBAC Redirect (lowercase paths to match App.jsx)
        if (role === "Superadmin") navigate("/superadmin");
        else if (role === "HRadmin") navigate("/hradmin");
        else if (role === "role3") navigate("/role3");
        else alert("User role not recognized.");
      } else {
        alert("User role not found in Firestore.");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded-lg w-80 flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold text-center">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 rounded"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="bg-green-500 text-white p-2 rounded">Login</button>
      </form>
    </div>
  );
}

export default login;