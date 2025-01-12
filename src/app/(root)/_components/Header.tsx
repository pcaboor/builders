import { currentUser } from "@clerk/nextjs/server";
import { ConvexHttpClient } from "convex/browser";
import { api } from "../../../../convex/_generated/api";
import Link from "next/link";

async function Header() {

    const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
    const user = await currentUser();

    const convexUser = await convex.query(api.users.getUser, {
        userId: user?.id || "",
    })

    console.log(convexUser);

    return (
        <div className="relative z-10">
            <div
                className="flex items-center lg:justify-between justify-center 
          bg-[#0a0a0f]/80 backdrop-blur-xl p-6 mb-4 rounded-lg"
            >
                <div className="hidden lg:flex items-center gap-8">
                    <Link href="/" className="flex items-center gap-3 group relative"></Link>
                </div>
            </div>

        </div>
    )
}

export default Header