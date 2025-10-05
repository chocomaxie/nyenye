    import { UserInfo } from '@/components/user-info';
import { DisableScroll } from '@/components1/disable-scroll';
    import { PlusButton } from '@/components1/plus-button';
    import { XButton } from '@/components1/x-button';
    import AppLayout from '@/layouts/app-layout';
    import { type BreadcrumbItem } from '@/types';
    import { Head, useForm, Link } from '@inertiajs/react';
    import React, { useState } from 'react';
    import { route } from 'ziggy-js';

    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Adoption',
            href: '/adoption',
        },
    ];


    export default function Index({ adoption }: { adoption:any}) {
        const [showModal, setShowModal] = useState(false);

        const { data, setData, post, processing, errors, reset, clearErrors } = useForm({
            pname: '',
            gender: '',
            age: '',
            age_unit: 'months',
            color: '',
            location: '',
            description: '',
            image: null as File | null,
        });

        const handleOpenModal = () => {
            setShowModal(true);
        };

        const handleCloseModal = () => {
            setShowModal(false);
            setData({
                pname: '',
                gender: '',
                age: '',
                color: '',
                age_unit: 'months',
                location: '',
                description: '',
                image: null,
            });
            clearErrors();
        };

        const handleSubmit = (e: React.FormEvent) => {
            e.preventDefault();
            console.log(data);

            post(route('adoption.store'), {
                onSuccess: () => {
                    handleCloseModal();
                    reset();
                    clearErrors();
                    setData({
                        pname: '',
                        gender: '',
                        age: '',
                        age_unit: 'months',
                        color: '',
                        location: '',
                        description: '',
                        image: null,
                    });
                },
            });
        };

        return (
            <AppLayout breadcrumbs={breadcrumbs}>
                <Head title="Adoption" />
                <button onClick={handleOpenModal} className="fixed z-999 right-5 bottom-5 cursor-pointer rounded-full bg-blue-600 p-3 text-gray-100 hover:bg-blue-500 ">
                    <PlusButton />
                </button>

                <DisableScroll showModal={showModal}/>

                {showModal && (
                    <div className='fixed flex items-center justify-center inset-0 z-50 min-h-screen bg-black/10 dark:bg-white/10'>
                        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg z-60 w-[360px] h-[550px] md:h-[640px] overflow-auto md:w-lg text-[13px] font-medium md:text-[16px] dark:bg-black dark:text-white dark:border-white border-black border'>
                        <h2 className='font-bold text-[14px] md:text-[17px]'>Add Pet to Adopt</h2>
                        <button className='cursor-pointer absolute right-1 top-1' onClick={handleCloseModal}>
                            <XButton />
                        </button>
                        <form onSubmit={handleSubmit}>

                            <div className='mt-3 mb-2'>
                                <label htmlFor="pname">Pet name</label>
                                <input className='block w-full rounded-lg border px-3 py-2 border-gray-300' type="text" name='pname' id='pname' value={data.pname} onChange={e => setData('pname', e.target.value)} />
                                {errors.pname && (<p className='text-red-500 text-[10px] md:text-[12px]'>{errors.pname}</p>)}
                            </div>

                            <p className='mt-2'>Gender</p>
                            <div className='flex gap-4'>
                                <label className="inline-flex items-center gap-1"><input type="radio" checked={data.gender === 'male'} name="gender" value="male" onChange={(e)=>setData('gender', e.target.value)} className="h-4 w-4"/> Male</label>
                                <label className="inline-flex items-center gap-1"><input type="radio" checked={data.gender === 'female'} name="gender" value="female" onChange={(e)=>setData('gender', e.target.value)} className="h-4 w-4"/> Female</label>
                            </div>
                            {errors.gender && (<p className='text-red-500 text-[10px] md:text-[12px]'>{errors.gender}</p>)}

                            <div className='flex flex-col mt-1 mb-2'>
                                <label htmlFor="age">Age</label>
                                <div className='flex gap-2'>
                                    <input className='block w-full rounded-lg border px-3 py-2 border-gray-300' type="number" min={1} name='age' id='age' value={data.age} onChange={e => setData('age', e.target.value)} />
                                    <select className='block rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 border-gray-300 focus:ring-blue-600' name="age_unit" id="age_unit" onChange={e => setData('age_unit', e.target.value)} >
                                    <option value="months">months</option>
                                    <option value="years">years</option>
                                    </select>
                                </div>
                                {errors.age && (<p className='text-red-500 text-[10px] md:text-[12px]'>{errors.age}</p>)}
                            </div>

                            <div className='mb-2'>
                                <label htmlFor="color">Color</label>
                                <input className='block w-full rounded-lg border px-3 py-2 border-gray-300' type="text" name='color' id='color' value={data.color} onChange={e => setData('color', e.target.value)} />
                                {errors.color && (<p className='text-red-500 text-[10px] md:text-[12px]'>{errors.color}</p>)}
                            </div>

                            <div className='mb-2'>
                                <label htmlFor="location">Location</label>
                                <input className='block w-full rounded-lg border px-3 py-2 border-gray-300' type="text" name='location' id='location' value={data.location} onChange={e => setData('location', e.target.value)} />
                                {errors.location && (<p className='text-red-500 text-[10px] md:text-[12px]'>{errors.location}</p>)}
                            </div>

                            <label htmlFor="description">Description</label>
                            <div className='mb-2'>
                                <textarea className='block rounded-lg border px-3 py-2 border-gray-300 w-full resize-none' name="description" id="description" rows={3} value={data.description} onChange={e => setData('description', e.target.value)}></textarea>
                                {errors.description && (<p className='text-red-500 text-[10px] md:text-[12px]'>{errors.description}</p>)}
                            </div>

                            <div>
                                <input type="file" id="ImageUpload" accept='image/*' className="block w-full text-[13px] text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 mt-3 md:text-[16px]" onChange={(e) => {if (e.target.files && e.target.files.length > 0) {setData('image', e.target.files[0]); }}} />
                                {errors.image && (<p className='text-red-500 text-[10px] md:text-[12px]'>{errors.image}</p>)}
                            </div>

                            <div className='flex justify-end gap-3'>
                                <button type='button' className='px-3 py-1 bg-white border border-gray-300 text-black rounded-lg cursor-pointer dark:bg-black dark:text-white' onClick={handleCloseModal}>Close</button>
                                <button disabled={processing} className='px-3 py-1 bg-black text-white rounded-lg cursor-pointer dark:text-black dark:bg-white font-semibold' type='submit'>{processing ? 'Posting...' : 'Submit'}</button>
                            </div>
                        </form>
                    </div>
                </div>

                )}

                    {/* Displaying All Adoptable Pets */}
                    <div className="grid grid-cols-1 gap-5 p-4 md:grid-cols-2 lg:grid-cols-3">
                        {adoption.data.map((pet: any) => (
                            <div
                                key={pet.id}
                                className="rounded-lg bg-white dark:bg-black p-4 shadow-lg relative border border-black dark:border-white"
                            >
                                <div className='absolute top-0 right-0 p-2 z-10 text-[10px] md:text-[11px] cursor-default'>
                                    {pet.status === 'adopted' && (
                                        <span className='bg-red-600 text-white  font-bold px-3 py-1 rounded-full shadow-lg'>
                                            ADOPTED
                                        </span>
                                    )}
                                    {pet.status === 'pending' && (
                                        <span className='bg-yellow-600 text-white  font-bold px-3 py-1 rounded-full shadow-lg'>
                                            PENDING
                                        </span>
                                    )}
                                    {pet.status === 'available' && (
                                        <span className='bg-green-600 text-white  font-bold px-3 py-1 rounded-full shadow-lg'>
                                            AVAILABLE
                                        </span>
                                    )}
                                </div>

                                <div>
                                    {/* name of the user that post */}
                                </div>

                                {/* Image wrapper with fixed height */}
                                <div className="flex h-48 w-full items-center justify-center overflow-hidden rounded-lg mt-5 mb-2">
                                    <img
                                        src={pet.image_url}
                                        alt={pet.pname}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className='flex justify-between items-center text-[13px] md:text-[16px] flex-wrap'>
                                    <h2 className='font-bold'>{pet.pname}</h2>
                                    <Link href={route('adoption.show', pet.pname)} className='bg-amber-300 dark:bg-amber-800 rounded-3xl py-1 px-3 font-semibold cursor-pointer hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-black'>About me</Link>
                                </div>
                            </div>
                        ))}
                    </div>
            </AppLayout>
        );
    }
