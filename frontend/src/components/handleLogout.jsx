import axios from "axios";

//this handles the logout 
const handleLogout = async(setError, nav)=>{
    try{
      const data = await axios.post("http://localhost:5000/api/logout");
      nav("/login");
      console.log(data);
    }
    catch(err){
      await setError(err);
    }
  }

  export default handleLogout