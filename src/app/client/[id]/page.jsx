import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Page({ params }) {
  const { id } = await params;
  const cookieStore = await cookies();
  const token = cookieStore.get("jwt")?.value;

  //if no token, redirect to login
  if (!token) {
    redirect("/login");
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}api/client/me`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    redirect("/login");
  }

  const response = await res.json();
  const data = response.data;

  if (String(data.id) !== id) {
    redirect(`/client/${data.id}`);
  }

  return <div>Client ID: {data.name}</div>;
}