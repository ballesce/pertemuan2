'use client';
import React from 'react';

export default function DataTable() {
    const data = [
        {
            no: 1,
            nim: '2021010101',
            nama: 'Budi Santoso',
            gender: 'Laki-laki',
            prodi: 'Sistem Informasi',
            kelas: 'A',
            semester: 3,
            alamat: 'Jl. Mawar No. 5',
            hobby: 'Membaca',
            citaCita: 'Software Engineer',
        },
        {
            no: 2,
            nim: '2021010102',
            nama: 'Siti Aisyah',
            gender: 'Perempuan',
            prodi: 'Bisnis Digital',
            kelas: 'B',
            semester: 2,
            alamat: 'Jl. Melati No. 8',
            hobby: 'Menulis',
            citaCita: 'Entrepreneur',
        },
        {
            no: 3,
            nim: '2021010103',
            nama: 'Andi Pratama',
            gender: 'Laki-laki',
            prodi: 'Teknik Informatika',
            kelas: 'C',
            semester: 4,
            alamat: 'Jl. Anggrek No. 12',
            hobby: 'Bermain Game',
            citaCita: 'Data Scientist',
        },
        {
            no: 4,
            nim: '2021010104',
            nama: 'Dewi Lestari',
            gender: 'Perempuan',
            prodi: 'Manajemen',
            kelas: 'A',
            semester: 1,
            alamat: 'Jl. Kenanga No. 7',
            hobby: 'Menari',
            citaCita: 'Manajer Perusahaan',
        },
        {
            no: 5,
            nim: '2021010105',
            nama: 'Eko Wijaya',
            gender: 'Laki-laki',
            prodi: 'Akuntansi',
            kelas: 'B',
            semester: 3,
            alamat: 'Jl. Dahlia No. 9',
            hobby: 'Fotografi',
            citaCita: 'Akuntan Publik',
        },
    ];

    return (
        <div className="bg-gray-100 p-4 sm:p-6 min-h-screen">
            <div className="container mx-auto">
               <center> <h1 className="text-xl sm:text-2xl font-bold mb-4 text-black">Data Mahasiswa</h1></center>
                <div className="overflow-x-auto">
                    <table className="table-auto w-full border-collapse border border-gray-300 bg-white shadow-md rounded-lg text-sm sm:text-base">
                        <thead>
                            <tr className="bg-gray-200 text-black">
                                <th className="border border-gray-300 px-2 sm:px-4 py-2">No</th>
                                <th className="border border-gray-300 px-2 sm:px-4 py-2">NIM</th>
                                <th className="border border-gray-300 px-2 sm:px-4 py-2">Nama</th>
                                <th className="border border-gray-300 px-2 sm:px-4 py-2">Gender</th>
                                <th className="border border-gray-300 px-2 sm:px-4 py-2">Prodi</th>
                                <th className="border border-gray-300 px-2 sm:px-4 py-2">Kelas</th>
                                <th className="border border-gray-300 px-2 sm:px-4 py-2">Semester</th>
                                <th className="border border-gray-300 px-2 sm:px-4 py-2">Alamat</th>
                                <th className="border border-gray-300 px-2 sm:px-4 py-2">Hobby</th>
                                <th className="border border-gray-300 px-2 sm:px-4 py-2">Cita-cita</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row, index) => (
                                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                                    <td className="border border-gray-300 px-2 sm:px-4 py-2 text-center text-black">{row.no}</td>
                                    <td className="border border-gray-300 px-2 sm:px-4 py-2 text-center text-black">{row.nim}</td>
                                    <td className="border border-gray-300 px-2 sm:px-4 py-2 text-black">{row.nama}</td>
                                    <td className="border border-gray-300 px-2 sm:px-4 py-2 text-center text-black">{row.gender}</td>
                                    <td className="border border-gray-300 px-2 sm:px-4 py-2 text-black">{row.prodi}</td>
                                    <td className="border border-gray-300 px-2 sm:px-4 py-2 text-center text-black">{row.kelas}</td>
                                    <td className="border border-gray-300 px-2 sm:px-4 py-2 text-center text-black">{row.semester}</td>
                                    <td className="border border-gray-300 px-2 sm:px-4 py-2 text-black">{row.alamat}</td>
                                    <td className="border border-gray-300 px-2 sm:px-4 py-2 text-black">{row.hobby}</td>
                                    <td className="border border-gray-300 px-2 sm:px-4 py-2 text-black">{row.citaCita}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}