"use client";
import Link from "next/link";
import styles from "./page.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();
  const [name, setName] = useState("Abhishek");
  const navigate=(name)=>{
    router.push(name)
  }
  return (
    <main className={styles.main}>
      <h1>Home Page for {name}</h1>
      <Link href={"/login"}>GO to Login page</Link>
      <br />
      <Link href={"/about"}>GO to About page</Link>
      {/* <button onClick={() => apple()}>Click kMe</button> */}
      <button onClick={()=>navigate("/login")}>Go to Login</button>
      <button onClick={()=>navigate("/about")}>Go to About</button>
    </main>
  );
}

const User = ({ name }) => {
  return (
    <div className={styles.user}>
      <h1>UserName is {name} </h1>
    </div>
  );
};
