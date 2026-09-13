import heroLogo from '../assets/banner-stack.png'

const Hero = () => {
    return (
        <div className="container mx-auto py-8 flex justify-between items-center">
            <div className="grid grid-cols-1 py-4 ">
                <h1 className="text-8xl font-bold py-5">Build Your Ideal 
                    <div className= "block bg-gradient-to-r from-orange-500 via-pink-500 to-violet-700 bg-clip-text text-transparent">Development Stack</div></h1>
                <p className="py-4 max-w-200">Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that
            fits your next project.</p>
            <div className="flex gap-4 py-4">
                <button className="btn btn-active rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 px-5 py-3" >Explore Technologies</button>
                <button className="btn btn-outline">Learn More</button>
            </div>
            </div>

            <div>
                <img src={heroLogo} alt="Hero Logo" className="w-full h-auto" />
            </div>
            
        </div>
    );
};

export default Hero;