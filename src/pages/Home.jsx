import Card from '../components/Card';

import { createResource, Show, For } from 'solid-js';
import { A } from '@solidjs/router';

const fetchProducts = async () => {
    const res = await fetch('http://localhost:4000/products');

    return res.json();
};
const Home = () => {
    const [products] = createResource(fetchProducts);

    return (
        <Show when={products()} fallback={<p>Loading...</p>}>
            <div class='grid grid-cols-4 gap-10 my-4'>
                <For each={products()}>
                    {(product) => (
                        <Card rounded={true} flat={true}>
                            <img src={product.img} alt='product img' />
                            <h2 class='my-3 font-bold'>{product.title}</h2>
                            <A href={'/product/' + product.id} class='btn'>
                                View Product
                            </A>
                        </Card>
                    )}
                </For>
            </div>
        </Show>
    );
};

export default Home;
