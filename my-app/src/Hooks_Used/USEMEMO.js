import React from 'react'

const USEMEMO = () => {
  return (
    <div>
       <form action='' method='post'>
        <div>
            <label htmlFor='name'>Your Name</label>
            <input name="name" id="name" type="text"/>
        </div>

        <div>
            <label htmlFor='email'>Your Email</label>
            <input name="email" id="email" type="email"/>
        </div>

        <div>
            <label htmlFor='password'>Your Message</label>
            <input name="password" id="password" type="password"/>
        </div>
        
        <div>
          <textarea name="textarea" id="textarea" cols="30"
          rows="10"></textarea>
          <br/><br/>
          <button type="submit">Submit</button>
        </div>
       </form>
    </div>
  )
}

export default USEMEMO
