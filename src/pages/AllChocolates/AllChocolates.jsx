import { Link, useLoaderData } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import ChocolateRow from "./ChocolateRow";
import { useState } from "react";

const AllChocolates = () => {

    const [chocolates, setChocolates] = useState(useLoaderData());

    const handleDelete = id => {
        const proceed = confirm('Are sure you want to delete this !');
        if (proceed) {
            fetch(`http://localhost:5000/chocolates/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount === 1) {
                        setChocolates(previousChocolates => {
                            return previousChocolates.filter(chocolate => chocolate._id !== id);
                        })
                    }
                })
                .catch(error => console.log(error))
        }
    }

    return (
        <>
            <Link to='/new' className="flex items-center gap-1 border rounded-md p-2 w-max">
                <AiOutlinePlus />
                New Chocolate
                🍫
            </Link>

            <table className="relative overflow-x-auto w-full text-[#727272] rounded-md my-10">
                <thead className=" text-[#403b37]">
                    <tr>
                        <th className="rounded-l-lg bg-[#e5d2c2] text-left py-5 pl-6">Image</th>
                        <th className="bg-[#e5d2c2] py-5 pl-6 text-left">Name</th>
                        <th className="bg-[#e5d2c2] py-5 pl-6 text-left">Country/Factory</th>
                        <th className="bg-[#e5d2c2] py-5 pl-6 text-left">Category</th>
                        <th className="rounded-r-lg bg-[#e5d2c2] py-5 pl-6 text-left">Action</th>
                    </tr>
                </thead>

                <tbody className="divide-y-2">
                    {chocolates?.map(chocolate => <ChocolateRow
                        key={chocolate._id}
                        chocolate={chocolate}
                        handleDelete={handleDelete}
                    />)}
                </tbody>
            </table>


        </>
    );
};

export default AllChocolates;