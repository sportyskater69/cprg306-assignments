"use client";

import Link from "next/link";
import { useUserAuth } from "../contexts/AuthContext";

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const handleLogin = async () => {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.log(error);
        }
    };

    const handleLogout = async () => {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <main>
            <div className="flex flex-col items-center justify-center min-h-screen">
                <h1 className="text-3xl font-bold text-center">
                    Welcome to the shopping list!
                </h1>

                {!user && (
                    <>
                        <p className="mt-20 text-center">No user logged in.</p>

                        <button
                            onClick={handleLogin}
                            className="mt-4 px-4 py-2 border rounded"
                        >
                            Login with GitHub
                        </button>
                    </>
                )}


                {user && (
                    <>
                        <p className="text-center mt-4">Welcome, {user.displayName} ({user.email})</p>
                        <button
                            onClick={handleLogout}
                            className="mt-4 px-4 py-2 border rounded"
                        >
                            Logout
                        </button>

                        <Link
                            href="/week-9/shopping-list"
                            className="underline mt-4"
                        >
                            Go to Shopping List
                        </Link>
                    </>
                )}
            </div>
        </main>
    );
}