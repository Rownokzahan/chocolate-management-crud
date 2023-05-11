import { BiLeftArrowAlt } from "react-icons/bi";
import { Link, useLoaderData } from "react-router-dom";

const UpdateChocolate = () => {

    const { _id,name, photo, country, category } = useLoaderData();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const country = form.country.value;
        const category = form.category.value;
        const updateChocolate = { name, photo, country, category };

        fetch(`http://localhost:5000/chocolates/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateChocolate)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    form.reset();
                    alert("Chololate Updated !");
                }
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            <Link to='/' className="flex items-center gap-1 font-medium">
                <BiLeftArrowAlt />
                All Chocolates
                🍫
            </Link>
            <hr className="my-8 border-b-[1px]" />

            <div className="bg-gray-200 py-12 mb-12 px-20 rounded-md">
                <h3 className="text-center font-semibold text-2xl">Update Chocolate</h3>
                <p className="text-center text-gray-600 mt-2 mb-12">Use the below form to update the chocolate</p>

                <form onSubmit={handleSubmit}>
                    <div className="mb-8 flex flex-col gap-4">
                        <label htmlFor="name">Name</label>
                        <input className="p-5 rounded-md" type="text" name="name" id="name" defaultValue={name} placeholder="Hot Pink Chocolate" required />
                    </div>
                    <div className="mb-8 flex flex-col gap-4">
                        <label htmlFor="photo">Photo Url</label>
                        <input className="p-5 rounded-md" type="text" name="photo" id="photo" defaultValue={photo} placeholder="Enter Photo Url" required />
                    </div>
                    <div className="mb-8 flex flex-col gap-4">
                        <label htmlFor="country">Country</label>
                        <input className="p-5 rounded-md" type="text" name="country" id="country" defaultValue={country} placeholder="Enter Country Name" required />
                    </div>
                    <div className="mb-8 flex flex-col gap-4">
                        <label htmlFor="category">Category</label>
                        <select name="category" id="category" className="p-5 rounded-md" defaultValue={category} placeholder="Choose A Category" required>
                            <option value="Dark">Dark Chocolate</option>
                            <option value="Milk">Milk Chocolate</option>
                            <option value="Organic">Organic Chocolate</option>
                        </select>
                    </div>

                    <button type="submit" className="bg-primary w-full p-4 font-semibold text-white rounded-md">Update</button>
                </form>
            </div>
        </>
    );
};

export default UpdateChocolate;