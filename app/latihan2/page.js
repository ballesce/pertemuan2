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
            <div className="container mx-auto max-w-[360px]">
                <center><h1 className="text-xl sm:text-2xl font-bold mb-4 text-black">Data Mahasiswa</h1></center>
                <div>
                    {data.map((row, index) => (
                        <div key={index} className="mb-4 p-4 border border-gray-300 bg-white shadow-md rounded-lg text-black">
                            <p><strong>No:</strong> {row.no}</p>
                            <p><strong>NIM:</strong> {row.nim}</p>
                            <p><strong>Nama:</strong> {row.nama}</p>
                            <p><strong>Gender:</strong> {row.gender}</p>
                            <p><strong>Prodi:</strong> {row.prodi}</p>
                            <p><strong>Kelas:</strong> {row.kelas}</p>
                            <p><strong>Semester:</strong> {row.semester}</p>
                            <p><strong>Alamat:</strong> {row.alamat}</p>
                            <p><strong>Hobby:</strong> {row.hobby}</p>
                            <p><strong>Cita-cita:</strong> {row.citaCita}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}