import Logo from "@/assets/logo";
import { Link } from "react-router";
import { ModeToggle } from "../mode-toggler";


const Navbar = () => {
    return (
        <nav className='max-w-7xl mx-auto  h-16 gap-3 px-5'>
           <div className=" flex justify-around mb-6 text-center font-bold">
<div><Link to="/" className="mr-4"> User</Link>
<Link to="/tasks" className="mr-4"> Task</Link>
<Link to="/todo" className="mr-4"> ToDO</Link>
</div>
<div>
                <ModeToggle></ModeToggle>
            </div>
           </div>
            <div className='flex items-center'>
                <Logo></Logo> <p className="text-sky-600 font-bold"><span className="font-bold ml-2 text-yellow-500">ToDo</span> App Master</p>    
            </div>
            
        </nav>
    );
};

export default Navbar;

