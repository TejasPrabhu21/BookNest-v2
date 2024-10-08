"use client";
import React, { useActionState } from "react";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { Label } from "@/src/components/ui/label";
import { authenticate } from "@/src/lib/actions";
import { useTranslations } from "next-intl";

const LoginForm = () => {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined
  );

  const t = useTranslations("Login");
  return (
    <>
      <form action={formAction} className="flex flex-col gap-2">
        <div className="mt-2 flex flex-col gap-2">
          <Label htmlFor="email">{t("email")}</Label>
          <Input id="email" name="email" type="email" required />
        </div>
        <div className="mt-2 flex flex-col gap-2">
          <Label htmlFor="password">{t("password")}</Label>
          <Input id="password" name="password" type="password" required />
        </div>
        <div
          className="flex items-end space-x-1 mt-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
        <Button className="mt-2 w-full" disabled={isPending}>
          {isPending ? t("buttonLoading") : t("button")}
        </Button>
      </form>
    </>
  );
};
export default LoginForm;
