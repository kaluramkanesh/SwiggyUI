import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
function Category() {
    const [slide, setSlide] = useState(1)
    const [categories, setCategory] = useState([])
    const fetchCategory = async () => {
        const response = await fetch("http://localhost:3000/images/get/restaurent")
        const data = await response.json()
        // console.log(data)
        setCategory(data)
    }
    const nextSlide = () => {
        console.log(categories.length)
        console.log("slide", slide)
        // Ensure the slide does not exceed the total number of categories
        if (slide + 5 >= categories.length) {
            return setSlide(slide)
        } else {
            setSlide(slide + 5); // Move forward by 5 slides
        }
    }
    const prevSlide = () => {
        // Ensure the slide does not go below the first index
        if (slide - 5 <= 0) {
            setSlide(0); // Reset to the first slide index
        } else {
            setSlide(slide - 5); // Move back by 5 slides
        }
    }
    useEffect(
        () => {
            fetchCategory()
        }
    )
    return (
        <div className="max-w-[1200px] mx-auto px-2">
            <div className="flex my-3 items-center justify-between">
                <div className="text-[25px] font-bold">What's on your mind?</div>
                <div className="flex">
                    <div onClick={prevSlide} className=" flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 cursor-pointer"><FaArrowLeft /></div>
                    <div onClick={nextSlide} className="flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 cursor-pointer"><FaArrowRight /></div>
                </div>
            </div>
            <div className="flex border border-red-600 overflow-hidden">
                {categories.map(
                    (cate, index) => {
                        return (
                            <div style={{ transform: `translateX(-${slide * 100}%)` }} key={index} className="w-[150px] shrink-0 duration-500"><img src={cate.image} alt="loading" /></div>
                        )
                    }
                )}
            </div>
            <hr className="my-4 border-[1px]" />
        </div>
    )
}
export default Category