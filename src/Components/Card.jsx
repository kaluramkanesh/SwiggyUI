import { MdStars } from "react-icons/md";
function Card(props) {
    return (
        <div className={`${props.width} shrink-0 mb-3`}>
            <div className="group h-[182px] rounded-[15px] overflow-hidden relative">
                <img className="group-hover:scale-110 duration-100 object-cover w-full h-full" src={props.image} alt="" />
                <div className="image-overlay absolute inset-0 flex items-end p-2  text-[16px] md:text-[25px] font-bold text-white tracking-tighter">{props.offer}</div>
            </div>
            <div className="mt-3 text-md md:text-xl font-bold">
                {props.title}
            </div>
            <div ><MdStars className="inline text-green-500" />{props.rating} {props.minTime}-{props.maxTime} mins</div>
            <div className="text-slate-700">
                {props.name}<br />
                {props.place}
            </div>
        </div>

    )
}
export default Card