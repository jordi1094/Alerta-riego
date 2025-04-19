import { ChangeEvent } from "react"

type FormInputsProps = {
    id: string
    name: string
    type? : string
    value?: string
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
    required?: boolean
    className?: string
    labelClassName?: string
    inputClassName?: string
}

export default function FormInput ({id, name, type = "text", value, onChange, required = false, className, labelClassName, inputClassName}: FormInputsProps){
    return (
        <div className={`flex gap-3 ${className}`}>
            <label htmlFor={id} className={labelClassName}>{name}</label>
            <input
            id={id}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            required={required}
            className={`${inputClassName} rounded-md border focus:outline-1 focus:outline-gray-700 px-1`}/> 
        </div>
    )
}