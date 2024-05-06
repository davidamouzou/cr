/* eslint-disable @next/next/no-img-element */
import Link from "next/link"

const linkStyle = "text-sm text-gray"

export const Header = () => {
    return (
        <div className=" border-b py-2 ">
            <div className="flex mx-5 lg:mx-16 justify-between items-center">
                <div className="text-white bg-black w-6 h-6 p-4 flex justify-center items-center text-lg rounded-md">
                    Cr
                </div>
                <div className="invisible lg:visible space-x-4">
                    <Link className={linkStyle} href={""}>Home</Link>
                    <Link className={linkStyle} href={""}>Collections</Link>
                    <Link className={linkStyle} href={""}>Contact</Link>
                </div>
                <div className="bg-gray-100 rounded-full w-8 h-8">
                    <img
                        src={"https://img.freepik.com/photos-gratuite/fete-dj_23-2151108169.jpg?size=626&ext=jpg&uid=R147442394&ga=GA1.1.1995678328.1713400725"} alt="avatar"
                        className="rounded-full w-full h-full object-cover border-transparent"
                    />
                </div>
            </div>
        </div>
    )
}