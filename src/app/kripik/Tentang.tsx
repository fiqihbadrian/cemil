import Image from "next/image";

export default function Tentang() {
    return (
        <div className="bg-[#b08968] text-white">
            <div
                className="container mx-auto px-8 py-12 flex flex-col md:flex-row items-center md:items-start justify-between">
                {/* Tentang Kami */}
                <div className="max-w-lg md:ml-[60px] mt-12 mb-8 md:mb-0">
                    <h2 className="text-2xl font-semibold mb-4">Tentang Kripik Kami</h2>
                    <p className="text-base leading-relaxed max-sm:text-justify">
                        cemilan renyah dibuat dari bahan segar pilihan tanpa pengawet. Kripik kami hadir
                        dengan berbagai varian yang pas untuk segala suasana — teman nonton, ngemil
                        santai, atau oleh-oleh keluarga
                    </p>
                </div>
                {/* Gambar */}
                <div className="flex justify-center md:justify-end md:mr-[120px]">
                    <Image
                        src="/assets/cwo.png"
                        alt="Tentang Kami"
                        width={160}
                        height={160}
                        className="w-48 sm:w-56 md:w-64 transform scale-x-[-1] hover:scale-x-100 transition-transform duration-500"/>
                </div>
            </div>
        </div>
    );
}
