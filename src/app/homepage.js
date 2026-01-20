import { QueryClient, dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { mefetchData } from "@/utility/queries/me";
import BodyHomePage from "@/HomePage/BodyHomePage";

export default async function HomePage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["me"],
    queryFn: mefetchData,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <BodyHomePage />
    </HydrationBoundary>
  );
}
