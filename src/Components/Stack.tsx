import type { ITechnology } from "./Types/Type";

interface StackProps {
    stack: ITechnology[];
    setStack: React.Dispatch<React.SetStateAction<ITechnology[]>>;
}

const Stack = ({ stack, setStack }: StackProps) => {

    const handleRemoveFromStack = (technology: ITechnology) => {
        setStack(stack.filter((item) => item.name !== technology.name));
    }

    const handleClearStack = () => {
        setStack([]);
    }
    return (
        <div>
            {/* head */}
            <div>
                <h1 className="text-3xl font-bold text-black">Your Stack</h1>
                <p className="my-2 text-sm text-gray-500">
                    {stack.length > 0 ? `${stack.length} Technology Selected` : "No technology selected"}
                </p>
            </div>

            {/* selected technologies */}
            <div className="flex flex-col gap-2">
                {stack.map((technology) => (
                    <div key={technology.name} className="flex items-center justify-between rounded-2xl border border-gray-100 p-4 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-4 min-w-0">
                            <img src={technology.icon} alt={technology.name} className="h-10 w-10 flex-shrink-0" />
                            <span className="font-medium text-gray-900 truncate">{technology.name}</span>
                        </div>
                        <button
                            onClick={() => handleRemoveFromStack(technology)}
                            className="flex-shrink-0 rounded-full bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
            {/* clear stack button */}
            {stack.length > 0 && (
                <div className="mt-4">
                    <button
                        onClick={handleClearStack}
                        className="rounded-full bg-gray-500 text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                    >
                        Clear Stack
                    </button>
                </div>
            )}
        </div>
    );
};

export default Stack;