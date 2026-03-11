import React from 'react'

export default function DashboadLayout({ children }) {
    return (
        <div>

            <div className='grid grid-cols-12'>
                {/* side nav */}
                <div className='col-span-3 border-r p-4'>
                    <ul>
                        <li>User list</li>
                        <li>Settings</li>
                    </ul>
                </div>
                <div className='col-span-9 p-4'>
                    {/* dashboard content */}
                    {children}
                </div>
            </div>
        </div>
    )
}
