-- CreateEnum
CREATE TYPE "JenisKelamin" AS ENUM ('MALE', 'FEMALE', 'OTHER');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" VARCHAR(50) NOT NULL,
    "email" TEXT NOT NULL,
    "nama_lengkap" VARCHAR(50),
    "alamat" VARCHAR(255) NOT NULL,
    "no_telp" TEXT NOT NULL,
    "jenis_kelamin" TEXT NOT NULL,
    "tanggal_lahir" DATE,
    "tanggal_gabung" DATE DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User_education_history" (
    "id" SERIAL NOT NULL,
    "pendidikan_terakhir" TEXT NOT NULL,
    "tahun_mulai" TIMESTAMP(3) NOT NULL,
    "tahun_selesai" TIMESTAMP(3) NOT NULL,
    "nilai" DOUBLE PRECISION NOT NULL,
    "organisasi" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "User_education_history_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User_job_history" (
    "id" SERIAL NOT NULL,
    "pekerjaan_terdahulu" TEXT NOT NULL,
    "perusahaan_terdahulu" TEXT NOT NULL,
    "tahun_mulai" TIMESTAMP(3) NOT NULL,
    "tahun_selesai" TIMESTAMP(3) NOT NULL,
    "pengalaman_kerja" TEXT NOT NULL,
    "keahlian" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "User_job_history_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Job_category" (
    "id" SERIAL NOT NULL,
    "nama_kategory" TEXT NOT NULL,
    "jobId" INTEGER NOT NULL,

    CONSTRAINT "Job_category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Job" (
    "id" SERIAL NOT NULL,
    "posisi_pekerjaan" TEXT NOT NULL,
    "deskripsi" TEXT NOT NULL,
    "lokasi" TEXT NOT NULL,
    "gaji" TEXT NOT NULL,
    "jenis_pekerjaan" TEXT NOT NULL,
    "tgl_posting" TIMESTAMP(3) NOT NULL,
    "companyId" INTEGER NOT NULL,

    CONSTRAINT "Job_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Company" (
    "id" SERIAL NOT NULL,
    "nama_perusahaan" TEXT NOT NULL,
    "alamat_perusahaan" TEXT NOT NULL,
    "no_telp_perusahaan" TEXT NOT NULL,
    "deskripsi" TEXT NOT NULL,
    "website" TEXT NOT NULL,
    "tgl_gabung" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Admin" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Application" (
    "id" SERIAL NOT NULL,
    "tgl_pengajuan" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,
    "adminId" INTEGER NOT NULL,

    CONSTRAINT "Application_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User_education_history" ADD CONSTRAINT "User_education_history_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User_job_history" ADD CONSTRAINT "User_job_history_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job_category" ADD CONSTRAINT "Job_category_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "Job"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
