import Image from "next/image";

export default function Hero() {
    return (
        <div className="hero bg-[#fff6e9] min-h-screen px-4">
            <div
                className=" hero-content flex-col-reverse lg:flex-row-reverse gap-6 lg:gap-20">
                {/* Gambar */}
                <Image src="/assets/home.png" className="w-60 max-sm:w-80 lg:w-[500px]" alt="Cemilan" width={160} height={160}/> {/* Teks */}
                <div className="text-center lg:text-left lg:ml-15 text-black">
                    <h1
                        className="text-3xl max-sm:text-4xl lg:text-6xl font-bold leading-snug lg:leading-tight">
                        Camilan Renyah,
                        <br className="hidden sm:block"/>
                        Teman Setia Setiap Saat
                    </h1>
                    <p className="py-1 pb-5 text-base max-sm:text-lg lg:text-2xl">
                        Kripik &amp; Stik gurih tanpa pengawet,
                        <br/>
                        siap jadi favorit kamu.
                    </p>
                    <button
                        className="btn bg-[#e07a5f] hover:bg-[#db8974] text-white btn-circle px-6 py-2 text-sm lg:px-10 lg:text-base">
                        Produk Kami
                    </button>
                </div>
            </div>
        </div>
    )
}
