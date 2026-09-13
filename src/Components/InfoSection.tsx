import logo from "../assets/logo-text.png";

const InfoSection = () => {
    return (
        <div className="container mx-auto mt-30 grid grid-cols-4 gap-8 p-8">
            {/* dev stack */}
            <div className="flex flex-col gap-2">
                <img src={logo} alt="Logo" className="h-10 w-35" />
                <p className=" text-slate-500">Curated tools, technologies, and resources for developers building modern software.</p>
                <div className="flex gap-4 text-slate-500 font-bold">
                    <a href="https://github.com/" >GitHub</a>
                    <a href="https://x.com/" >Twitter</a>
                    <a href="https://www.linkedin.com/" >LinkedIn</a>
                </div>
            </div>
            {/* product */}
            <div className="flex flex-col  text-slate-500">
                <h2 className="font-bold mb-2">PRODUCT</h2>
                <ul>
                    <li>Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                </ul>
           </div>
            {/* Company */}
            <div className="flex flex-col  text-slate-500">
                <h2 className="font-bold mb-2">COMPANY</h2>
                <ul>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Careers</li>
                </ul>
           </div>
            {/* legal */}
            <div className="flex flex-col  text-slate-500">
                <h2 className="font-bold mb-2">LEGAL</h2>
                <ul>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                    
                </ul>
           </div>
            
        </div>
    );
};


export default InfoSection;