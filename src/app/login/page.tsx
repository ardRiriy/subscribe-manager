"use client"

import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import React from "react";
import {ThemeSupa} from "@supabase/auth-ui-shared";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

const supabase =
    createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ''
    );

export default function googleAuth() :React.JSX.Element {
    return (
        <Card className="h-screen w-screen flex justify-center items-center flex-col">
            <CardHeader>
                <CardTitle> ログイン </CardTitle>
            </CardHeader>
            <CardContent>
                <Auth
                    supabaseClient={supabase}
                    appearance={{ theme: ThemeSupa }}
                    providers={['google']}
                    onlyThirdPartyProviders
                />
            </CardContent>
        </Card>
            );
}
