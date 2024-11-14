import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCardAtasan from '../components/ProdukAtasan';
import Footer from '../components/Footer';
import WhatsApp from '../components/Whatsapp';

const ProductDetailAtasan = () => {
    const { id } = useParams(); // Mengambil ID dari URL

    // Data produk yang sama seperti di Atasan
    const products = [
        {
            id: 1,
            title: "Inara Dress Lengan Kancing Oversize",
            description: "Bahan Knit Premium Tebal Halus",
            brand: "Inara Dress by Lasovie",
            details: [
                "Lebar Dada: 110 cm",
                "Panjang Baju: 140 cm",
                "Bahan: Knit Premium",
                "Muat BB: 50 kg - 90 kg",
                "Cocok Dipakai: Semua Musim",
                "Gaya Style: Anggun, Manis, Elegan"
            ],
            warranty: "Garansi 100% uang kembali jika barang yang diterima dalam keadaan rusak maupun cacat.",
            shoppingMessage: "Happy shopping! Pintarlah dalam berbelanja ya kak :)",
            imageUrl: "/images/atasan/produk-1.jpeg",
            category: "Atasan",
            buyLink: "../../where-to-buy.html",
            categoryLink: "../../kategori/atasan.html"
        },
        {
            id: 2,
            title: "Inara Dress Lengan Kancing Oversize",
            description: "Bahan Knit Premium Tebal Halus",
            brand: "Inara Dress by Lasovie",
            details: [
                "Lebar Dada: 110 cm",
                "Panjang Baju: 140 cm",
                "Bahan: Knit Premium",
                "Muat BB: 50 kg - 90 kg",
                "Cocok Dipakai: Semua Musim",
                "Gaya Style: Anggun, Manis, Elegan"
            ],
            warranty: "Garansi 100% uang kembali jika barang yang diterima dalam keadaan rusak maupun cacat.",
            shoppingMessage: "Happy shopping! Pintarlah dalam berbelanja ya kak :)",
            imageUrl: "/images/atasan/produk-2.jpeg",
            category: "Atasan",
            buyLink: "../../where-to-buy.html",
            categoryLink: "../../kategori/atasan.html"
        },
        {
            id: 3,
            title: "Inara Dress Lengan Kancing Oversize",
            description: "Bahan Knit Premium Tebal Halus",
            brand: "Inara Dress by Lasovie",
            details: [
                "Lebar Dada: 110 cm",
                "Panjang Baju: 140 cm",
                "Bahan: Knit Premium",
                "Muat BB: 50 kg - 90 kg",
                "Cocok Dipakai: Semua Musim",
                "Gaya Style: Anggun, Manis, Elegan"
            ],
            warranty: "Garansi 100% uang kembali jika barang yang diterima dalam keadaan rusak maupun cacat.",
            shoppingMessage: "Happy shopping! Pintarlah dalam berbelanja ya kak :)",
            imageUrl: "/images/atasan/produk-3.jpeg",
            category: "Atasan",
            buyLink: "../../where-to-buy.html",
            categoryLink: "../../kategori/atasan.html"
        },
        {
            id: 4,
            title: "Inara Dress Lengan Kancing Oversize",
            description: "Bahan Knit Premium Tebal Halus",
            brand: "Inara Dress by Lasovie",
            details: [
                "Lebar Dada: 110 cm",
                "Panjang Baju: 140 cm",
                "Bahan: Knit Premium",
                "Muat BB: 50 kg - 90 kg",
                "Cocok Dipakai: Semua Musim",
                "Gaya Style: Anggun, Manis, Elegan"
            ],
            warranty: "Garansi 100% uang kembali jika barang yang diterima dalam keadaan rusak maupun cacat.",
            shoppingMessage: "Happy shopping! Pintarlah dalam berbelanja ya kak :)",
            imageUrl: "/images/atasan/produk-4.jpeg",
            category: "Atasan",
            buyLink: "../../where-to-buy.html",
            categoryLink: "../../kategori/atasan.html"
        },
        {
            id: 5,
            title: "Inara Dress Lengan Kancing Oversize",
            description: "Bahan Knit Premium Tebal Halus",
            brand: "Inara Dress by Lasovie",
            details: [
                "Lebar Dada: 110 cm",
                "Panjang Baju: 140 cm",
                "Bahan: Knit Premium",
                "Muat BB: 50 kg - 90 kg",
                "Cocok Dipakai: Semua Musim",
                "Gaya Style: Anggun, Manis, Elegan"
            ],
            warranty: "Garansi 100% uang kembali jika barang yang diterima dalam keadaan rusak maupun cacat.",
            shoppingMessage: "Happy shopping! Pintarlah dalam berbelanja ya kak :)",
            imageUrl: "/images/atasan/produk-5.jpeg",
            category: "Atasan",
            buyLink: "../../where-to-buy.html",
            categoryLink: "../../kategori/atasan.html"
        },
        {
            id: 6,
            title: "Inara Dress Lengan Kancing Oversize",
            description: "Bahan Knit Premium Tebal Halus",
            brand: "Inara Dress by Lasovie",
            details: [
                "Lebar Dada: 110 cm",
                "Panjang Baju: 140 cm",
                "Bahan: Knit Premium",
                "Muat BB: 50 kg - 90 kg",
                "Cocok Dipakai: Semua Musim",
                "Gaya Style: Anggun, Manis, Elegan"
            ],
            warranty: "Garansi 100% uang kembali jika barang yang diterima dalam keadaan rusak maupun cacat.",
            shoppingMessage: "Happy shopping! Pintarlah dalam berbelanja ya kak :)",
            imageUrl: "/images/atasan/produk-6.jpeg",
            category: "Atasan",
            buyLink: "../../where-to-buy.html",
            categoryLink: "../../kategori/atasan.html"
        },
        {
            id: 7,
            title: "Inara Dress Lengan Kancing Oversize",
            description: "Bahan Knit Premium Tebal Halus",
            brand: "Inara Dress by Lasovie",
            details: [
                "Lebar Dada: 110 cm",
                "Panjang Baju: 140 cm",
                "Bahan: Knit Premium",
                "Muat BB: 50 kg - 90 kg",
                "Cocok Dipakai: Semua Musim",
                "Gaya Style: Anggun, Manis, Elegan"
            ],
            warranty: "Garansi 100% uang kembali jika barang yang diterima dalam keadaan rusak maupun cacat.",
            shoppingMessage: "Happy shopping! Pintarlah dalam berbelanja ya kak :)",
            imageUrl: "/images/atasan/produk-7.jpeg",
            category: "Atasan",
            buyLink: "../../where-to-buy.html",
            categoryLink: "../../kategori/atasan.html"
        },
        {
            id: 8,
            title: "Inara Dress Lengan Kancing Oversize",
            description: "Bahan Knit Premium Tebal Halus",
            brand: "Inara Dress by Lasovie",
            details: [
                "Lebar Dada: 110 cm",
                "Panjang Baju: 140 cm",
                "Bahan: Knit Premium",
                "Muat BB: 50 kg - 90 kg",
                "Cocok Dipakai: Semua Musim",
                "Gaya Style: Anggun, Manis, Elegan"
            ],
            warranty: "Garansi 100% uang kembali jika barang yang diterima dalam keadaan rusak maupun cacat.",
            shoppingMessage: "Happy shopping! Pintarlah dalam berbelanja ya kak :)",
            imageUrl: "/images/atasan/produk-8.jpeg",
            category: "Atasan",
            buyLink: "../../where-to-buy.html",
            categoryLink: "../../kategori/atasan.html"
        },
        {
            id: 9,
            title: "Inara Dress Lengan Kancing Oversize",
            description: "Bahan Knit Premium Tebal Halus",
            brand: "Inara Dress by Lasovie",
            details: [
                "Lebar Dada: 110 cm",
                "Panjang Baju: 140 cm",
                "Bahan: Knit Premium",
                "Muat BB: 50 kg - 90 kg",
                "Cocok Dipakai: Semua Musim",
                "Gaya Style: Anggun, Manis, Elegan"
            ],
            warranty: "Garansi 100% uang kembali jika barang yang diterima dalam keadaan rusak maupun cacat.",
            shoppingMessage: "Happy shopping! Pintarlah dalam berbelanja ya kak :)",
            imageUrl: "/images/atasan/produk-9.jpeg",
            category: "Atasan",
            buyLink: "../../where-to-buy.html",
            categoryLink: "../../kategori/atasan.html"
        },
        {
            id: 10,
            title: "Inara Dress Lengan Kancing Oversize",
            description: "Bahan Knit Premium Tebal Halus",
            brand: "Inara Dress by Lasovie",
            details: [
                "Lebar Dada: 110 cm",
                "Panjang Baju: 140 cm",
                "Bahan: Knit Premium",
                "Muat BB: 50 kg - 90 kg",
                "Cocok Dipakai: Semua Musim",
                "Gaya Style: Anggun, Manis, Elegan"
            ],
            warranty: "Garansi 100% uang kembali jika barang yang diterima dalam keadaan rusak maupun cacat.",
            shoppingMessage: "Happy shopping! Pintarlah dalam berbelanja ya kak :)",
            imageUrl: "/images/atasan/produk-10.jpeg",
            category: "Atasan",
            buyLink: "../../where-to-buy.html",
            categoryLink: "../../kategori/atasan.html"
        },
        {
            id: 11,
            title: "Inara Dress Lengan Kancing Oversize",
            description: "Bahan Knit Premium Tebal Halus",
            brand: "Inara Dress by Lasovie",
            details: [
                "Lebar Dada: 110 cm",
                "Panjang Baju: 140 cm",
                "Bahan: Knit Premium",
                "Muat BB: 50 kg - 90 kg",
                "Cocok Dipakai: Semua Musim",
                "Gaya Style: Anggun, Manis, Elegan"
            ],
            warranty: "Garansi 100% uang kembali jika barang yang diterima dalam keadaan rusak maupun cacat.",
            shoppingMessage: "Happy shopping! Pintarlah dalam berbelanja ya kak :)",
            imageUrl: "/images/atasan/produk-11.jpeg",
            category: "Atasan",
            buyLink: "../../where-to-buy.html",
            categoryLink: "../../kategori/atasan.html"
        },
        {
            id: 12,
            title: "Inara Dress Lengan Kancing Oversize",
            description: "Bahan Knit Premium Tebal Halus",
            brand: "Inara Dress by Lasovie",
            details: [
                "Lebar Dada: 110 cm",
                "Panjang Baju: 140 cm",
                "Bahan: Knit Premium",
                "Muat BB: 50 kg - 90 kg",
                "Cocok Dipakai: Semua Musim",
                "Gaya Style: Anggun, Manis, Elegan"
            ],
            warranty: "Garansi 100% uang kembali jika barang yang diterima dalam keadaan rusak maupun cacat.",
            shoppingMessage: "Happy shopping! Pintarlah dalam berbelanja ya kak :)",
            imageUrl: "/images/atasan/produk-12.jpg",
            category: "Atasan",
            buyLink: "../../where-to-buy.html",
            categoryLink: "../../kategori/atasan.html"
        },
        // Tambahkan produk lainnya...
    ];

    // Mencari produk berdasarkan ID
    const product = products.find((p) => p.id === parseInt(id));

    if (!product) {
        return <div>Product not found</div>; // Menangani kasus produk tidak ditemukan
    }

    return (
        <>
            <ProductCardAtasan product={product} /> {/* Mengoper data produk ke ProductCardAtasan */}
            <WhatsApp />
            <Footer />
        </>
    );
};

export default ProductDetailAtasan;