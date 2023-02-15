import axios from 'axios';
import Joi from 'joi';
import  {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import style from "./Login.module.css";


export default function Login({getUserData}) {


  const navigate = useNavigate();
  const [joiError, setJoiError] = useState([])
  const [apiError, setApiError] = useState("");
  const [loading , setLoading] = useState(false)
  const [user, setUser] = useState({email : "", password : ""})


  const getData = (e) => {
    let myUser = {...user};
   myUser[e.target.name] = e.target.value;
   setUser(myUser)
  }

  const login = async (e) => {
    e.preventDefault();
    setLoading(true)
    let check = validateForm()
    
    if(check.error){
      setLoading(false)
      setJoiError(check.error.details);
    }
    else{
      setJoiError([])
      let {data} = await axios.post(`https://sticky-note-fe.vercel.app/signin`, user);
      
      if(data.message === "success"){
 
        localStorage.setItem("token", data.token)
        setLoading(false)
        getUserData()
        alert("you are loged in successfully")
        navigate("/home")
      }
      else{
        setLoading(false)
        let index = data.message.lastIndexOf(":");
        let mess = data.message.substr(index+1)
        setApiError(mess)
      }
    }
  }

  const validateForm = () => {

    const schema = Joi.object({
      email : Joi.string().email({minDomainSegments : 2, tlds : {allow :["com", "net"]}}).required(),
      password : Joi.string().required().min(3).max(10)
      // password : Joi.string().pattern(/^[a-z][A-Z]{3,8}$/)
    })
    return schema.validate(user, {abortEarly : false})
  }


  return (
    <>
      <div className={`${style.cont} rounded-3 w-50 mx-auto p-3 text-white`}>
        <h2 className='text-center'>Login Now</h2>
        <form onSubmit={login} className='p-3'>
          {joiError.length > 0 ? joiError.map((error, index) =>
          <div key={index} className='alert alert-danger'>{error.message}</div>) : ""}
          {apiError ? <div className="alert alert-danger">{apiError}</div> : ""}
          <div className="item mb-4">
            <label htmlFor="email">Email:</label>
            <input onChange={getData} type="email" className='form-control mt-2 p-1' id='email' placeholder='Email' name='email'/>
          </div>
          <div className="item mb-2">
            <label htmlFor="password">Paswword :</label>
            <input  onChange={getData}type="password" className='form-control mt-2 p-1' id='password' placeholder='Password' name='password'/>
          </div>

          <button className='btn btn-danger mt-3' type='submit'>
            {/* why fontawesome get an error when i call icon and do loading? */}
            {/* <i className="fas fa-spinner fa-spin"></i> */}
            {loading ?  "register": "Login"}
          </button>
        </form>
      </div>
    </>
  )
}
