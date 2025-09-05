/* eslint-disable prettier/prettier */
import { Link } from 'react-router-dom'


export default function Nav() {
    return (
        <div  style={{height: '100vh', display:"flex" , justifyContent:"center" , alignItems:"center"}}>
            <div style={{width:"100%",backgroundColor:'purple',padding:"200px"}} >
                <div style={{ backgroundColor: "red", padding: "6px", width: "50%", margin: "10px auto" }}>
                    <Link to={'/login'}>login page</Link>
                </div>

                <div style={{ backgroundColor: "yellow", padding: "6px", width: "50%", margin: "10px auto" }}>
                    <Link to={'/register'}>signUp page</Link>
                </div>
                
                <div style={{ backgroundColor: "green", padding: "6px", width: "50%", margin: "10px auto" }}>
                    <Link to={'/auth/email-confirmation'}>email confirmation page</Link>
                </div>

                <div style={{ backgroundColor: "blue", padding: "6px", width: "50%", margin: "10px auto", color:"white" }}>
                    <Link to={'/auth/forgot-password'}>forgot password page</Link>
                </div>
            </div>
        </div>
    )
}
