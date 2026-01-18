"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

const page = () => {
  const [payment, setPayment] = useState("cod");
  const [billing, setBilling] = useState("same");
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 py-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* LEFT FORM */}
          <div className="lg:col-span-7">
            {/* Phone */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg">Phone Number</CardTitle>
              </CardHeader>
              <CardContent>
                <Input placeholder="Phone Number" />
              </CardContent>
            </Card>

            {/* Delivery */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg">Delivery</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input defaultValue="Bangladesh" />

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Input placeholder="First name (optional)" />
                  <Input placeholder="Last name" />
                </div>

                <Input placeholder="Address" />

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Input placeholder="City" />
                  <Input placeholder="Postal code (optional)" />
                </div>

                <Input placeholder="Phone" />

                <div className="flex items-center space-x-2">
                  <Checkbox defaultChecked />
                  <Label className="text-sm">
                    Save this information for next time
                  </Label>
                </div>
              </CardContent>
            </Card>

            {/* Shipping method */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg">Shipping method</CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup defaultValue="ctg" className="space-y-2">
                  <label className="flex cursor-pointer items-center justify-between rounded-md border border-orange-500 bg-orange-50 p-3">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="ctg" />
                      <span>Inside Chattagram City</span>
                    </div>
                    <span>৳70.00</span>
                  </label>

                  <label className="flex cursor-pointer items-center justify-between rounded-md border p-3">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="dhaka" />
                      <span>Inside Dhaka City</span>
                    </div>
                    <span>৳70.00</span>
                  </label>

                  <label className="flex cursor-pointer items-center justify-between rounded-md border p-3">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="outside" />
                      <span>Outside Dhaka & Chittagong City</span>
                    </div>
                    <span>৳130.00</span>
                  </label>
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Payment + Billing (fixed bottom on mobile & tablet) */}
            <div className="bg-white border-t lg:border-0 p-4 lg:p-0">
              {/* Payment */}
              <Card className="mb-4 lg:mb-6">
                <CardHeader>
                  <CardTitle className="text-lg">Payment</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    All transactions are secure and encrypted.
                  </p>
                </CardHeader>
                <CardContent>
                  <RadioGroup
                    value={payment}
                    onValueChange={setPayment}
                    className="space-y-2"
                  >
                    <label className="flex cursor-pointer items-center justify-between rounded-md border p-3">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="ssl" />
                        <span>SSLCOMMERZ</span>
                      </div>
                    </label>

                    <label className="rounded-md border border-orange-500 bg-orange-50">
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

              {/* Billing */}
              <Card className="mb-4 lg:mb-6">
                <CardHeader>
                  <CardTitle className="text-lg">Billing address</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup
                    value={billing}
                    onValueChange={setBilling}
                    className="space-y-2"
                  >
                    <label className="flex cursor-pointer items-center space-x-2 rounded-md border border-orange-500 bg-orange-50 p-3">
                      <RadioGroupItem value="same" />
                      <span>Same as shipping address</span>
                    </label>
                    <label className="flex cursor-pointer items-center space-x-2 rounded-md border p-3">
                      <RadioGroupItem value="different" />
                      <span>Use a different billing address</span>
                    </label>
                  </RadioGroup>
                </CardContent>
              </Card>

              <Button className="h-12 w-full bg-orange-500 text-lg hover:bg-orange-600">
                Place Order
              </Button>
            </div>
          </div>

          {/* RIGHT SUMMARY */}
          <div className="lg:col-span-5">
            <Card className="sticky top-6">
              <CardContent className="p-0">
                <ScrollArea className="h-[420px] p-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="mb-4 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <div className="relative h-14 w-14 rounded-md bg-gray-100" />
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

                <Separator />

                <div className="space-y-2 p-4 text-sm">
                  <div className="flex justify-between">
                    <span>Subtotal · 18 items</span>
                    <span>৳33,750.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>৳70.00</span>
                  </div>
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
  );
};

export default page;
