"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function CookieBanner({ lang }: { lang: "mk" | "en" }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already accepted
    const consent = localStorage.getItem("tigre-cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("tigre-cookie-consent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  const t = (mk: string, en: string) => (lang === "mk" ? mk : en);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-espresso text-sand border-t-4 border-burnt p-4 md:p-6 shadow-2xl">
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        
        <div className="text-sm md:text-base leading-relaxed max-w-4xl">
          <p>
            {t(
              "Овој сајт користи Google Fonts и надворешни слики. Ние не користиме маркетинг колачиња, ниту пак собираме или продаваме ваши лични податоци.",
              "This site uses Google Fonts and external images. We do not use marketing cookies, nor do we collect or sell your personal data."
            )}{" "}
            <Link href="/privacy" className="text-burnt font-bold underline decoration-2 underline-offset-4 hover:text-crimson transition-colors">
              {t("Повеќе во нашата политика за приватност.", "Read more in our privacy policy.")}
            </Link>
          </p>
        </div>

        <button
          onClick={acceptCookies}
          className="w-full md:w-auto bg-burnt text-espresso px-8 py-3 font-bold uppercase tracking-widest text-sm hover:bg-sand transition-colors whitespace-nowrap"
        >
          {t("Разбирам", "I understand")}
        </button>

      </div>
    </div>
  );
}