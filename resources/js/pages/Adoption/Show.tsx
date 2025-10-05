import { Head, Link } from '@inertiajs/react';
import { type BreadcrumbItem } from '@/types';
import { route } from 'ziggy-js';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Adoption',
        href: '/adoption/',
    },
];

export default function Show({ pet }: { pet: any }) {

    return (
            <div className='flex min-h-screen items-center justify-center p-6 leading-normal'>
                <div className='absolute top-5 right-4 p-2 z-10 text-[10px] md:text-[11px] cursor-default'>
                    {pet.status === 'adopted' && ( <span className='bg-red-600 text-white font-bold px-3 py-1 rounded-full shadow-lg'> ADOPTED </span> )}
                    {pet.status === 'pending' && ( <span className='bg-yellow-600 text-white  font-bold px-3 py-1 rounded-full shadow-lg'> PENDING </span> )}
                    {pet.status === 'available' && ( <span className='bg-green-600 text-white  font-bold px-3 py-1 rounded-full shadow-lg'> AVAILABLE </span> )}
                </div>

                <div className='grid w-full  max-w-[1280px] min-h-[700px] grid-cols-1 gap-10 rounded-lg md:grid-cols-2 '>
                    <div className='flex h-full w-full  items-center justify-center rounded-lg shadow-lg bg-gray-300'>
                        <div className='p-4'>
                            <img className='h-full w-full max-h-[500px] rounded-lg object-contain' src={pet.image_url} alt={pet.pname}/>
                        </div>
                    </div>
                    <div className='p-4'>
                        <div className='w-sm flex mt-5'>

                        </div>
                        <h1 className='mt-5 text-4xl font-bold md:text-5xl'>{pet.pname}</h1>
                        <p className='mt-5 text-lg'><span className='font-semibold'>Gender:</span> {pet.gender}</p>
                        <p className='mt-5 text-lg'><span className='font-semibold'>Age:</span> {pet.age} </p>
                        <p className='mt-5 text-lg'><span className='font-semibold'>Color:</span> {pet.color}</p>
                        <p className='mt-5 text-lg'><span className='font-semibold'>Location:</span> {pet.location}</p>
                        <p className='mt-5 text-lg'><span className='font-semibold'>Description:</span> {pet.description}</p>
                        <div className='mt-8'>
                            <Link href={route('adoption.index')} className='inline-block rounded-full bg-violet-600 px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-violet-700 dark:text-white'> Back </Link>
                        </div>
                    </div>
                </div>
            </div>
    );
}
