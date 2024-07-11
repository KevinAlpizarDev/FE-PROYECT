import React from 'react';

const Footer = () => {
    return (
        <div className='mt-auto'>
            <footer className="footer footer-center w-full py-16 bg-gray-300 text-gray-800">
                <div className="text-center">
                    <p>
                        Copyright © 2024 - 
                        <a className="font-semibold" href="mailto:m.sohanemon@gmail.com">MicroWorld</a>
                    </p>
                    <div className="w-full px-4 mb-2 mx-auto text-center">
                        <div className="text-sm text-gray-500 py-3">
                            Made with <a className="text-gray-800 font-semibold">Material Tailwind</a> by <a className="text-gray-800 font-semibold">Creative Tim</a>.
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;

