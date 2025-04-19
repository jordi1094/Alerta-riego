"use client";
import { ChangeEvent, useState, FormEvent } from "react";
import Image from "next/image";
import Modals from "./ui/modals";
import FormInput from "./ui/formInput";

export default function AddPlantForm() {
  const [isOpen, setIsopen] = useState(false);
  const [formData, setFormData] = useState({
    Name:"",
    Pin:"",
    Room:""
  })

  const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
    const {name, value } = event.target
    setFormData((prev) =>( {...prev, [name]: value}))
  }

  const handleSubmit = (event:FormEvent) => {
    event.preventDefault()
    console.log(formData)
    //TODO save Data
    setFormData({
      Name:"",
      Pin:"",
      Room:""
    })
    setIsopen(false)

  }

  return (
    <div>
      <div
        onClick={() => setIsopen(true)}
        className="cursor-pointer flex w-32 h-8 justify-between items-center p-2 border-[1px] border-gray-400 rounded-md"
      >
        <Image
          src={"/icons/plant.svg"}
          alt="Add plant Icon"
          width={20}
          height={20}
        />
        <p className="text-ce">Add plant</p>
      </div>
      <Modals isOpen={isOpen} onClose={() => setIsopen(false)}>
        <div className="bg-white rounded-md px-4 md:py-4">
          <div className="flex justify-between pb-4">
            <h3 className="font-bold text-lg">Add new Plant</h3>
            <Image
              src={"/icons/close.svg"}
              alt="Close Icon"
              width={20}
              height={20}
              onClick={() => setIsopen(false)}
            />
          </div>
          <form 
            className="flex flex-col gap-2"
            onSubmit={handleSubmit}
          >
            <FormInput
              className="justify-end"
              id="Plant Name"
              name="Plant Name"
              required={true}
              onChange={handleChange}
            />
            <FormInput
              className="justify-end"
              id="Pin"
              name="Pin"
              required={true}
              onChange={handleChange}
            />
            <FormInput
              className="justify-end"
              id="Room"
              name="Room"
              required={true}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="self-end border-[1px] border-gray-400 px-2 py-1 rounded-md"
            >
              Add plant
            </button>
          </form>
        </div>
      </Modals>
    </div>
  );
}
