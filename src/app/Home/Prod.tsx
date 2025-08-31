import Image from "next/image";
import Link from "next/link";

export default function ProdukUnggulan() {
    return (
        <div className="bg-[#fff6e9] py-16">
            <h1 className="text-center text-3xl font-bold text-[#2b2b2b] mb-10">
                Produk Unggulan
            </h1>
            <div className="text-black flex justify-center gap-10 flex-wrap">
                <div className="card w-56 bg-white shadow-md rounded-3xl">
                    <figure className="px-6 pt-6">
                        <div
                            className="w-40 h-40 flex items-center justify-center overflow-hidden rounded-2xl border-8 border-[#8c6a4f]">
                            <Image
                                src="/assets/produgl/kentang.png"
                                alt="Stik Kentang"
                                width={160}
                                height={160}
                                className="w-full h-full object-cover"/>
                        </div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="text-lg font-medium">Stik Kentang</h2>
                    </div>
                </div>
                <div className="card w-56 bg-white shadow-md rounded-3xl">
                    <figure className="px-6 pt-6">
                        <div
                            className="w-40 h-40 flex items-center justify-center overflow-hidden rounded-2xl border-8 border-[#8c6a4f]">
                            <Image
                                src="/assets/produgl/bawang.png"
                                alt="Stik bawang"
                                width={160}
                                height={160}
                                className="w-full h-full object-cover"/>
                        </div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="text-lg font-medium">Stik Bawang</h2>
                    </div>
                </div>
                <div className="card w-56 bg-white shadow-md rounded-3xl">
                    <figure className="px-6 pt-6">
                        <div
                            className="w-40 h-40 flex items-center justify-center overflow-hidden rounded-2xl border-8 border-[#8c6a4f]">
                            <Image
                                src="/assets/produgl/pangsit.png"
                                alt="Kripik Pangsit"
                                width={160}
                                height={160}
                                className="w-full h-full object-cover"/>
                        </div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="text-lg font-medium">Kripik Pangsit</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
