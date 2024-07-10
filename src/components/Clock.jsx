



import React, { useState, useEffect } from 'react';

const Clock = () => {
    const date = new Date();
    const [isDarkMode, setIsDarkMode] = useState(false); // false -> lightmode
    const [dataTime, setDataTime] = useState({
        horas: date.getHours(),
        minutos: date.getMinutes(),
    });

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            const date = new Date();
            setDataTime({
                horas: date.getHours(),
                minutos: date.getMinutes(),
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className='mx-5 border dark:border-b-white/50 dark:border-t-white/50 border-b-white/20 sm:border-t-white/20 shadow-[20px_0_20px_20px] shadow-slate-500/10 dark:shadow-white/20 rounded-lg border-white/20 border-l-white/20 border-r-white/20 sm:shadow-sm lg:rounded-xl lg:shadow-none'>
        <div className='banner-container'>
            <div className='clock-container'>
                <div className={` p-3 py-2 rounded-lg  ${isDarkMode ? 'bg-gray-400': 'bg-black'}`}>


                    <div className={`flex items-center justify-center text-3xl font-bold ${isDarkMode ? 'text-gray-800': 'text-blue-400'}`}>
                        <p>
                            {dataTime.horas < 10 ? `0${dataTime.horas}` : dataTime.horas} : {dataTime.minutos < 10 ? `0${dataTime.minutos}` : dataTime.minutos}
                        </p>
                    </div>


                </div>
                <header className='flex justify-start p-4'>
                    <button onClick={toggleTheme} className='w-6 h-6  dark:bg-red-500 rounded-full'></button>
                </header>
            </div>
        </div>
        </div>
    );
};

export default Clock;
