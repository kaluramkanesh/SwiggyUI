import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Card from "./Card";
function TopRestaurant() {
    const [data, setData] = useState([])
    const fetchTopRestaurant = async () => {
        const response = await fetch("https://swiggy-api-s-production.up.railway.app/top/restaurent/chain")
        const apiData = await response.json()
        setData(apiData)
    }
    useEffect(() => {
        fetchTopRestaurant()
    }, [])
    return (
        <div className="max-w-[1200px] mx-auto px-2">

            <div className="flex my-5 items-center justify-between">
                <div className="text-[25px] font-bold">Top restaurant chain in Khandwa</div>
                <div className="flex">
                    <div className=" flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 cursor-pointer"><FaArrowLeft /></div>
                    <div className="flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 cursor-pointer"><FaArrowRight /></div>
                </div>
            </div>
            <div className="flex gap-5 overflow-hidden">
                {
                    data.map((data, index) => {
                        return <Card width="w-full md:w-[273px]" {...data} key={index} />
                    })
                }


            </div>
            <hr className="my-3 border-[1px]" />
        </div>



    )
}

export default TopRestaurant