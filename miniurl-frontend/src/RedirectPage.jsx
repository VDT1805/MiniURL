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
    const data = useLoaderData();

  if (!data) {
    return 
    <div>
            <h3>
            Redirecting to original URL...
            </h3>
    </div>;
  }

  const { shortCode } = data;


//   return (
//     <div>
//         Redirecting to original URL...
//     </div>
//   );
}