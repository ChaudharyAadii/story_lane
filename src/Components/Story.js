import { useEffect, useState } from 'react';
import './Story.css';
import StoryBox from './StoryBox';

// import './App.css';

function Story() {
  const [form, setForm] = useState({});
  const [users, setUsers] = useState([]);
  const [refresh, setRefresh] = useState(false);


  const handleChange = (e) => {
    console.log(e.target.value, e.target.name);
    setForm({
      ...form,                          // for destructuring the older values of form.
      [e.target.name]: e.target.value   // this only will remove the older values of form and replace by only new values.
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('https://server--chaudharyaadii.repl.co/demo2', {
    // const response = await fetch('https://server--chaudharyaadii.repl.co/demo2', {
      method: 'POST',
      body: JSON.stringify(form),            // body decides the data to be send
      headers: {                             // it tells the additional information about the data 
        'Content-type': 'application/json'
      }
    })
    const data = await response.json()
    setRefresh(!refresh);
    // console.log(form);
    console.log(data);
    document.getElementById('text1').value = " ";
    document.getElementById('text2').value = " ";
    document.getElementById('text3').value = " ";
    alert('Your response has been submitted successfully');
  }

  const getUsers = async () => {
    const response = await fetch('https://server--chaudharyaadii.repl.co/demo2', {
    // const response = await fetch('https://server--chaudharyaadii.repl.co/demo2', {
      method: 'GET',
    })
    const data = await response.json()
    // console.log(form);
    console.log(data);
    setUsers(data);
  }

  useEffect(() => {
    getUsers();
  }, [refresh])

  return (
    <>
      {/* <form onSubmit={handleSubmit}> */}
      {/* <p>{JSON.stringify(form)}</p>
        <span>Your Stroy : </span>
        <input type="text" name="story" onChange={handleChange} />
        <input type="submit" /> */}

      {/* <div class="group">
        <label>Your Story...</label>
          <input type="text" onChange={handleChange} required />
          <span class="highlight"></span>
          <span class="bar"></span>
          
          <input type="submit" />
        </div> */}
      {/* </form> */}
      <div class="login-box">
        <h2>Enter Story</h2>
        <form onSubmit={handleSubmit}>
          <div class="user-box">
            <input type="text" name="story" id='text1' onChange={handleChange} />
            <label>Your Story....</label>
          </div>
          <div class="user-box">
            <input type="text" name="name" id='text2' onChange={handleChange} />
            <label>Your name....</label>
          </div>
          <div class="user-box">
            <input type="text" name="department" id='text3' onChange={handleChange} />
            <label>Your department..</label>
          </div>
          <input id='submit' type="submit" />
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          {/* <div class="user-box">
            <input type="password" name="" required="" />
              <label>Password</label>
          </div> */}
          {/* <a><input type="submit"/>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a> */}
        </form>
      </div>
      <div className='mainStories'>
        <div className='stories'>
          <StoryBox users={users} />
        </div>
      </div>
    </>
  );
}

export default Story;
