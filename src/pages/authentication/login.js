import { useEffect, useState } from "react";
import Loading from "../comp/loading";
import LoginLeftbar from "../comp/login-leftbar";

function Login({ navigation }) {
  const [user, setUser] = useState();

  function logout() {
    console.log("logout trigger");
  }

  function login() {
    const options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({'email': 'chris@gmail.com', 'password': '12345'})
    }
    fetch('http://localhost:8000/api/login', options).then(
      response => response.json()
    ).then( data =>
      setUser(data)
    ).catch(error => {
      console.error("Error:", error);
    });
  }

  useEffect(() => {
    login();
  }, [])

  return (
    <div className="bg-slate-700">
        { !user ? (
            <Loading />
        ) : (
          <div className="flex h-screen">
            <LoginLeftbar user={user.user} />
            <div className="w-5/6 bg-white">
            </div>
          </div>

        )}
    </div>
  );
}

export default Login;
