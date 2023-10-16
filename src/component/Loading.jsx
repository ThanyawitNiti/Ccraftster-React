import {BiLoaderCircle} from 'react-icons/bi'

export default function Loading() {
    return(
        <>
        <div className="fixed inset-0 bg-black opacity-10 z-40"></div>
        <div className="fixed inset-0 z-50">
            <div className="flex items-center justify-center min-h-full">
                <BiLoaderCircle className="fill-violet-500 animate-spin"/>
            </div>
        </div>
        </>
    )
}