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
import { FiShoppingBag, FiUser } from "react-icons/fi";
import sellsfieLogo from "@/assets/logo/sellsfie-logo.png";
import Link from "next/link";
import pizzaImg from "@/assets/img/product/pizza.png";
import Image from "next/image";
import SimpleNavbar from "./SimpleNavbar";

const Page = () => {
  const { control } = useForm();
  const [billing, setBilling] = useState("same");
  const [isOrderSummaryOpen, setIsOrderSummaryOpen] = useState(true);

  const [shippingMethod, setShippingMethod] = useState("ctg");
  const [paymentMethod, setPaymentMethod] = useState("cod");

  return (
    <>
    <SimpleNavbar />

      <div className="min-h-screen mt-5 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Card className="mb-6 bg-gray-100 border-none rounded-sm">
                <CardHeader>
                  <CardTitle className="text-lg">Phone Number</CardTitle>
                </CardHeader>
                <CardContent>
                  <Input
                    placeholder="Phone Number"
                    className="focus-visible:border-green-700 focus-visible:ring-gray-200"
                  />
                </CardContent>
              </Card>

              <Card className="mb-6 bg-gray-100 border-none rounded-sm">
                <CardHeader>
                  <CardTitle className="text-lg">Delivery</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input
                    defaultValue="Bangladesh"
                    className="focus-visible:border-green-700 focus-visible:ring-gray-200"
                  />

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Input
                      placeholder="First name (optional)"
                      className="focus-visible:border-green-700 focus-visible:ring-gray-200"
                    />
                    <Input
                      placeholder="Last name"
                      className="focus-visible:border-green-700 focus-visible:ring-gray-200"
                    />
                  </div>

                  <Input
                    placeholder="Address"
                    className="focus-visible:border-green-700 focus-visible:ring-gray-200"
                  />

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Input
                      placeholder="City"
                      className="focus-visible:border-green-700 focus-visible:ring-gray-200"
                    />
                    <Input
                      placeholder="Postal code (optional)"
                      className="focus-visible:border-green-700 focus-visible:ring-gray-200"
                    />
                  </div>

                  <Input
                    placeholder="Phone"
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
                    <Label className="text-sm cursor-pointer data-[state=checked]:bg-green-700 data-[state=checked]:border-green-700">
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
                  <RadioGroup
                    value={shippingMethod}
                    onValueChange={setShippingMethod}
                    className="space-y-2"
                  >
                    <label
                      className={[
                        "flex cursor-pointer items-center justify-between rounded-md border p-3",
                        shippingMethod === "ctg"
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
                        shippingMethod === "dhaka"
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
                        shippingMethod === "outside"
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
                  <RadioGroup
                    value={paymentMethod}
                    onValueChange={setPaymentMethod}
                    className="space-y-2"
                  >
                    <label
                      className={[
                        "flex cursor-pointer items-center justify-between rounded-md border p-3",
                        paymentMethod === "ssl"
                          ? "border-green-500 bg-green-50"
                          : "",
                      ].join(" ")}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="ssl" />
                        <span>SSLCOMMERZ</span>
                      </div>
                    </label>

                    <label
                      className={[
                        "rounded-md border p-3",
                        paymentMethod === "cod"
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
                </CardContent>
              </Card>

              <Card className="mb-6 bg-gray-100 border-none rounded-sm">
                <CardHeader>
                  <CardTitle className="text-lg">Billing address</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup
                    value={billing}
                    onValueChange={setBilling}
                    className="space-y-2"
                  >
                    <label
                      className={[
                        "flex cursor-pointer items-center space-x-2 rounded-md border p-3",
                        billing === "same"
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
                        billing === "different"
                          ? "border-green-500 bg-green-50 p-3"
                          : "",
                      ].join(" ")}
                    >
                      <RadioGroupItem value="different" />
                      <span>Use a different billing address</span>
                    </label>
                  </RadioGroup>
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
                            ৳33,820.00
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
                          <ScrollArea className="h-[320px] px-4">
                            {[1, 2, 3, 4, 5].map((i) => (
                              <div
                                key={i}
                                className="mb-4 flex items-center justify-between"
                              >
                                <div className="flex items-center gap-3">
                                  <div className="relative h-14 w-14 rounded-md bg-gray-100">
                                    <Image
                                      src={pizzaImg}
                                      alt="Product image"
                                      fill={true}
                                      className="object-cover rounded-md"
                                    />
                                  </div>
                                  <div>
                                    <p className="text-sm font-medium">
                                      Product name {i}
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                      Qty {i}
                                    </p>
                                  </div>
                                </div>
                                <span className="text-sm">৳4,500.00</span>
                              </div>
                            ))}
                          </ScrollArea>

                          <Separator className="my-4" />

                          <div className="space-y-2 px-4 text-sm">
                            <div className="flex justify-between mb-1">
                              <span>Subtotal · 18 items</span>
                              <span>৳33,750.00</span>
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
                      <span>BDT ৳33,820.00</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Place Order Button */}
              <Button className="mb-6 h-12 w-full bg-green-700 text-lg hover:bg-green-600 cursor-pointer">
                Place Order
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
                      onClick={() => setIsOrderSummaryOpen(!isOrderSummaryOpen)}
                      className="flex w-full items-center justify-between px-4 py-3 hover:bg-gray-50 cursor-pointer"
                    >
                      <div className="flex w-full items-center justify-between pr-4">
                        <span className="text-sm font-medium">
                          Show order summary
                        </span>
                        <span className="text-sm font-semibold">
                          ৳33,820.00
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
                        <ScrollArea className="h-[320px] px-4">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <div
                              key={i}
                              className="mb-4 flex items-center justify-between"
                            >
                              <div className="flex items-center gap-3">
                                <div className="relative h-14 w-14 rounded-md bg-gray-100">
                                  <Image
                                    src={pizzaImg}
                                    alt="Product image"
                                    fill={true}
                                    className="object-cover rounded-md"
                                  />
                                </div>
                                <div>
                                  <p className="text-sm font-medium">
                                    Product name {i}
                                  </p>
                                  <p className="text-xs text-muted-foreground">
                                    Qty {i}
                                  </p>
                                </div>
                              </div>
                              <span className="text-sm">৳4,500.00</span>
                            </div>
                          ))}
                        </ScrollArea>

                        <Separator className="my-4" />

                        <div className="space-y-2 px-4 text-sm">
                          <div className="flex justify-between">
                            <span>Subtotal · 18 items</span>
                            <span>৳33,750.00</span>
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
                    <span>BDT ৳33,820.00</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
