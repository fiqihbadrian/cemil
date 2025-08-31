import Image from "next/image";

export default function Hero() {
    return (
        <div className="hero min-h-screen bg-[#fff6e9] relative overflow-hidden">
            {/* Background Gambar */}
            <div className="absolute inset-0">
                {/* Gambar kiri atas (¼ piring) */}
                <Image
                    src="/assets/kripik/knt.png"
                    className="absolute top-0 left-0 w-[700px] -translate-x-1/4 -translate-y-1/4"
                    alt="Kripik Kuning"
                    width={700}
                    height={700}/> {/* Gambar kanan bawah */}
                    
                <Image
                    src="/assets/kripik/td.png"
                    className="absolute bottom-0 right-0 w-[700px] translate-x-1/4 translate-y-1/4"
                    alt="Kripik Oranye"
                    width={700}
                    height={700}/>
                    
            </div>
            {/* Konten */}
            <div
                className="text-black hero-content relative z-10 flex flex-col items-center text-center">
                <h1 className="text-5xl lg:text-6xl font-bold">Kripik</h1>
                <p className="mt-2 text-lg lg:text-2xl">Setiap Gigitan, Cerita Baru</p>
            </div>
        </div>
    );
}
