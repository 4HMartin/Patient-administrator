export default function Error({children}: {children: React.ReactNode}){
    return (
        <p className="text-left my-2 text-red-600 font-bold p-3 uppercase text-sm">
            {children}
        </p>
    )
}