import { redirect, useLoaderData } from "react-router-dom";
import { originalURLendpoint } from "./api/apiService";


export async function urlLoader({ params }) {
    originalURLendpoint(params.shortCode).then((response) => {
        window.location.href = response.data;
    });
    return null;
  }


export default function RedirectPage() {
    const data = useLoaderData();
  return (

    <div>
            <h3>
            Redirecting to original URL...
            </h3>
    </div>
  );
}