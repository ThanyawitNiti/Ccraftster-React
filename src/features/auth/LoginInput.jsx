export default function LoginInput(
    {placeholder,type="text",value,onChange}
){
    return(
        
        <div className="md:w-full">

        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className=" rounded-md px-4 py-3 outline-green-300 border-gray-300 border focus:ring-2 focus:ring-blue-300 focus:border-blue-500"

        />
        </div>
        
    )
}