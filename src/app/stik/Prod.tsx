import ProductCard from '@/app/components/ProdCard';
import {stikProducts} from '@/app/data/stik';

export default function Prod() {
    return (
        <div className="bg-[#fff6e9] py-16">
            <h1 className="text-center text-3xl font-bold text-[#2b2b2b] mb-10">
                Produk Stik Kami
            </h1>
            <div>
                <div className="flex justify-center gap-10 flex-wrap">
                    {stikProducts.map(product => (<ProductCard key={product.id} product={product}/>))}
                </div>
            </div>
        </div>
    );
}
