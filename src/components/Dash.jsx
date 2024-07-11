// import "../styles/dashboard.css";
import Contact from "./Contact";
const Dash = () => {
    return (
        <>
            <div className="bg-white">
                <header className="bg-[#fbfbfb] dark:bg-[#080808] text-[#444444] dark:text-[#d4d4d4] border-b text-center py-12">
                    <h1 className="text-4xl font-bold mt-16">Welcome to microWorld</h1>
                </header>
                <section className="text-center py-12 px-4 bg-white dark:bg-[#080808] text-[#444444] dark:text-[#d4d4d4]">
                    <h2 className="text-2xl font-bold">Store specialized in technological products from recognized brands such as Tesla, Nvidia, Intel and IBM. located in Puntarenas and Santa Ana.</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 mt-8 animate-fadeIn">
                        <div className="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
                            <h3 className="text-xl font-bold">Phone Number</h3>
                            <p className="text-gray-700 mt-2">+506 1234-5678</p>
                        </div>
                        <div className="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
                            <h3 className="text-xl font-bold">Email</h3>
                            <p className="text-gray-700 mt-2">info@microworld.com</p>
                        </div>
                    </div>
                </section>
                <section className="bg-gray-100 py-12 px-4 bg-[#fbfbfb] dark:bg-[#080808] text-[#444444] dark:text-[#d4d4d4]">
                    <h2 className="text-2xl font-bold text-center">Send Us A Message</h2>
                   
                </section>
                <Contact />

            </div>
        </>
    );
};

export default Dash;





