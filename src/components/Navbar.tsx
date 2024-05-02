import Link from "next/link";
import { ModeToggle } from "./Mode";
export default function Navbar(){
    return (
        <nav className=" flex justify-between p-4">
            <Link href="/" className="text-lg capitalize dark:text-orange-400">What is My IP Address</Link>
            <ModeToggle/>
        </nav>
    )
}