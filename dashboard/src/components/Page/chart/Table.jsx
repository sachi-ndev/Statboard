import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Table() {
  const [table, setTable] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/table")
      .then((res) => setTable(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(table);

  return (
    <>
      <div className=" flex flex-col">
        <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-white border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Id
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Quantity
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Price
                    </th>
                  </tr>
                </thead>



                     {
                        table.map(e=>(
                            <tbody>
               
                            <tr className="bg-gray-100 border-b">
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {e.id}
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {e.name}
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {e.quantity}
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                @{e.price}
                              </td>
                            </tr>
            
            
                
                  
                          </tbody>
                        ))
                    }

              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
