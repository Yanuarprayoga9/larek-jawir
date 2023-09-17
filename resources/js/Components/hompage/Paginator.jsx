import React from 'react'
import { Link } from '@inertiajs/react';
export default function Paginator({ meta }) {
    const prev = meta.links[0].url;
    const next = meta.links[meta.links.length - 1].url;
    const current = meta.current_page;
    return (
        <div className="join">
            {prev && <Link href={prev} className="join-item btn">«</Link>}
            <button className="join-item btn">{current}</button>
            {next && <Link href={next} className="join-item btn">»</Link>}
            
        </div>
    )
}
