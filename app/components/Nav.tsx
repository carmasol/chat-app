"use client";


import { IoIosHome } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Nav() {

    const router = useRouter();

    const goToDashboard = () => {
        router.push('/dashboard')
    }



    return (
        <nav className="h-[70px] w-full flex justify-between items-center bg-blue-600 p-3">
            <Link href='/'>
                <li className="text-white flex items-center gap-2 p-2 rounded-full hover:text-blue-600 hover:bg-white transition-all">
                    <IoIosHome />
                    <span>Home</span>
                </li>
            </Link>

            <button onClick={goToDashboard} className=" text-white hover:bg-white hover:text-blue-600 p-3 rounded-full transition-all">
                <FaCircleUser/>
            </button>

        </nav>
    )
}