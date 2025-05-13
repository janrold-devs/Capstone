"use client";

import React, { useState } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import Header from "@/components/header";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { CirclePlus } from "lucide-react";

const products = [
  { name: "Product 1", code: "#0001", type: "Milktea", price: "₱100", quantity: 44, image: "/images/macbook.png" },
  { name: "Product 2", code: "#0002", type: "Coffee", price: "₱150", quantity: 23, image: "/images/iphone.png" },
  { name: "Product 3", code: "#0003", type: "Frappe", price: "₱215", quantity: 23, image: "/images/keyboard.png" },
];

export default function Page() {
  const [selected, setSelected] = useState([]);
  const allSelected = selected.length === products.length;

  const toggleAll = () => {
    if (allSelected) {
      setSelected([]);
    } else {
      setSelected(products.map((_, index) => index));
    }
  };

  const toggleOne = (index) => {
    setSelected((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar />
      <main className="flex flex-col flex-1 min-h-screen">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-300 w-full bg-gray-100">
          <SidebarTrigger />
          <Header />
        </div>

        {/* Products */}
        <div className="flex-1 bg-[#F4F6FC]">
          <div className="flex justify-between items-center border-b border-gray-300 py-6 px-8">
            <h1 className="font-medium text-lg">Products</h1>
            <button className="ml-4 p-2 bg-[#04B4FC] text-white rounded-md flex cursor-pointer text-sm font-medium">
              <CirclePlus className="h-5 w-5 mr-1" />
              Add New Product
            </button>
          </div>

          {/* Product List */}
          <div className="py-6 px-6">
            <div className="overflow-x-auto">
              {/* Table Header */}
              <div className="grid grid-cols-6 gap-4 bg-gray-200 text-sm text-gray-700 px-4 py-3 rounded-md mb-4">
                <div className="flex items-center col-span-1">
                  <input
                    type="checkbox"
                    className="mr-4"
                    checked={allSelected}
                    onChange={toggleAll}
                  />
                  Name
                </div>
                <div>Code</div>
                <div>Type</div>
                <div>Price</div>
                <div>Quantity</div>
                <div>Image</div>
              </div>

              {/* Product Rows */}
              {products.map((product, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-6 gap-4 items-center bg-gray-100 rounded-md px-4 py-4 mb-4"
                >
                  <div className="flex items-center col-span-1">
                    <input
                      type="checkbox"
                      className="mr-4"
                      checked={selected.includes(idx)}
                      onChange={() => toggleOne(idx)}
                    />
                    {product.name}
                  </div>
                  <div>{product.code}</div>
                  <div>{product.type}</div>
                  <div>{product.price}</div>
                  <div>{product.quantity}</div>
                  <div>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-12 w-12 object-contain rounded-md"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </SidebarProvider>
  );
}
