import { shopApi } from "@/utility/shopApi"
import Image from "next/image"
import Link from "next/link"
import CartButton from "@/components/cart/CartButton"
import { Badge } from "@/components/ui/badge"

export default async function AllProductGrid() {
  const productsData = await shopApi.getAllProducts()
  const products = productsData?.data?.data || []

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-3 sm:py-8">
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8 items-stretch">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="relative border border-gray-300 bg-white p-4 text-center hover:shadow-md transition h-full flex flex-col">
              <Badge className="absolute top-2 left-2 z-10 text-white bg-[#38ce00]">
                stock: {Number(product.available_stock)}
              </Badge>
              <Link href={`/product/${product.id}`} className="no-underline">
                <div className="relative h-40">
                  <Image
                    fill
                    src={product.thumbnail_image.url}
                    alt={product.name}
                    className="object-contain"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  />
                </div>
                <div className="mt-auto pt-4">
                  <p className="mt-3 sm:mt-4 text-sm whitespace-normal wrap-break-word overflow-hidden leading-5 max-h-10 text-black hover:text-green-700">
                    {product.name}
                  </p>
                  <p className="mt-4 font-semibold text-black hover:text-green-700">
                    {product.price?.has_discount ? (
                      <>
                        <span className="mr-2 text-sm text-gray-400 line-through">
                          Tk {product?.price?.original}
                        </span>
                        <span>Tk {product?.price?.final}</span>
                      </>
                    ) : (
                      <span>Tk {product?.price?.final}</span>
                    )}
                  </p>
                </div>
              </Link>
              <CartButton
                disabled={Number(product.available_stock) === 0}
                product={{ id: product.id, name: product.name, price: product?.price?.final, img: product.thumbnail_image.url, stock: product.available_stock }}
              />
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </section>
  )
}