import axios from "axios";

//this handler all search request.
const searchHandler = async(setValues, setEmpty, options, setShow, setErr)=>{
  try{
    setValues(null);
    setEmpty(false);
    const res = await axios.request(options);
    const data = res.data.results;
    if (data.length <= 0){
      setEmpty(true);
    }
    else{
      setEmpty(false);
      setValues(data);
    }
    setShow(true);
  }
  catch(err){
    setErr(err);
    setShow(false);
  }
}

export default searchHandler;