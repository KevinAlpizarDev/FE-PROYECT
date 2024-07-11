import "../styles/dashboard.css";

const Dash = () => {
    return (
        <>
            <div className="bg-white">
                <header className="bg-[#fbfbfb] dark:bg-[#080808] text-[#444444] dark:text-[#d4d4d4] border-b text-center py-12">
                    <h1 className="text-4xl font-bold mt-16">Welcome to microWorld</h1>
                </header>
                <section className="text-center py-12 px-4 bg-white dark:bg-[#080808] text-[#444444] dark:text-[#d4d4d4]">
                    <h2 className="text-2xl font-bold">Store specializing in technology products from recognized brands such as Tesla, Nvidia, Intel, and IBM. We are here to help you with any questions you may have.</h2>
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
                    <form className="max-w-2xl mx-auto mt-8 space-y-8">
                        <div>
                            <label htmlFor="name" className="block text-gray-700 font-bold">Name</label>
                            <input type="text" id="name" className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-700 font-bold">Email</label>
                            <input type="email" id="email" className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-gray-700 font-bold">Message</label>
                            <textarea id="message" rows="5" className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-green-700 text-white py-3 rounded-lg shadow-lg hover:bg-green-600 transition-colors">Send Message</button>
                    </form>
                </section>
            </div>
        </>
    );
};

export default Dash;





