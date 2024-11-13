import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCardBawahan from '../components/ProdukBawahan';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ProductDetailBawahan = () => {
    const { id } = useParams(); // Mengambil ID dari URL

    // Data produk yang sama seperti di Bawahan
    const products = [
        {
            id: 1,
            title: "Rok Plisket Kembang Lilly Daily",
            description: "Bahan Skin Premium",
            brand: "Inara Rok by Lasovie",
            details: [
                "Panjang rok : maksi",
                "Gaya : Rok bentuk A",
                "Merk : Lasovie",
                "Motif : bunga",
                "Jenis Ukuran :  reguler",
                "Bahan pakaian : hyget Premium",
                "Gaya Potongan Pinggang : Pinggang Elastis",
                "Ukuran Pinggang : 60cm - 110cm",
                "Ukuran Pinggul : 60cm - 110cm",
                "Panjang Rok : 85cm"
                
            ],
            warranty: "Garansi 100% uang kembali jika barang yang diterima dalam keadaan rusak maupun cacat.",
            shoppingMessage: "Happy shopping! Pintarlah dalam berbelanja ya kak :)",
            imageUrl: "/images/bawahan/produk-1.jpeg",
            category: "Bawahan",
        },
        {
            id: 2,
            title: "Rok Plisket Kembang Lilly Daily",
            description: "Bahan Skin Premium",
            brand: "Inara Rok by Lasovie",
            details: [
                "Panjang rok : maksi",
                "Gaya : Rok bentuk A",
                "Merk : Lasovie",
                "Motif : bunga",
                "Jenis Ukuran :  reguler",
                "Bahan pakaian : hyget Premium",
                "Gaya Potongan Pinggang : Pinggang Elastis",
                "Ukuran Pinggang : 60cm - 110cm",
                "Ukuran Pinggul : 60cm - 110cm",
                "Panjang Rok : 85cm"
            ],
            warranty: "Garansi 100% uang kembali jika barang yang diterima dalam keadaan rusak maupun cacat.",
            shoppingMessage: "Happy shopping! Pintarlah dalam berbelanja ya kak :)",
            imageUrl: "/images/bawahan/produk-2.jpeg",
            category: "Bawahan",
        },
        {
            id: 3,
            title: "Rok Plisket Kembang Lilly Daily",
            description: "Bahan Skin Premium",
            brand: "Inara Rok by Lasovie",
            details: [
                "Panjang rok : maksi",
                "Gaya : Rok bentuk A",
                "Merk : Lasovie",
                "Motif : bunga",
                "Jenis Ukuran :  reguler",
                "Bahan pakaian : hyget Premium",
                "Gaya Potongan Pinggang : Pinggang Elastis",
                "Ukuran Pinggang : 60cm - 110cm",
                "Ukuran Pinggul : 60cm - 110cm",
                "Panjang Rok : 85cm"
            ],
            warranty: "Garansi 100% uang kembali jika barang yang diterima dalam keadaan rusak maupun cacat.",
            shoppingMessage: "Happy shopping! Pintarlah dalam berbelanja ya kak :)",
            imageUrl: "/images/bawahan/produk-3.jpeg",
            category: "Bawahan",
        },
        {
            id: 4,
            title: "Rok Plisket Kembang Lilly Daily",
            description: "Bahan Skin Premium",
            brand: "Inara Rok by Lasovie",
            details: [
                "Panjang rok : maksi",
                "Gaya : Rok bentuk A",
                "Merk : Lasovie",
                "Motif : bunga",
                "Jenis Ukuran :  reguler",
                "Bahan pakaian : hyget Premium",
                "Gaya Potongan Pinggang : Pinggang Elastis",
                "Ukuran Pinggang : 60cm - 110cm",
                "Ukuran Pinggul : 60cm - 110cm",
                "Panjang Rok : 85cm"
            ],
            warranty: "Garansi 100% uang kembali jika barang yang diterima dalam keadaan rusak maupun cacat.",
            shoppingMessage: "Happy shopping! Pintarlah dalam berbelanja ya kak :)",
            imageUrl: "/images/bawahan/produk-4.jpeg",
            category: "Bawahan",
        },
        {
            id: 5,
            title: "Rok Plisket Kembang Lilly Daily",
            description: "Bahan Skin Premium",
            brand: "Inara Rok by Lasovie",
            details: [
                "Panjang rok : maksi",
                "Gaya : Rok bentuk A",
                "Merk : Lasovie",
                "Motif : bunga",
                "Jenis Ukuran :  reguler",
                "Bahan pakaian : hyget Premium",
                "Gaya Potongan Pinggang : Pinggang Elastis",
                "Ukuran Pinggang : 60cm - 110cm",
                "Ukuran Pinggul : 60cm - 110cm",
                "Panjang Rok : 85cm"
            ],
            warranty: "Garansi 100% uang kembali jika barang yang diterima dalam keadaan rusak maupun cacat.",
            shoppingMessage: "Happy shopping! Pintarlah dalam berbelanja ya kak :)",
            imageUrl: "/images/bawahan/produk-5.jpeg",
            category: "Bawahan",
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
            <Navbar />
            <ProductCardBawahan product={product} /> {/* Mengoper data produk ke ProductCardBawahan */}
            <Footer />
        </>
    );
};

export default ProductDetailBawahan;