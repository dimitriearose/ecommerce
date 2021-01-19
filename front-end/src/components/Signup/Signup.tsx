import React ,{useState} from 'react'
import validator from 'validator'
import 'Signup.scss'

function Signup() {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    

    const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (password.length >= 7 && validator.isEmail(email)) {
            // Submit
        }
    }

    return (
        <div className="signup">
            <div className="signup__left">
                <h3>Coursify - The Great Information Repository �</h3>
                <p>Upgrade Your Skills 💯</p>
                <p>Scam People With Information You Find Free Online 💯</p>
                <p>Upgrade Your Sex Life 💯</p>
                <p>Break Boundaries with Your Mind 💯</p>
            </div>
            <div className="signup__right">
                <form>
                    <input type="text" name="name"  placeholder="Enter Your Name:" value={name} onChange={(e) => setName(e.target.value)}/>
                    <input type="text" name="email" placeholder="Enter Your Email:" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" name="password" placeholder="Enter Your Password:"value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <button type='submit'>Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default Signup
