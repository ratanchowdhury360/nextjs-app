/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function MealSearchInput() {

    const [search, setSearch] = useState('');
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {

        const searchQuery = { search };
        const urlQueryParams = new URLSearchParams(searchQuery);
        const url = `${pathname}?${urlQueryParams}`;

        router.push(url);

    }, [search]);

    return (
        <div>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for meals..."
                className="border p-2 rounded-lg w-full mb-4"
            />
        </div>
    )
}