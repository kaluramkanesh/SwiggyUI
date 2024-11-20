import { useEffect, useRef, useState } from "react";
import Card from "./Card";
function OnlineDelivery() {
    const [data, setData] = useState([])
    const componentRef = useRef(null)
    const [isAtTop, setIsAtTop] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (componentRef.current) {
                const rect = componentRef.current.getBoundingClientRect()
                setIsAtTop(rect.top <= 0)
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    const fetchTopRestaurant = async () => {
        const response = await fetch("http://localhost:3000/top/restaurent/chain")
        const apiData = await response.json()
        setData(apiData)
    }
    useEffect(() => {
        fetchTopRestaurant()
    }, [])
    return (
        <div className="max-w-[1200px] mx-auto px-2" ref={componentRef}>

            <div className="flex my-5 items-center justify-between">
                <div className="text-[25px] font-bold">Restaurants with online food delivery in Khandwa</div>
            </div>
            <div className={isAtTop ? 'fixed top-0 z-[9999999] bg-white w-full left-0' : ''}>
                <div className="max-w-[1200px] mx-auto flex my-4 gap-3 border border-red-500 text-slate-700 cursor-pointer">
                    <div className="p-3 rounded-md shadow">Filter</div>
                    <div className="p-3 rounded-md shadow">Short By</div>
                    <div className="p-3 rounded-md shadow">Fast Delivery</div>
                    <div className="p-3 rounded-md shadow">New on Swiggy</div>
                    <div className="p-3 rounded-md shadow">Ratings 4.0+</div>
                    <div className="p-3 rounded-md shadow">Pure Veg</div>
                    <div className="p-3 rounded-md shadow">Offers</div>
                    <div className="p-3 rounded-md shadow">Rs. 300-Rs. 600</div>
                    <div className="p-3 rounded-md shadow">Less than Rs. 300</div>
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {data.map((data, index) => {
                    return <Card {...data} key={index} />
                })}
            </div>
        </div>
    )
}

export default OnlineDelivery