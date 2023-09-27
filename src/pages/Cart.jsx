import Card from '../components/Card';
import { useCartContext } from '../context/CartContext';

const Cart = () => {
    const { items } = useCartContext();

    const total = () => {
        return items.reduce((acc, current) => {
            return acc + current.quantity * current.price;
        }, 0);
    };

    return (
        <div class='max-w-md my-8 mx-auto'>
            <Card rounded={true}>
                <h2>Your shopping Cart</h2>
                <For each={items}>
                    {(item) => (
                        <p class='my-3'>
                            {item.title} - ${item.price} x {item.quantity}
                        </p>
                    )}
                </For>

                <p class='mt-8 pt-4 border-t-2 font-bold'>
                    Total cart price - ${total()}
                </p>
            </Card>
        </div>
    );
};

export default Cart;
