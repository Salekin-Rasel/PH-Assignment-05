
import logo from '../assets/logo-text.png'

const Nav = () => {
    return (
        <div>
            <nav className='flex justify-between items-center p-4 container mx-auto'>
                <div className='flex items-center'>
                    <img src={logo} alt="Logo" />
                </div>
                <div className='flex space-x-4 font-semibold'>
                    <a className="text-sm  text-pink-600" href="">Home</a>
                    <a className="text-sm text-slate-500 hover:text-pink-600" href="">Technologies</a>
                    <a className="text-sm text-slate-500 hover:text-pink-600" href="">Projects</a>
                    <a className="text-sm text-slate-500 hover:text-pink-600" href="">About</a>
                    <a className="text-sm text-slate-500 hover:text-pink-600" href="">Contact</a>
                </div>
                <div className='flex space-x-4'>
                    <button className=" text-slate-500 hover:text-pink-600" >Sign In</button>
                    <button className="btn btn-secondary rounded-2xl">Sign Up</button>
                </div>
            </nav>
            
        </div>
    );
};

export default Nav;