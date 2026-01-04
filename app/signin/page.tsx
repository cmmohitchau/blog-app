import { AuthButton } from "@/components/Authbutton"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default async function Signin() {

    return(
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Logo/Brand */}
                <div className="text-center mb-8">
                    <Link href="/">
                        <h1 className="text-4xl font-bold bg-linear-to-r from-pink-500 via-purple-500 to-indigo-600 bg-clip-text text-transparent mb-2">
                            WriteSphere
                        </h1>
                    </Link>
                    <p className="text-muted-foreground">Welcome back to your creative space</p>
                </div>

                {/* Sign In Card */}
                <div className="bg-card border-2 border-border rounded-3xl shadow-2xl p-8 hover:border-purple-500/30 transition-all">
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold text-center mb-2">Create an account</h2>
                        <p className="text-center text-muted-foreground text-sm">
                            Enter your email below to create your account
                        </p>
                    </div>

                    {/* Email Input */}
                    <div className="space-y-4 mb-4">
                        <div>
                            <label className="text-sm font-medium text-foreground mb-2 block">
                                Email
                            </label>
                            <Input 
                                type="email" 
                                placeholder="name@example.com" 
                                className="h-12 border-2 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium text-foreground mb-2 block">
                                Password
                            </label>
                            <Input 
                                type="password" 
                                placeholder="Password (min 8 characters)" 
                                className="h-12 border-2 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all"
                            />
                        </div>
                    </div>

                    {/* Sign In Button */}
                    <Button className="w-full h-12 bg-linear-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all mb-6">
                        Sign In With Email
                    </Button>

                    {/* Divider */}
                    <div className="flex items-center my-6">
                        <div className="grow border-t border-border"></div>
                        <span className="mx-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                            Or continue with
                        </span>
                        <div className="grow border-t border-border"></div>
                    </div>

                    {/* Social Auth */}
                    <AuthButton />

                    {/* Footer Links */}
                    <div className="mt-6 text-center text-sm">
                        <p className="text-muted-foreground">
                            Don't have an account?{" "}
                            <Link href="/signup" className="font-semibold text-purple-600 hover:text-purple-700 hover:underline transition-colors">
                                Sign Up
                            </Link>
                        </p>
                    </div>
                </div>

                {/* Terms */}
                <p className="text-center text-xs text-muted-foreground mt-6 px-8">
                    By clicking continue, you agree to our{" "}
                    <Link href="/terms" className="underline hover:text-foreground transition-colors">
                        Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="underline hover:text-foreground transition-colors">
                        Privacy Policy
                    </Link>
                    .
                </p>

                {/* Decorative Elements */}
                <div className="absolute top-20 left-10 w-32 h-32 bg-pink-500 rounded-full opacity-10 blur-3xl -z-10"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-600 rounded-full opacity-10 blur-3xl -z-10"></div>
            </div>
        </div>
    )
}