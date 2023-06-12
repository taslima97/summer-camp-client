import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Item from "./Item";


const InstructorClass = () => {
    const { user } = useAuth();
    const [items, setItems] = useState([])
        useEffect(() => {
            fetch(`http://localhost:5000/classes/${user?.email}`)
                .then(res => res.json())
                .then(data => {
                    setItems(data)
                })
        }, [])
        console.log(items)
        return (
            <div className="grid md:grid-cols-2 w-full">
                {
                items.map(item=><Item key={item._id} item={item}></Item>) 
                }
            </div>
        );
    
};

export default InstructorClass;