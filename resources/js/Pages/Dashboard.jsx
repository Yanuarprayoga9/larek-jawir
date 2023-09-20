import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

export default function Dashboard({ auth }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const handleSubmit = (e) => {
        const data = {
            title: title,
            description: description,
            category: category
        }
        console.log("data = ", data);
        Inertia.post('/news', data);
    }
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-8 mx-3">
                <div className="bg-white max-w-xl mx-auto py-9 sm:px-6 lg:px-8 rounded-lg">
                    <div className="w-full overflow-hidden shadow-sm sm:rounded-lg grid grid-cols-1 gap-4 content-center">
                        <h1 className='text-2xl text-center'>Tambah data</h1>
                        <input type="text" placeholder="Title" className="input input-bordered w-full max-w-xs mx-auto" onChange={(e) => { setTitle(e.target.value) }} />
                        <input type="text" placeholder="Description" className="input input-bordered w-full max-w-xs mx-auto" onChange={(e) => { setDescription(e.target.value) }} />
                        <input type="text" placeholder="kategori" className="input input-bordered w-full max-w-xs mx-auto" onChange={(e) => { setCategory(e.target.value) }} />
                        <button className="btn btn-success max-w-xs mx-auto" onClick={() => { handleSubmit() }}>Success</button>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
