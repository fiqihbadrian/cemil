import ProductCard from '@/app/components/ProdCard';
import {kripikProducts} from '@/app/data/kripik';

export default function Prod() {
    return (
        <div className="bg-[#fff6e9] py-16">
            <h1 className="text-center text-3xl font-bold text-[#2b2b2b] mb-10">
                Produk Kripik Kami
            </h1>
            <div>
                <div className="flex justify-center gap-10 flex-wrap">
                    {kripikProducts.map(product => (<ProductCard key={product.id} product={product}/>))}
                </div>
            </div>
        </div>
    );
}
