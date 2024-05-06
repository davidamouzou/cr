"use client"
/* eslint-disable @next/next/no-img-element */
import { Header } from "./components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuysellads, faYammer } from "@fortawesome/free-brands-svg-icons";
import { faCar, faCartPlus, faLongArrowRight, faMoneyBill1Wave, faPerson, faRoad } from "@fortawesome/free-solid-svg-icons";
import { faCcAmazonPay } from "@fortawesome/free-brands-svg-icons/faCcAmazonPay";
import { useState } from "react";
import { listJouetsImages } from "./data/ListJouetsImages";

export default function Home() {
  const [imgSelected, setImgSelected] = useState(listJouetsImages[0])

  // Style class
  const containerStyle = "w-1/4 h-20 lg:h-28 bg-gray-100 rounded-lg overflow-hidden"
  const editButtonStyle = "px-3 py-1 rounded-md bg-gray-100"

  return (
    <main className="">
      <Header />
      <div>
        <div className="lg:m-16 p-5">
          <div className="text-sm text-gray-500 mb-8 space-x-2">
            <span>Home</span>
            <span>/</span>
            <span>Trending</span>
            <span>/</span>
            <span className="text-black">Plush toys for babies</span>
          </div>
          <div className="lg:flex lg:space-x-16 lg:p-0 lg:space-y-0 space-y-5">
            <div className="lg:w-1/2">
              <div className="w-full lg:h-96 h-64 bg-gray-100 rounded-lg  overflow-hidden">
                <img src={imgSelected} alt={imgSelected} className="w-full h-full object-cover" />
              </div>
              <div className="mt-2 flex space-x-2">
                {
                  listJouetsImages.map(item => (
                    <button
                      onClick={() => setImgSelected(item)}
                      className={imgSelected == item ? containerStyle + " border-2 p-1 border-black" : containerStyle} key={item}>
                      <img className="w-full h-full object-cover rounded-md" src={item} alt={item} />
                    </button>
                  ))
                }
              </div>
              <ul className="mt-6 *:p-2 *:rounded-md *:text-sm *:text-gray-500 *:bg-gray-100 flex flex-wrap *:mt-2 *:mr-2">
                <li className="flex items-center space-x-1">
                  <FontAwesomeIcon icon={faMoneyBill1Wave} size="6x" className="w-4 h-4" />
                  <span>Value for money</span>
                </li>
                <li className="flex items-center space-x-1">
                  <FontAwesomeIcon icon={faPerson} size="6x" className="w-4 h-4" />
                  <span>1-2yrolds</span>
                </li>
                <li className="flex items-center space-x-1">
                  <FontAwesomeIcon icon={faRoad} size="6x" className="w-4 h-4" />
                  <span>Good for gifting</span>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2 space-y-8">
              <div>
                <h1 className="text-2xl font-bold">Plush toys for babies</h1>
                <p className="mt-4 text-gray-600">
                  Ideal age 1 to 2 years, helps develop social & emotional growth, adorable soft
                  toy with realistic eyes.
                </p>
              </div>
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
              {/* Button container */}
              <div className="space-x-4 flex">
                <button className="w-1/2 bg-black flex justify-center space-x-2 items-center text-white py-2 rounded-md text-sm">
                  <FontAwesomeIcon icon={faBuysellads} size="6x" className="w-4 h-4" />
                  <span>Buy Now</span>
                </button>
                <button className="w-1/2 rounded-md text-sm border flex justify-center space-x-2 items-center">
                  <FontAwesomeIcon icon={faCartPlus} size="6x" className="w-4 h-4" />
                  <span>Add to Cart</span>
                </button>
              </div>
              <div className="mt-6">
                <h2 className="font-bold mb-2">Delivery options</h2>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2 text-sm text-gray-600">
                    <FontAwesomeIcon icon={faCcAmazonPay} size="6x" className="w-4 h-4" />
                    <span>100% Original Products</span>
                  </li>
                  <li className="flex items-center space-x-2 text-sm text-gray-600">
                    <FontAwesomeIcon icon={faCar} size="6x" className="w-4 h-4" />
                    <span>Pay on delivery might be available</span>
                  </li>
                  <li className="flex items-center space-x-2 text-sm text-gray-600">
                    <FontAwesomeIcon icon={faYammer} size="6x" className="w-4 h-4" />
                    <span>Easy 30 days returns</span>
                  </li>
                </ul>
                <div className="border mt-4 w-80 rounded-md flex items-center">
                  <input
                    type="text" name="pincode" placeholder="Enter Pincode" id="pincode"
                    className="w-full px-3 py-2 outline-none ml-1"
                  />
                  <label htmlFor="pincode">
                    <FontAwesomeIcon icon={faLongArrowRight} className="w-4 h-4 mr-3" />
                  </label>
                </div>
                <div className="mt-8">
                  <div className="flex justify-between">
                    <h3 className="font-bold">Product Description</h3>
                    <a href="http://davidamouzou.com" className="text-sm underline">Read more</a>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-500 mt-3 list-disc *:ml-4">
                    <li>Ultra-Portable Soft Toy For Your Child To Bond With On The Go</li>
                    <li>Very Soft Stuffed Toy That Is The Perfect Companion For Your Child</li>
                    <li>{"Intricate Details Develop Your Child's Sense Of Touch"}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}