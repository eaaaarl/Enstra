"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import HomeLayout from "@/app/features/home/components/layout/HomeLayout";
import RotcForm from "@/app/features/form/components/rotc-form";

function RotcPage() {
  return (
    <HomeLayout>
      <div className="container max-w-5xl mx-auto p-4">
        <Card className="shadow-lg">
          <CardHeader className="bg-slate-50">
            <CardTitle className="text-2xl font-bold text-center text-slate-700">
              ROTC APPLICATION FORM
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <Alert
              variant="destructive"
              className="bg-amber-50 border-amber-200"
            >
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                Reminders: PLEASE ENTER VALID AND ACCURATE DATA.
              </AlertDescription>
            </Alert>
            <RotcForm />
          </CardContent>
        </Card>
      </div>
    </HomeLayout>
  );
}

export default RotcPage;
