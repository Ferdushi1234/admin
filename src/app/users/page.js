"use client";

import Card from "../../components/card";

export default function Reports() {

  if (typeof window !== 'undefined') {
    //here `window` is available
  }
  const columns = ["name", "ID", "sales", "product", "email","status"];

  return (
    <div className="mt-5">
      <Card addtionalStyles={"w-full h-full px-6"}>
        <header className="relative flex items-center justify-between pt-4">
          <div className="text-xl font-bold text-navy-700 dark:text-white">
            Users Analytics
          </div>
    
        </header>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light">
                  <thead className="border-b font-medium dark:border-neutral-500">
                    <tr>
                      {columns.map((col) => (
                        <th scope="col" className="px-6 py-4">
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    
                         
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
