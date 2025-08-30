import Image from "next/image";
import Link from "next/link";

export default function CemilanKami() {
    return (
        <div className="bg-[#b08968] pb-20">
            <h1 className="text-center text-3xl pt-10 text-white font-bold">
                Cemilan Kami
            </h1>
            <div className="mt-10 flex justify-center gap-25 max-sm:gap-10 flex-wrap">
                {/* Card 1 */}
                <div className="card bg-base-100 w-72 shadow-sm rounded-2xl">
                    <figure className="flex justify-center pt-6">
                        <div className="w-40 h-40 overflow-hidden rounded-xl">
                            <Image src="/assets/kripik/kripik.png" alt="kripik" className="w-full h-full object-cover" width={160} height={160}/>
                        </div>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Kripik</h2>
                        <p className="text-sm">
                            Kripik gurih tanpa pengawet, renyah, dan selalu bikin nagih.
                        </p>
                        <div className="card-actions justify-center mt-4">
                            <Link href={"/kripik"}><button
                                className="btn bg-transparent hover:bg-[#6b4e36] hover:text-white rounded-full px-8 py-2">
                                Lihat
                            </button></Link>
                        </div>
                    </div>
                </div>
                {/* Card 2 */}
                <div className="card bg-base-100 w-72 shadow-sm rounded-2xl">
                    <figure className="flex justify-center pt-6">
                        <div className="w-40 h-40 overflow-hidden rounded-xl">
                            <Image src="/assets/stik/stik.png" alt="stik" className="w-full h-full object-cover" width={160} height={160}/>
                        </div>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Stik</h2>
                        <p className="text-sm">
                            Stik gurih dan renyah, cocok untuk teman santai kapan saja.
                        </p>
                        <div className="card-actions justify-center mt-4">
                        <Link href={"/stik"}><button
                                className="btn bg-transparent hover:bg-[#6b4e36] hover:text-white rounded-full px-8 py-2">
                                Lihat
                            </button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}