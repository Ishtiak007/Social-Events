import { useEffect, useState } from "react";
import Category from "./Category";

const AllCategories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then((res) => res.json())
            .then((data) => setCategories(data));
    }, [])
    return (
        <div>
            <h1 className="text-center text-3xl font-semibold my-12">Our Services</h1>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 justify-center gap-5 p-2">
                {
                    categories.map(category => <Category key={category.id} category={category}></Category>)
                }
            </div>
        </div>
    );
};

export default AllCategories;