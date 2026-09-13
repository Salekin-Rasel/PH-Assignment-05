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
            
        </div>
    );
};

export default Stack;