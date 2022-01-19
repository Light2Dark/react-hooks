export default function Header() {
    return(
        <div>
            <h2 className="text-center text-2xl m-2 font-bold">React Hooks</h2>

            <div className="bg-white max-w-sm mx-auto p-4 rounded flex flex-col shadow-md"> 
                <div className="mb-1">
                    <h3 className="font-bold text-center">useState</h3>
                </div>
                <div className="flex flex-row items-center gap-4">
                    <div className="h-16 w-1/4 bg-red-400 rounded-md flex justify-center items-center">
                        <p className="font-bold">0</p>
                    </div>
                    <div>
                        <h4 className="font-medium">Counter</h4>
                        <p className="text-slate-500">Click the counter!</p>
                    </div>

                </div>
            </div>
        </div>
    )
}