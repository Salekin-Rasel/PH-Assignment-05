
const Footer = () => {
    return (
        <div className="container mx-auto flex justify-between my-6">
            <footer className="text-gray-400 p-4">
                <div className="container mx-auto text-center">
                    <p>&copy; {new Date().getFullYear()} Dev Stack. All rights reserved.</p>
                </div>
            </footer>
            <div className="text-gray-400 p-4">
                <div className="container mx-auto text-center flex justify-between gap-4">
                    <p>Privacy</p>
                    <p>Terms</p>
                </div>
            </div>
        </div>
    );
}
            
       

export default Footer;