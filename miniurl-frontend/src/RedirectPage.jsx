import { redirect, useLoaderData } from "react-router-dom";
import { originalURLendpoint } from "./api/apiService";

export async function urlLoader({ params }) {
    originalURLendpoint(params.shortCode).then((response) => {
        window.location.href = response.data;
    }).catch((error) => {
        return redirect('/');
    });
    return null;
  }


export default function RedirectPage() {
    const { shortCode } = useLoaderData();


  return (
    <div>
    </div>
  );
}