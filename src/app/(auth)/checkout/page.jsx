"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import SimpleNavbar from "./SimpleNavbar";
import { useCartStore } from "@/store/cart-store";
import { numberFormatterForTaka } from "@/utility/helper";
import { useCheckoutMutation } from "@/hooks/useCheckoutMutation";
import { getCookieId } from "@/utility/getCookieId";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";

const Page = () => {
  const cartItems = useCartStore((state) => state.items);
  const clearCart = useCartStore((state) => state.clearCart);
  const checkoutMutation = useCheckoutMutation();

  const normalizedItems = cartItems.map((cartItem) => {
    const qty = Math.max(1, Number(cartItem.qty || 1));
    const price = Number(cartItem.price || 0);

    return {
      ...cartItem,
      qty,
      price,
      lineTotal: qty * price,
      imageSrc: cartItem?.img || cartItem?.image || "/placeholder-image.jpg",
    };
  });

  const subtotal = normalizedItems.reduce((sum, cartItem) => sum + cartItem.lineTotal, 0);
  const totalItems = normalizedItems.reduce((sum, cartItem) => sum + cartItem.qty, 0);

  const {
    register,
    handleSubmit,
    control,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      postalCode: "",
      phone: "",
      email: "",
      remember: false,
      shippingMethod: "ctg",
      paymentMethod: "cod",
      billingAddress: "same",
      couponCode: "",
      note: "",
    },
  });
  const [isOrderSummaryOpen, setIsOrderSummaryOpen] = useState(true);

  const onSubmit = (data) => {
    const cartIds = normalizedItems
      .map((cartItem) => Number(cartItem.cart_id ?? cartItem.id))
      .filter((id) => Number.isInteger(id) && id > 0);

    if (cartIds.length === 0) {
      toast.error("No valid cart items found for checkout");
      return;
    }

    const payload = {
      payment_method: data.paymentMethod,
      coupon: data.couponCode?.trim() || null,
      phone: String(data.phone || "").trim(),
      email: String(data.email || "").trim(),
      address_id: null,
      address: String(data.address || "").trim(),
      note: data.note?.trim() || null,
      carts: cartIds,
      cookie_id: getCookieId(),
    };

    checkoutMutation.mutate(payload, {
      onSuccess: () => {
        clearCart();
      },
    });
  };

  return (
    <>
      <SimpleNavbar />

      <div className="min-h-screen mt-5 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            <div className="lg:col-span-7">

              <Card className="mb-6 bg-gray-100 border-none rounded-sm">
                <CardHeader>
                  <CardTitle className="text-lg">Delivery</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Input
                      placeholder="First name (optional)"
                      {...register("firstName")}
                      className="focus-visible:border-green-700 focus-visible:ring-gray-200"
                    />
                    <Input
                      placeholder="Last name"
                      {...register("lastName")}
                      className="focus-visible:border-green-700 focus-visible:ring-gray-200"
                    />
                  </div>

                  <Input
                    placeholder="Address"
                    {...register("address", { required: true })}
                    className="focus-visible:border-green-700 focus-visible:ring-gray-200"
                  />

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Input
                      placeholder="City"
                      {...register("city")}
                      className="focus-visible:border-green-700 focus-visible:ring-gray-200"
                    />
                    <Input
                      placeholder="Postal code (optional)"
                      {...register("postalCode")}
                      className="focus-visible:border-green-700 focus-visible:ring-gray-200"
                    />
                  </div>

                  <Input
                    placeholder="Phone"
                    {...register("phone", {
                      required: true,
                      pattern: /^\d{11}$/,
                    })}
                    className="focus-visible:border-green-700 focus-visible:ring-gray-200"
                  />

                  <Input
                    placeholder="Email"
                    type="email"
                    {...register("email", { required: true })}
                    className="focus-visible:border-green-700 focus-visible:ring-gray-200"
                  />

                  <Textarea
                    placeholder="Order note (optional)"
                    {...register("note")}
                    className="focus-visible:border-green-700 focus-visible:ring-gray-200"
                  />

                  <div className="flex items-center space-x-2">
                    <Controller
                      name="remember"
                      control={control}
                      render={({ field }) => (
                        <Checkbox
                          id="remember"
                          checked={!!field.value}
                          onCheckedChange={(val) =>
                            field.onChange(val === true)
                          }
                          className="cursor-pointer data-[state=checked]:bg-green-700 data-[state=checked]:border-green-700"
                        />
                      )}
                    />
                    <Label htmlFor="remember" className="text-sm cursor-pointer data-[state=checked]:bg-green-700 data-[state=checked]:border-green-700">
                      Save this information for next time
                    </Label>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-6 bg-gray-100 border-none rounded-sm">
                <CardHeader>
                  <CardTitle className="text-lg">Shipping method</CardTitle>
                </CardHeader>
                <CardContent>
                  <Controller
                    name="shippingMethod"
                    control={control}
                    render={({ field }) => (
                      <RadioGroup
                        value={field.value}
                        onValueChange={field.onChange}
                        className="space-y-2"
                      >
                        <label
                          className={[
                            "flex cursor-pointer items-center justify-between rounded-md border p-3",
                            field.value === "ctg"
                              ? "border-green-500 bg-green-50"
                              : "",
                          ].join(" ")}
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="ctg" />
                            <span>Inside Chattagram City</span>
                          </div>
                          <span>৳70.00</span>
                        </label>

                        <label
                          className={[
                            "flex cursor-pointer items-center justify-between rounded-md border p-3",
                            field.value === "dhaka"
                              ? "border-green-500 bg-green-50"
                              : "",
                          ].join(" ")}
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="dhaka" />
                            <span>Inside Dhaka City</span>
                          </div>
                          <span>৳70.00</span>
                        </label>

                        <label
                          className={[
                            "flex cursor-pointer items-center justify-between rounded-md border p-3",
                            field.value === "outside"
                              ? "border-green-500 bg-green-50"
                              : "",
                          ].join(" ")}
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="outside" />
                            <span>Outside Dhaka & Chittagong City</span>
                          </div>
                          <span>৳130.00</span>
                        </label>
                      </RadioGroup>
                    )}
                  />
                </CardContent>
              </Card>

              <Card className="mb-6 bg-gray-100 border-none rounded-sm">
                <CardHeader>
                  <CardTitle className="text-lg">Payment</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    All transactions are secure and encrypted.
                  </p>
                </CardHeader>
                <CardContent>
                  <Controller
                    name="paymentMethod"
                    control={control}
                    render={({ field }) => (
                      <RadioGroup
                        value={field.value}
                        onValueChange={field.onChange}
                        className="space-y-2"
                      >
                        <label
                          className={[
                            "flex cursor-pointer items-center justify-between rounded-md border p-3",
                            field.value === "ssl"
                              ? "border-green-500 bg-green-50"
                              : "",
                          ].join(" ")}
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="sslcz" />
                            <span>SSLCOMMERZ</span>
                          </div>
                        </label>

                        <label
                          className={[
                            "flex cursor-pointer items-center justify-between rounded-md border p-3",
                            field.value === "bkash"
                              ? "border-green-500 bg-green-50"
                              : "",
                          ].join(" ")}
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="bkash" />
                            <span>bKash</span>
                          </div>
                        </label>

                        <label
                          className={[
                            "rounded-md border p-3",
                            field.value === "cod"
                              ? "border-green-500 bg-green-50"
                              : "",
                          ].join(" ")}
                        >
                          <div className="flex cursor-pointer items-center space-x-2 p-3">
                            <RadioGroupItem value="cod" />
                            <span>Cash on Delivery (COD)</span>
                          </div>
                          <div className="border-t p-3 text-sm">
                            Cash on Delivery
                          </div>
                        </label>
                      </RadioGroup>
                    )}
                  />
                </CardContent>
              </Card>

              <Card className="mb-6 bg-gray-100 border-none rounded-sm">
                <CardHeader>
                  <CardTitle className="text-lg">Billing address</CardTitle>
                </CardHeader>
                <CardContent>
                  <Controller
                    name="billingAddress"
                    control={control}
                    render={({ field }) => (
                      <RadioGroup
                        value={field.value}
                        onValueChange={field.onChange}
                        className="space-y-2"
                      >
                        <label
                          className={[
                            "flex cursor-pointer items-center space-x-2 rounded-md border p-3",
                            field.value === "same"
                              ? "border-green-500 bg-green-50 p-3"
                              : "",
                          ].join(" ")}
                        >
                          <RadioGroupItem value="same" />
                          <span>Same as shipping address</span>
                        </label>
                        <label
                          className={[
                            "flex cursor-pointer items-center space-x-2 rounded-md border p-3",
                            field.value === "different"
                              ? "border-green-500 bg-green-50 p-3"
                              : "",
                          ].join(" ")}
                        >
                          <RadioGroupItem value="different" />
                          <span>Use a different billing address</span>
                        </label>
                      </RadioGroup>
                    )}
                  />
                </CardContent>
              </Card>

              <div className="mb-6 lg:hidden">
                <Card className="border-none rounded-sm">
                  <CardHeader>
                    <CardTitle className="text-lg">Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="w-full">
                      <button
                        type="button"
                        onClick={() =>
                          setIsOrderSummaryOpen(!isOrderSummaryOpen)
                        }
                        className="flex w-full items-center justify-between px-4 py-3 hover:bg-gray-50"
                      >
                        <div className="flex w-full items-center justify-between pr-4">
                          <span className="text-sm font-medium">
                            Show order summary
                          </span>
                          <span className="text-sm font-semibold">
                            {numberFormatterForTaka(subtotal)}
                          </span>
                        </div>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            isOrderSummaryOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {isOrderSummaryOpen && (
                        <div>
                          <ScrollArea className="h-80 px-4">
                            {normalizedItems.map((cartItem) => (
                              <div
                                key={cartItem.id}
                                className="mb-4 flex items-center justify-between"
                              >
                                <div className="flex items-center gap-3">
                                  <div className="relative h-14 w-14 rounded-md bg-gray-100">
                                    <Image
                                      src={cartItem.imageSrc}
                                      alt={cartItem.name}
                                      fill={true}
                                      className="object-cover rounded-md"
                                    />
                                  </div>
                                  <div>
                                    <p className="text-sm font-medium">
                                      {cartItem.name}
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                      Qty {cartItem.qty}
                                    </p>
                                  </div>
                                </div>
                                <span className="text-sm">
                                  {numberFormatterForTaka(cartItem.lineTotal)}
                                </span>
                              </div>
                            ))}
                          </ScrollArea>

                          <Separator className="my-4" />

                          <div className="space-y-2 px-4 text-sm">
                            <div className="flex justify-between mb-1">
                              <span>Subtotal · {totalItems} items</span>
                              <span>{numberFormatterForTaka(subtotal)}</span>
                            </div>
                            <div className="flex justify-between mb-1">
                              <span>Shipping</span>
                              <span>৳70.00</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    <Separator />

                    <div className="flex justify-between p-4 text-lg font-semibold">
                      <span>Total</span>
                      <span>{numberFormatterForTaka(subtotal)}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Place Order Button */}
              <Button
                type="submit"
                disabled={checkoutMutation.isPending}
                className="mb-6 h-12 w-full bg-green-700 text-lg hover:bg-green-600 cursor-pointer"
              >
                {checkoutMutation.isPending ? "Placing Order..." : "Place Order"}
              </Button>
            </div>

            {/* RIGHT SUMMARY - Desktop only */}
            <div className="hidden lg:block lg:col-span-5">
              <Card className="lg:sticky lg:top-6">
                <CardHeader>
                  <CardTitle className="text-lg">Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="w-full">
                    <button
                      type="button"
                      onClick={() => setIsOrderSummaryOpen(!isOrderSummaryOpen)}
                      className="flex w-full items-center justify-between px-4 py-3 hover:bg-gray-50 cursor-pointer"
                    >
                      <div className="flex w-full items-center justify-between pr-4">
                        <span className="text-sm font-medium">
                          Show order summary
                        </span>
                        <span className="text-sm font-semibold">
                          {numberFormatterForTaka(subtotal)}
                        </span>
                      </div>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          isOrderSummaryOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isOrderSummaryOpen && (
                      <div>
                        <ScrollArea className="h-80 px-4">
                          {normalizedItems.map((cartItem) => (
                            <div
                              key={cartItem.id}
                              className="mb-4 flex items-center justify-between"
                            >
                              <div className="flex items-center gap-3">
                                <div className="relative h-14 w-14 rounded-md bg-gray-100">
                                  <Image
                                    src={cartItem.imageSrc}
                                    alt={cartItem.name}
                                    fill={true}
                                    sizes="56px"
                                    className="object-cover rounded-md"
                                  />
                                </div>
                                <div>
                                  <p className="text-sm font-medium">
                                    {cartItem.name}
                                  </p>
                                  <p className="text-xs text-muted-foreground">
                                    Qty {cartItem.qty}
                                  </p>
                                </div>
                              </div>
                              <span className="text-sm">
                                {numberFormatterForTaka(cartItem.lineTotal)}
                              </span>
                            </div>
                          ))}
                        </ScrollArea>

                        <Separator className="my-4" />

                        <div className="space-y-2 px-4 text-sm">
                          <div className="flex justify-between">
                            <span>Subtotal · {totalItems} items</span>
                            <span>{numberFormatterForTaka(subtotal)}</span>
                          </div>
                          {/* <div className="flex justify-between mb-1">
                            <span>Shipping</span>
                            <span>৳70.00</span>
                          </div> */}
                          {/* input field with apply btn */}
                          <div className="flex my-2">
                            <Input
                              placeholder="Coupon code"
                              {...register("couponCode")}
                              className="focus-visible:border-green-700 w-full rounded-none
                              focus:outline-none 
                              focus:ring-0 
                              focus-visible:ring-0 
                              focus-visible:ring-offset-0 
                              focus-visible:outline-none 
                              "
                            />
                            <Button type="button" className="rounded-l-none bg-green-700 hover:bg-green-600 cursor-pointer">
                              Apply
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <Separator />

                  <div className="flex justify-between p-4 text-lg font-semibold">
                    <span>Total</span>
                    <span>{numberFormatterForTaka(subtotal)}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Page;
