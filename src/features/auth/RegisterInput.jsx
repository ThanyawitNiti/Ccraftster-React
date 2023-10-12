export default function RegisterInput({
    type ="text",
    placeholder,
    value,
    onChange,
    name
}){
    return(
        <input type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        className="border border-green-400 rounded-sm w-60 h-9"/>

    )
}