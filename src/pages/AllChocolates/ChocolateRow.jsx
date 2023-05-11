import { RxCross2 } from "react-icons/rx";
import { BiPencil } from "react-icons/bi";
import { Link } from "react-router-dom";

const ChocolateRow = ({ chocolate, handleDelete }) => {
    const { _id, name, photo, country, category } = chocolate;

    return (
        <tr >
            <td className="pl-6 py-8">
                <img className="w-16 h-16 bg-slate-100 object-contain rounded-md" src={photo} alt="" />
            </td>
            <td className="pl-6 py-8">{name}</td>
            <td className="pl-6 py-8">{country}</td>
            <td className="pl-6 py-8">{category}</td>
            <td className="pl-6 py-8">
                <div className=" text-primary text-xl flex items-center gap-4">
                    <button onClick={() => handleDelete(_id)} className="bg-gradient-to-r from-[#f4e9df] to-[#f9f8f6] p-3 w-min rounded-md">
                        <RxCross2 />
                    </button>

                    <Link to={`/update/${_id}`} className="bg-gradient-to-r from-[#f4e9df] to-[#f9f8f6] p-3 w-min rounded-md">
                        <BiPencil />
                    </Link>
                </div>
            </td>
        </tr>
    );
};

export default ChocolateRow;