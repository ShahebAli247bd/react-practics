import React, { useState, useEffect } from "react";

const ShoppingList = () => {
      const [list, setList] = useState([]);
      const [formData, setFormData] = useState({id:"", item: "", qty: "", price: "" })
      
      const handleInput = (e) => {
            const { name, value } = e.target;
          setFormData((prev) => ({
                ...prev,
                [name]: value,
          }));
      };
      console.log(list);
      useEffect(() => {
         
            const storedData = localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : []
            setList(storedData)
             
            
       },[])

     

      const editHandler = (id) => {
            const findOne = list.find((ls) => ls.id == id)
            setFormData(findOne);
           
      }

      const deleteHandler = (id) => {
            const newList = list.filter(ls =>  ls.id != id )
            setList(newList)
             localStorage.setItem("list", JSON.stringify(newList));
      }
      const handleSubmit = () => {
           if (formData.item && formData.qty && formData.price) {
               let updatedList;

               if (formData.id) {
                   // Edit existing item
                   updatedList = list.map((ls) =>
                       ls.id === formData.id
                           ? {
                                 ...ls,
                                 item: formData.item,
                                 qty: formData.qty,
                                 price: formData.price,
                             }
                           : ls
                   );
               } else {
                   // Add new item
                   updatedList = [...list, { ...formData, id: Date.now() }];
               }

               setList(updatedList); // Update state
               localStorage.setItem("list", JSON.stringify(updatedList)); // Save to localStorage
               setFormData({ item: "", qty: "", price: "" }); // Reset form fields
           } else {
               alert("Please fill in all fields.");
           }
      }
 
    return (
        <div>
            <div className="flex flex-col mb-4">
                <label>Item: </label>
                <input
                    type="text"
                    name="item"
                    value={formData.item}
                    onChange={handleInput}
                    className="border-b mb-2"
                />
                <label>Quantity:</label>
                <input
                    type="text"
                    name="qty"
                    value={formData.qty}
                    onChange={handleInput}
                    className="border-b mb-2"
                />
                <label>Price:</label>
                <input
                    type="text"
                    name="price"
                    value={formData.price}
                    onChange={handleInput}
                    className="border-b mb-2"
                />
                <button
                    type="submit"
                    onClick={handleSubmit}
                    className="bg-blue-500 text-white p-2"
                >
                    Add to List
                </button>
            </div>

            <div>
                <h2>Shopping List</h2>

                {list.map((ls, index) => (
                    <ul key={ls.id} className="flex gap-4">
                        <li>{ls.id}</li>
                        <li>{ls.item}</li>
                        <li>{ls.qty}</li>
                        <li>{ls.price}</li>
                        <li id={ls.id} onClick={() => editHandler(ls.id)}>
                            edit
                        </li>
                        <li id={ls.id} onClick={() => deleteHandler(ls.id)}>
                            delete
                        </li>
                    </ul>
                ))}
            </div>
        </div>
    );
};

export default ShoppingList;
