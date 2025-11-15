export function Search({search, setSearch}){
    function handleOnChange(event){
        setSearch(event.target.value)
    }

    return (
        <div className="flex-1 flex justify-center px-4">
            <input
                type="search"
                placeholder="Search games..."
                className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-[#000000]/30 hover:placeholder: text-white transition"
                onChange={handleOnChange}
            />
        </div>
    )
}

export default Search