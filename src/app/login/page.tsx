
"use client";

import { useAuth } from '@/hooks/use-auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Logo } from '@/components/logo';
import { Loader2 } from 'lucide-react';

const GoogleIcon = () => (
    <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
        <path fill="currentColor" d="M488 261.8C488 403.3 381.5 512 244 512 111.8 512 0 400.2 0 261.8S111.8 11.6 244 11.6C381.5 11.6 488 120.3 488 261.8zm-252.1-34.3c-28.8-11-53.5-35.4-53.5-66.3 0-33.4 21.3-59.9 53.5-59.9 29.1 0 49.2 22.4 49.2 53.5 0 28.5-17.6 52.3-49.2 72.7zm-1.7 6.4c-42.3 0-72.7-24.8-72.7-65 0-43 31.8-67.4 72.7-67.4s72.7 24.4 72.7 67.4c0 40.2-30.4 65-72.7 65zm-2.2 21.3c37.5 0 62.9 23.3 62.9 53.1 0 22.5-15.6 43.3-43 53.5-32.9 12-61.9-2.5-73-25.2-12.1-23.7-5.5-55.9 10.1-71.4z"></path>
    </svg>
);


export default function LoginPage() {
  const { user, loading, signInWithGoogle } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.push('/');
    }
  }, [user, loading, router]);

  if (loading || user) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <Logo className="mx-auto h-12 w-12 text-primary mb-4" />
          <CardTitle>Welcome to LawPrep Sprint</CardTitle>
          <CardDescription>Sign in to continue to your dashboard</CardDescription>
        </CardHeader>
        <CardContent>
          <Button className="w-full" onClick={signInWithGoogle}>
            <GoogleIcon />
            Sign in with Google
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
