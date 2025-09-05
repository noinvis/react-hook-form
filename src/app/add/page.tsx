"use client"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { memo } from "react"

const schema = yup
  .object({
    first_name: yup.string().required("First Name is required"),
    last_name: yup.string().required("Last Name is required"),
    region: yup.string().required("Region is required"),
    gender: yup.string().required("Gender is required")
  })
  .required()


const AddUser = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  
  const onSubmit = async (data: any) => {
  await fetch("https://68ad7902a0b85b2f2cf37bcd.mockapi.io/user", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
  reset()
}



  return (
    <div className="h-[70vh] bg-blue-100 flex items-center">
      <form onSubmit={handleSubmit(onSubmit)} className="w-[500px] border mx-auto p-[30px] bg-[dodgerblue] text-white">
        <p className="text-center text-[24px]">Create User</p>
        <div className="flex flex-col gap-[5px]">
          <label>First Name</label>
          <input {...register("first_name")} className="border outline-0 py-[5px] indent-2.5"/>
          <p className="text-red-500 font-semibold">{errors.first_name?.message}</p>

          <label>Last Name</label>
          <input {...register("last_name")} className="border outline-0 py-[5px] indent-2.5"/>
          <p className="text-red-500 font-semibold">{errors.last_name?.message}</p>

          <label>Region</label>
          <input {...register("region")} className="border outline-0 py-[5px] indent-2.5"/>
          <p className="text-red-500 font-semibold">{errors.region?.message}</p>

          <label>Gender</label>
          <input {...register("gender")} className="border outline-0 py-[5px] indent-2.5"/>
          <p className="text-red-500 font-semibold">{errors.gender?.message}</p>

          <button className="border border-white py-[7px] mt-[10px] cursor-pointer">submit</button>
        </div>
      </form>
    </div>
  )
}
export default memo(AddUser)