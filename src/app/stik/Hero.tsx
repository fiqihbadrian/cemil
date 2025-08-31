import Image from "next/image"; 

export default function Hero() {
    return (
        <>
        <div className="hero min-h-screen bg-[#fff6e9] relative overflow-hidden">
            <div className="absolute inset-0">
                <Image
                    src="/assets/stik/kejuh.png"
                    className="absolute top-0 left-0 w-[700px] -translate-x-1/4 -translate-y-1/4"
                    alt="Kripik Kuning"
                    width={700}
                    height={700}    
                    />
                <Image
                    src="/assets/stik/stik.png"
                    className="absolute bottom-0 right-0 w-[700px] translate-x-1/4 translate-y-1/4"
                    alt="Kripik Oranye"
                    width={700}
                    height={700} />
            </div>
            <div
                className="text-black hero-content relative z-10 flex flex-col items-center text-center">
                <h1 className="text-5xl lg:text-6xl font-bold">Stik</h1>
                <p className="mt-2 text-lg lg:text-2xl">Teman Asik, Setiap Gigitan</p>
            </div>
        </div>
        </>
    );
}
