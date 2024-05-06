import { Header } from "./components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown } from "@fortawesome/free-regular-svg-icons";
import { editButtonStyle } from "./page";


export default function Home() {
    return (
        <main className="">
            <Header />
            <div>
                <div className="m-16 flex space-x-16">
                    <div className="w-1/2">
                        <div className="w-full h-96 bg-gray-100 rounded-lg">
                        </div>
                    </div>
                    <div className="w-1/2 space-y-4">
                        <h1 className="text-2xl font-bold">Plush toys for babies</h1>
                        <p className="">
                            Ideal age 1 to 2 years, helps develop social & emotional growth, adorable soft
                            toy with realistic eyes.
                        </p>
                        <div className="flex justify-between">
                            <div className="text-2xl font-bold">
                                <span className="text-gray-500">$</span>25.60
                            </div>
                            <div className="space-x-2">
                                <span>Qtv:</span>
                                <button className={editButtonStyle}>-</button>
                                <span>1</span>
                                <button className={editButtonStyle}>+</button>
                            </div>
                        </div>
                        <div className="space-x-4 flex">
                            <button className="w-1/2 bg-black text-white py-2 rounded-md text-sm">
                                Buy Now
                            </button>
                            <button className="w-1/2 rounded-md text-sm border">Add to Cart</button>
                        </div>
                        <div className="mt-6">
                            <h2 className="font-bold">Delivery options</h2>
                            <ul>
                                <li>
                                    <FontAwesomeIcon icon={faArrowAltCircleDown} size={24} />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
