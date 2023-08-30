"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./login.css"
function Login() {
    const router = useRouter();
    const navigate = (page) => {
        router.push("/login/"+page);
    }
    return (
        <div>
            <h1>Login Page</h1>
            <Link href={"/"} >Go to Home</Link>
            <button onClick={()=>navigate("loginstudent")}>Go to Student Login</button>
            <button onClick={()=>navigate("logincollege")}>Go to College Login</button>

        </div>
    );
}


export default Login;