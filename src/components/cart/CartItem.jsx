import Image from "next/image";

const CartItem = ({ item }) => {
  return (
    <>
      <div className="md:hidden border-b py-4">
        <div className="flex justify-between gap-3">
          <div className="flex gap-3">
            <Image
              src={item.image}
              alt={item.name}
              width={50}
              height={50}
              className="border rounded"
            />
            <div>
              <h3 className="text-sm font-medium leading-snug">
                {item.name}
              </h3>
              <button className="text-xs text-gray-500 underline mt-1">
                Remove
              </button>
            </div>
          </div>

          <div className="text-right">
            <p className="text-sm font-medium">
              Tk {item.price.toLocaleString()}
            </p>

            <div className="flex items-center justify-end border rounded mt-2">
              <button className="px-3 py-1">-</button>
              <span className="px-3 text-sm">{item.qty}</span>
              <button className="px-3 py-1">+</button>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:grid md:grid-cols-12 gap-4 items-center border-b py-6">
        <div className="md:col-span-5 flex gap-4">
          <Image
            src={item.image}
            alt={item.name}
            width={70}
            height={70}
            className="border rounded"
          />
          <div>
            <h3 className="text-sm font-medium">{item.name}</h3>
            <button className="text-xs text-gray-500 underline mt-1">
              Remove
            </button>
          </div>
        </div>

        <div className="md:col-span-2 text-center">
          Tk {item.price.toLocaleString()}
        </div>

        <div className="md:col-span-3 flex justify-center">
          <div className="flex items-center border rounded">
            <button className="px-3 py-1">-</button>
            <span className="px-4">{item.qty}</span>
            <button className="px-3 py-1">+</button>
          </div>
        </div>

        <div className="md:col-span-2 text-right font-medium">
          Tk {(item.price * item.qty).toLocaleString()}
        </div>
      </div>
    </>
  );
};

export default CartItem;
