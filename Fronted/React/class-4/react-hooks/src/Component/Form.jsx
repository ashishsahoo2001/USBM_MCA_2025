import React ,{useState} from 'react'

const Form = () => {
  const userArr=JSON.parse(localStorage.getItem('user'))
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleChange = (e) => {
    setUsername(e.target.value)
  };
  const emailChange = (e) => {
      setEmail(e.target.value)
    };
    const passwordChange = (e) => {
      setEmail(e.target.value)
    };
   
const handlesubmit=()=>{
  //console.log('Form submitted');
 // alert(`Username: ${username}, Email: ${email}`);
  let userObj ={
    name: username,
    email: email,
    password: password
  };
  userArr.push(userObj);
  localStorage.setItem('user', JSON.stringify(userArr));
  alert("Successfully Register");
  setUsername('');
  setEmail('');
  setPassword('');
 
 // alert('Form submitted'); // Uncomment this line to show alert message when form is submitted.
};

  console.log(username);
  console.log(email);
  
  
  return (
    <div className='flex justify-center mt-5'>
      <input type="text" placeholder='Username' required 
      value={username}
      onChange={handleChange}
      className='bg-slate-900 text-lime-300'
      />
      <input type="email" 
      placeholder='user@gmail.com' 
      required
      value={email}
      onChange={emailChange}
      className='bg-slate-50 text-orange-400'/>
      <input type="password"  placeholder='user@gmail.com' 
      required
      value={password}
      onChange={passwordChange}
      className='bg-slate-50 text-orange-400' />
      <button className='text-black bg-rose-700' onClick={handlesubmit}> Submit</button>
    </div>
  )
}

export default Form
