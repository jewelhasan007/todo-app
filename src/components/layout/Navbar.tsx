import Logo from "@/assets/logo";


const Navbar = () => {
    return (
        <nav className='max-w-7xl mx-auto h-16 flex items-center gap-3 px-5'>
            <div className='flex items-center'>
                <Logo></Logo> <p className="text-sky-600 font-bold"><span className="font-bold ml-2 text-yellow-500">ToDo</span> App Master
</p>
            </div>
            
        </nav>
    );
};

export default Navbar;

