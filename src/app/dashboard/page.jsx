// import React from 'react';


// const DashboardPage = () => {
//     return (
//         <div>
//             <h2>This is Dashing Board!!!</h2>
//         </div>
//     );
// };

// export default DashboardPage;

// Useing Server side

// import React from 'react'; 
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
const DashboardPage = async () => {
    // const { user } = useAuth();
    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    });
    console.log("Session data in DashboardPage:", session);
    const user = session?.user;
    if (!user) {
        redirect('/auth/signin');
        return <div>Please sign in to access the dashboard.</div>
    }
    return (
        <div>
            <h2>This is Dashing Board!!!</h2>
        </div>
    );
};

export default DashboardPage;

/* 

import { auth } from "./auth"; // path to your Better Auth server instance
import { headers } from "next/headers";

const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
})



*/