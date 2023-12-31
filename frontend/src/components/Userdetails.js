import React,{useState,useEffect} from 'react'
import Userhome from './Userhome';
import Adminhome from './Adminhome';

const Userdetails = () => {



    const [userData, setUserData] = useState("");
    const [admin, setAdmin] = useState(false);
  
    useEffect(() => {
      fetch("http://localhost:5000/userData", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          token: window.localStorage.getItem("token"),
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userData");
          if (data.data.userType === "Admin") {
            setAdmin(true);
          }
  
          setUserData(data.data);
  
          if (data.data === "token expired") {
            alert("Token expired login again");
            window.localStorage.clear();
            window.location.href = "./sign-in";
          }
        });
    }, []);

  return    admin ? <Adminhome /> : <Userhome userData={userData} />;
}

export default Userdetails