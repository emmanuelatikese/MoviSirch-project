import axios from "axios";
// This handles the submit event.
const submitHandler = async(e, Url, val, setError, navigate) =>{
  e.preventDefault();

  try{
    const res = await axios.post(Url, val);
    navigate("/home");
    console.log(res);
    

  }
  catch (err){
    setError(err.response.data);
  }
}

export default submitHandler;