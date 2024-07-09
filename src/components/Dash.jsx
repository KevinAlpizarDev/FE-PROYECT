
import React from 'react'
import "../styles/dashboard.css"

const Dash = () => {
    return (
        <div>
            <div class="antialiased bg-text w-full min-h-screen text-slate-300 relative py-4">
                <div class="grid grid-cols-12  gap-2 sm:gap-4   xl:gap-14 max-w-7xl my-10 px-2">
                
                    <div id="content" class="bg-white dark:bg-[#080808] col-span-full w-full rounded-lg p-6 ">
                        <div id="24h">
                            <h1 class="font-bold py-4 uppercase">Last 24h Statistics</h1>
                            <div id="stats" class="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div class="bg-[#fbfbfb] dark:bg-white/10 to-white/5 p-6 rounded-lg border">
                                    <div class="flex flex-row space-x-4 items-center">
                                        <div id="stats-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-white">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p class="text-indigo-300 text-sm font-medium uppercase leading-4">Users</p>
                                            <p class="text-white font-bold text-2xl inline-flex items-center space-x-2">
                                                <span>+28</span>
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                                                    </svg>

                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="bg-white/10 p-6 rounded-lg">
                                    <div class="flex flex-row space-x-4 items-center">
                                        <div id="stats-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-white">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>

                                        </div>
                                        <div>
                                            <p class="text-teal-300 text-sm font-medium uppercase leading-4">Income</p>
                                            <p class="text-white font-bold text-2xl inline-flex items-center space-x-2">
                                                <span>$2,873.88</span>
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                                                    </svg>

                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="bg-[#080808]  p-6 rounded-lg">
                                    <div class="flex flex-row space-x-4 items-center">
                                        <div id="stats-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-white">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                            </svg>

                                        </div>
                                        <div>
                                            <p class="text-blue-300 text-sm font-medium uppercase leading-4">Invoices</p>
                                            <p class="text-white font-bold text-2xl inline-flex items-center space-x-2">
                                                <span>+79</span>
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                                                    </svg>

                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="last-incomes">
                            <h1 class="font-bold py-4 uppercase">Last 24h incomes</h1>
                            <div id="stats" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                <div class="bg-[#080808]  to-white/5 rounded-lg">
                                    <div class="flex flex-row items-center">
                                        <div class="text-3xl p-4">💰</div>
                                        <div class="p-2">
                                            <p class="text-xl font-bold">348$</p>
                                            <p class="text-gray-500 font-medium">Amber Gates</p>
                                            <p class="text-gray-500 text-sm">24 Nov 2022</p>
                                        </div>
                                    </div>
                                    <div class="border-t border-white/5 p-4">
                                        <a href="#" class="inline-flex space-x-2 items-center text-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                            </svg>
                                            <span>Info</span>
                                        </a>
                                    </div>
                                </div>
                                <div class="bg-[#080808]  to-white/5 rounded-lg">
                                    <div class="flex flex-row items-center">
                                        <div class="text-3xl p-4">💰</div>
                                        <div class="p-2">
                                            <p class="text-xl font-bold">68$</p>
                                            <p class="text-gray-500 font-medium">Maia Kipper</p>
                                            <p class="text-gray-500 text-sm">23 Nov 2022</p>
                                        </div>
                                    </div>
                                    <div class="border-t border-white/5 p-4">
                                        <a href="#" class="inline-flex space-x-2 items-center text-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                            </svg>
                                            <span>Info</span>
                                        </a>
                                    </div>
                                </div>
                                <div class="bg-[#080808]  to-white/5 rounded-lg">
                                    <div class="flex flex-row items-center">
                                        <div class="text-3xl p-4">💰</div>
                                        <div class="p-2">
                                            <p class="text-xl font-bold">12$</p>
                                            <p class="text-gray-500 font-medium">Oprah Milles</p>
                                            <p class="text-gray-500 text-sm">23 Nov 2022</p>
                                        </div>
                                    </div>
                                    <div class="border-t border-white/5 p-4">
                                        <a href="#" class="inline-flex space-x-2 items-center text-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                            </svg>
                                            <span>Info</span>
                                        </a>
                                    </div>
                                </div>
                                {/* <div class="bg-[#080808]  to-white/5 rounded-lg">
                                    <div class="flex flex-row items-center">
                                        <div class="text-3xl p-4">💰</div>
                                        <div class="p-2">
                                            <p class="text-xl font-bold">105$</p>
                                            <p class="text-gray-500 font-medium">Jonny Nite</p>
                                            <p class="text-gray-500 text-sm">23 Nov 2022</p>
                                        </div>
                                    </div>
                                    <div class="border-t border-white/5 p-4">
                                        <a href="#" class="inline-flex space-x-2 items-center text-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                            </svg>
                                            <span>Info</span>
                                        </a>
                                    </div>
                                </div>
                                <div class="bg-[#080808]  to-white/5 rounded-lg">
                                    <div class="flex flex-row items-center">
                                        <div class="text-3xl p-4">💰</div>
                                        <div class="p-2">
                                            <p class="text-xl font-bold">52$</p>
                                            <p class="text-gray-500 font-medium">Megane Baile</p>
                                            <p class="text-gray-500 text-sm">22 Nov 2022</p>
                                        </div>
                                    </div>
                                    <div class="border-t border-white/5 p-4">
                                        <a href="#" class="inline-flex space-x-2 items-center text-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                            </svg>
                                            <span>Info</span>
                                        </a>
                                    </div>
                                </div> */}
                                <div class="bg-[#080808]  to-white/5 rounded-lg">
                                    <div class="flex flex-row items-center">
                                        <div class="text-3xl p-4">💰</div>
                                        <div class="p-2">
                                            <p class="text-xl font-bold">28$</p>
                                            <p class="text-gray-500 font-medium">Tony Ankel</p>
                                            <p class="text-gray-500 text-sm">22 Nov 2022</p>
                                        </div>
                                    </div>
                                    <div class="border-t border-white/5 p-4">
                                        <a href="#" class="inline-flex space-x-2 items-center text-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                            </svg>
                                            <span>Info</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dash







