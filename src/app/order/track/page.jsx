"use client";

import { useEffect, useState } from "react";
import axiosInstance from "@/utility/axios";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useParams, useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const [orderNumber, setOrderNumber] = useState("");
  const [phone, setPhone] = useState("");
  const [mounted, setMounted] = useState(false);
  const params = useParams();

  const shopUrl = params.shop_url;

  useEffect(() => {
    setMounted(true);
    const order = searchParams.get("order_number");
    const phoneParam = searchParams.get("phone");

    if (order) setOrderNumber(order);
    if (phoneParam) setPhone(phoneParam);
  }, [searchParams]);

  const mutation = useMutation({
    mutationFn: async (data) => {
      const res = await axiosInstance.post(`api/client/teqfiexyz/order/track`, data);
      return res.data;
    },
    onSuccess: () => {
      toast.success("Tracking found");
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message || "Order not found");
    },
  });

  const handleTrack = () => {
    if (!orderNumber || !phone) {
      toast.error("Order number and phone both required");
      return;
    }
    
    mutation.mutate({
      order_number: orderNumber,
      phone: phone,
    });
  };
  
  const order = mutation.data?.data;
  
  console.log("Order Data:", order);

  // Safe check for timeline and items
  const timeline = order?.timeline || [];
  const items = order?.items || [];
  const timelineCount = order?.timeline_count || 0;
  
  // Get status icon and color
  const getStatusInfo = (status) => {
    const statusLower = status?.toLowerCase() || '';
    if (statusLower.includes('delivered') || statusLower.includes('delivered')) {
      return { bg: 'bg-green-100', text: 'text-green-700', border: 'border-green-200', icon: '✓' };
    }
    if (statusLower.includes('shipped')) {
      return { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-200', icon: '🚚' };
    }
    if (statusLower.includes('processing')) {
      return { bg: 'bg-yellow-100', text: 'text-yellow-700', border: 'border-yellow-200', icon: '⚙️' };
    }
    if (statusLower.includes('cancelled')) {
      return { bg: 'bg-red-100', text: 'text-red-700', border: 'border-red-200', icon: '✗' };
    }
    return { bg: 'bg-orange-100', text: 'text-orange-700', border: 'border-orange-200', icon: '📦' };
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-[#5f9ea0] overflow-hidden">
        {/* <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0" 
            style={{ 
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 1px)', 
              backgroundSize: '40px 40px' 
            }}
          ></div>
        </div> */}
        <div className="relative max-w-6xl mx-auto px-4 py-12 md:py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            <span className="text-white text-sm font-medium">Real-time Tracking</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
            Track Your Package
          </h1>
          <p className="text-orange-100 text-base md:text-lg max-w-md mx-auto">
            Enter your order details to get real-time updates
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 -mt-8 pb-16">
        {/* Search Card */}
        <div className="bg-white rounded-2xl shadow-xl mt-3 border border-gray-100 overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Order Number (e.g., #ORD-12345)"
                  value={orderNumber}
                  onChange={(e) => setOrderNumber(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleTrack()}
                  className="w-full pl-10 pr-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#5f9ea0] focus:border-transparent transition-all outline-none text-gray-700 placeholder:text-gray-400"
                />
              </div>
              
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <input
                  type="tel"
                  placeholder="Phone Number (used at checkout)"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleTrack()}
                  className="w-full pl-10 pr-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#5f9ea0] focus:border-transparent transition-all outline-none text-gray-700 placeholder:text-gray-400"
                />
              </div>
            </div>

            <button
              onClick={handleTrack}
              disabled={mutation.isPending}
              className="w-full mt-6 text-white py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed shadow-lg bg-[#5f9ea0] shadow-[#5f9ea0]"
            >
              {mutation.isPending ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Tracking...</span>
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span>TRACK ORDER</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Order Details Section */}
        {order && (
          <div className="mt-8 space-y-6">
            {/* Status Header Card */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
                <div className="flex flex-wrap justify-between items-start gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                      </svg>
                      <span>Order Number</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">{order.order_number || 'N/A'}</h2>
                    <div className="flex items-center gap-2 mt-2 text-gray-500 text-sm">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>Placed on: {order.placed_at || 'N/A'}</span>
                    </div>
                  </div>
                  
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${getStatusInfo(order.current_status).bg} ${getStatusInfo(order.current_status).text} ${getStatusInfo(order.current_status).border}`}>
                    <span className="text-lg">{getStatusInfo(order.current_status).icon}</span>
                    <span className="font-semibold text-sm">{order.current_status || 'Unknown'}</span>
                  </div>
                </div>
              </div>
              <hr />
              <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#5f9ea0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <h3 className="font-semibold text-gray-800 mb-0">Order Items</h3>
                  <span className="ml-auto text-sm text-gray-500">{items.length || 0} item(s)</span>
                </div>
              </div>
              
              {items.length > 0 ? (
                <div className="divide-y divide-gray-100">
                  {items.map((item, index) => (
                    <div key={index} className="p-5 hover:bg-gray-50 transition-colors">
                      <div className="flex gap-4">
                        <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0 shadow-sm">
                          {item.thumbnail_image?.url ? (
                            <img
                              src={item.thumbnail_image.url}
                              alt={item.product_name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gray-100">
                              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                              </svg>
                            </div>
                          )}
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-gray-800">{item.product_name || 'Unknown Product'}</p>
                          <div className="flex items-center gap-4 mt-2">
                            <span className="text-sm text-gray-500">Quantity: {item.quantity || 1}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center text-gray-500">
                  No items found
                </div>
              )}
            </div>

            {/* Improved Timeline Section - Only show if timeline exists */}
            {timeline.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
                  <h3 className="font-semibold text-gray-800">Order Timeline</h3>
                </div>
                
                <div className="p-6">
                  <div className="relative">
                    {timeline.map((item, index) => {
                      const isActive = index < timelineCount;
                      const isLast = index === timeline.length - 1;
                      
                    return (
                      <div key={index} className="relative flex gap-4 pb-8 last:pb-0">
                        {/* Left section with icon */}
                        <div className="flex flex-col items-center">
                          <div className={`relative z-10 w-8 h-8 shrink-0 rounded-full flex items-center justify-center transition-all duration-300 ${
                            isActive 
                              ? 'shadow-lg shadow-[#5f9ea0]/20' 
                              : 'bg-gray-200'
                          }`} style={isActive ? { backgroundColor: '#5f9ea0' } : {}}>
                            {isActive ? (
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            ) : (
                              <div className="w-2.5 h-2.5 rounded-full bg-gray-400"></div>
                            )}
                          </div>
                          {!isLast && (
                            <div className={`w-0.5 h-full -mt-2 ${isActive ? 'bg-[#5f9ea0]' : 'bg-gray-200'}`}></div>
                          )}
                        </div>
                          
                          {/* Right section with content */}
                          <div className="flex-1 pb-4">
                            <div className="mb-1">
                              <h4 className={`font-semibold text-base ${isActive ? 'text-[#5f9ea0]' : 'text-gray-600'}`}>
                                {item.status || 'Unknown Status'}
                              </h4>
                              <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                {item.created_at || item.at || 'N/A'}
                              </p>
                            </div>
                            {item.note && (
                              <div className="mt-2 bg-[#e3f6fc] border border-orange-100 rounded-lg p-3">
                                <p className="text-sm text-black">{item.note}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Empty State */}
        {!order && mutation.isIdle && !mutation.isPending && (
          <div className="mt-12 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-100 rounded-full mb-4">
              <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-1">Ready to track your order</h3>
            <p className="text-gray-500 text-sm">Enter your order number and phone number above</p>
          </div>
        )}

        {/* Loading Skeleton */}
        {mutation.isPending && (
          <div className="mt-8 bg-white rounded-2xl shadow-lg p-6 animate-pulse">
            <div className="h-8 bg-gray-200 rounded-lg w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-6"></div>
            <div className="space-y-3">
              <div className="h-20 bg-gray-100 rounded-xl"></div>
              <div className="h-20 bg-gray-100 rounded-xl"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}