"use client";

import { useState } from "react";
import Link from "next/link";

export default function PrivacyPolicy() {
  const [lang, setLang] = useState<"mk" | "en">("mk"); // Defaults to Macedonian

  const t = (mk: string, en: string) => (lang === "mk" ? mk : en);

  return (
    <div className="min-h-screen bg-sand text-espresso pt-24 pb-16 px-4 md:px-10 font-body">
      <div className="max-w-4xl mx-auto">
        
        {/* Top Navigation & Language Toggle */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <Link href="/" className="font-bold uppercase tracking-widest text-sm hover:text-crimson transition-colors">
            ← {t("Назад кон почетна", "Back to Home")}
          </Link>
          
          <button
            onClick={() => setLang(lang === "mk" ? "en" : "mk")}
            className="font-bold text-sm uppercase tracking-widest border-2 border-espresso px-4 py-2 hover:bg-espresso hover:text-sand transition-colors"
          >
            {lang === "mk" ? "EN" : "MK"}
          </button>
        </div>

        <h1 className="font-poster text-5xl md:text-8xl uppercase leading-[0.8] mb-12">
          {t("Политика за", "Privacy")}<br/>
          {t("Приватност", "Policy")}
        </h1>

        <div className="space-y-8 text-lg leading-relaxed text-espresso/80">
          
          <section>
            <h2 className="text-2xl font-bold text-espresso mb-4">1. {t("Вовед", "Introduction")}</h2>
            <p>
              {t(
                "Во TIGRE Cafe Битола, го почитуваме вашето право на приватност. Овој веб-сајт е статична информативна страница. Ние немаме систем за кориснички сметки, логирање или коментари, што значи дека не собираме, не складираме и не обработуваме никакви лични податоци (како имиња, е-пошта или телефонски броеви) преку овој веб-сајт.",
                "At TIGRE Cafe Bitola, we respect your privacy. This website is a static informational site. We do not have user accounts, login systems, or comment sections, meaning we do not collect, store, or process any personal data (such as names, emails, or phone numbers) through this website."
              )}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-espresso mb-4">2. {t("Услуги од трети страни (Колачиња и Фонтови)", "Third-Party Services (Cookies & Fonts)")}</h2>
            <p className="mb-4">
              {t(
                "Иако не користиме колачиња за следење или маркетинг, овој веб-сајт се потпира на надворешни услуги за да функционира и да изгледа убаво:",
                "While we do not use tracking or marketing cookies, this website relies on external services to function and look beautiful:"
              )}
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Google Fonts:</strong>{" "}
                {t(
                  "Користиме Google Fonts за приказ на нашиот текст. Кога ја посетувате нашата страница, вашиот прелистувач може да ги побара овие фонтови директно од серверите на Google, кои може да ја евидентираат вашата IP адреса.",
                  "We use Google Fonts to display our typography. When you visit our site, your browser may request these fonts directly from Google's servers, which may log your IP address."
                )}
              </li>
              <li>
                <strong>{t("Надворешни слики", "External Images")}:</strong>{" "}
                {t(
                  "Нашите слики се хостирани на надворешни сервери (вклучувајќи ја официјалната веб-страница на Tigre Coffee). Вчитувањето на овие слики може да го изложи вашиот прелистувач на нивните соодветни политики за приватност.",
                  "Our images are hosted on external servers (including the official Tigre Coffee website). Loading these images may subject your browser to their respective privacy policies."
                )}
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-espresso mb-4">3. {t("Аналитика и следење", "Analytics & Tracking")}</h2>
            <p>
              {t(
                "Ние не користиме Google Analytics, Facebook Pixels или кој било друг софтвер за следење. Не знаеме кои сте, од каде доаѓате или на што кликнавте на нашиот сајт.",
                "We do not use Google Analytics, Facebook Pixels, or any other tracking software. We do not know who you are, where you came from, or what you clicked on our site."
              )}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-espresso mb-4">4. {t("Ваши права", "Your Rights")}</h2>
            <p>
              {t(
                "Бидејќи не собираме лични податоци, нема податоци што треба да ги избришеме, измениме или извеземе. Доколку имате какви било прашања во врска со оваа политика, можете да не контактирате директно во кафето или преку нашиот Instagram (@cafe_tigre).",
                "Because we do not collect personal data, there is no data for us to delete, modify, or export. If you have any questions about this policy, you can contact us directly at the cafe or via our Instagram (@cafe_tigre)."
              )}
            </p>
          </section>
          
          <section className="border-t-2 border-espresso/20 pt-8 mt-12">
            <p className="text-sm font-bold uppercase tracking-widest opacity-50">
              {t("Последно ажурирање", "Last updated")}: {new Date().toLocaleDateString(lang === "mk" ? "mk-MK" : "en-US", { month: "long", year: "numeric" })}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}