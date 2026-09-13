import { use } from "react";
import type { ITechnology } from "./Types/Type";

interface TechnologySectionProps {
    dataPromise: Promise<ITechnology[]>;
}

const TechnologySection = ({ dataPromise }: TechnologySectionProps) => {
    
    const data = use(dataPromise);

    return (
        <section className="container mx-auto">
            <div className="mx-auto max-w-7xl px-6">
                
                {/* Heading Block  */}
                <div className="my-8 text-left">
                     <h1 className="text-3xl font-bold text-black">
                        Explore the <span className="text-pink-500">Technologies</span>
                    </h1>
                     <p className="my-2 text-sm text-gray-500">
                        Pick one technology per category to build your ideal stack.
                    </p>
                </div>


                {/* Main Cards*/}
                <div className="grid grid-cols-3 gap-2">
                    {data.map((technology) => (
                        <div 
                            key={technology.name} 
                            className="flex flex-col justify-between rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow"
                        >
                            {/*Icon and Badge */}
                            <div className="flex items-center justify-between my-4">
                                <div className="h-10 w-10 flex items-center justify-center">
                                    <img src={technology.icon}  alt={technology.name}  className="h-full w-full object-contain" />
                                </div>
                                <div>
                                <button className="btn btn-soft btn-info rounded-2xl">{technology.badge}</button>

                                </div>
                            </div>

                            {/* Name and Description */}
                            <div className="my-4 flex flex-col gap-2">
                                <h2 className="text-xl font-bold text-black my-2">
                                    {technology.name}
                               </h2>
                                <p className="text-sm text-gray-500">
                                    {technology.description}
                                </p>
                            </div>

                            {/* Category, Difficulty, Rating */}
                            <div className="flex items-center justify-between text-xs font-medium text-gray-500 mb-6">
                                <span className="rounded bg-gray-200 p-1  text-gray-600">
                                    {technology.category}
                                </span>
                                <span>{technology.difficulty}</span>
                                <div className="flex items-center gap-1 font-bold text-black">
                                    <span className="text-yellow-400 text-sm">★</span> 
                                    {technology.rating}
                                </div>
                            </div>

                            {/* addToStack Button */}
                            <button className="w-full rounded-xl bg-black py-3 text-sm font-semibold text-white hover:bg-slate-800 transition-colors ">
                                Add to Stack
                            </button>
                        </div>
                 ))}
                </div>

              </div>
         </section>
    );
};

export default TechnologySection;