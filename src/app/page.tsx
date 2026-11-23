"use client";

import { useState } from "react";
import Link from "next/link"; // Added for the Privacy Policy link
import { CookieBanner } from "../components/CookieBanner"; // Added Cookie Banner

export default function TigrePage() {
  const [lang, setLang] = useState<"mk" | "en">("mk");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = (mk: string, en: string) => (lang === "mk" ? mk : en);

  return (
    <main className="min-h-screen font-body pt-16 md:pt-24 w-full overflow-x-hidden">

      {/* MOBILE-FRIENDLY HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 md:px-10 md:py-4 border-b-2 border-espresso bg-sand/95 backdrop-blur-md">
        <div className="flex items-center gap-2 md:gap-4">
          <img src="https://tigrecoffee.com/images/opt/tiger-logo-320.webp" alt="Tigre Logo" className="h-10 md:h-14 w-auto" />
          <span className="font-poster text-3xl md:text-4xl tracking-widest mt-1 hidden sm:block">TIGRE</span>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#about" className="font-bold text-sm uppercase tracking-widest hover:text-crimson transition-colors">
            {t("Кои сме ние", "About Us")}
          </a>
          <a href="#menu" className="font-bold text-sm uppercase tracking-widest hover:text-crimson transition-colors">
            {t("Мени", "Menu")}
          </a>
          <button
            onClick={() => setLang(lang === "mk" ? "en" : "mk")}
            className="font-bold text-sm uppercase tracking-widest border-2 border-espresso px-4 py-2 hover:bg-espresso hover:text-sand transition-colors"
          >
            {lang === "mk" ? "EN" : "MK"}
          </button>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => setLang(lang === "mk" ? "en" : "mk")}
            className="font-bold text-xs uppercase tracking-widest border-2 border-espresso px-3 py-1.5"
          >
            {lang === "mk" ? "EN" : "MK"}
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-espresso">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-sand flex flex-col items-center justify-center gap-8 md:hidden">
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="font-poster text-5xl uppercase hover:text-crimson">
            {t("Кои сме ние", "About Us")}
          </a>
          <a href="#menu" onClick={() => setMobileMenuOpen(false)} className="font-poster text-5xl uppercase hover:text-crimson">
            {t("Мени", "Menu")}
          </a>
          <a href="#visit" onClick={() => setMobileMenuOpen(false)} className="font-poster text-5xl uppercase hover:text-crimson">
            {t("Посети нѐ", "Visit Us")}
          </a>
          <button onClick={() => setMobileMenuOpen(false)} className="mt-8 border-2 border-espresso px-6 py-3 font-bold uppercase tracking-widest">
            {t("Затвори", "Close")}
          </button>
        </div>
      )}

      {/* HERO */}
      <section className="relative flex flex-col justify-center px-4 md:px-10 py-12 md:py-32 border-b-2 border-espresso">
        <div className="max-w-[1600px] mx-auto w-full grid lg:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="lg:col-span-8">
            <p className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-burnt mb-4 md:mb-6">
              {t("Специјалитетно кафе · Битола", "Specialty Coffee · Bitola")}
            </p>
            <h1 className="font-poster text-[22vw] md:text-[15vw] lg:text-[18rem] leading-[0.8] uppercase text-espresso">
              TIGRE<br />
              <span className="text-outline text-transparent">BITOLA</span>
            </h1>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-6 md:gap-8 mt-8 lg:mt-0">
            <div className="aspect-[4/5] md:aspect-[3/4] bg-roast relative overflow-hidden border-2 border-espresso shadow-[8px_8px_0_#D96518] md:shadow-[16px_16px_0_#D96518] group">
              <img
                src="https://tigrecoffee.com/images/opt/specialty-espresso-trio-1200.webp"
                alt="Tigre Espresso"
                className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
            </div>
            <p className="text-lg md:text-2xl font-medium leading-snug border-l-4 border-crimson pl-4 md:pl-6">
              {t(
                "Стар индустриски агол, ново темпо. Кафе, коктели и музика во срцето на Битола.",
                "An old industrial corner. A new tempo. Coffee, cocktails, and music in the heart of Bitola."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="border-y-2 border-espresso bg-crimson text-sand py-3 md:py-4 overflow-hidden relative">
        <div className="animate-marquee-slow font-poster text-2xl md:text-4xl uppercase tracking-widest">
          {Array(10).fill(t("Специјалитетно кафе · TIGRE · Битола · ", "Specialty Coffee · TIGRE · Bitola · ")).map((text, i) => (
            <span key={i} className="mx-4">{text}</span>
          ))}
          {Array(10).fill(t("Специјалитетно кафе · TIGRE · Битола · ", "Specialty Coffee · TIGRE · Bitola · ")).map((text, i) => (
            <span key={`dup-${i}`} className="mx-4">{text}</span>
          ))}
        </div>
      </div>

      {/* ABOUT US */}
      <section id="about" className="px-4 md:px-10 py-16 md:py-32 border-b-2 border-espresso bg-sand">
        <div className="max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="font-poster text-5xl md:text-8xl uppercase leading-[0.8] mb-6 md:mb-8">
              {t("Кои сме", "Who Are")}<br/>
              <span className="text-burnt">{t("ние", "We")}</span>
            </h2>
            <p className="text-xl md:text-2xl font-bold mb-4 md:mb-6">{t("Стар индустриски агол, ново темпо.", "An old industrial corner. A new tempo.")}</p>
            <p className="text-base md:text-xl leading-relaxed mb-4 md:mb-6 text-espresso/80">
              {t(
                "TIGRE живее во еден полу-заборавен агол од старата трикотажа Пелистер во Битола, каде индустриската архитектура се среќава со мирна, топла атмосфера. Ништо не е принудено, ниту преуредено до совршенство, само простор оставен да дише.",
                "TIGRE lives in a half-forgotten corner of the old Pelister knitwear factory in Bitola, where industrial architecture meets a calm, warm atmosphere. Nothing is forced or over-perfected, just a space left to breathe."
              )}
            </p>
            <p className="text-base md:text-xl leading-relaxed mb-8 md:mb-10 text-espresso/80">
              {t(
                "Од утринско еспресо до вечерен коктел, TIGRE расте заедно со луѓето што го посетуваат, домаќин е на настани, музички вечери и обични попладниња.",
                "From morning espresso to evening cocktails, TIGRE grows together with the people who visit it, hosting events, music nights, and ordinary afternoons."
              )}
            </p>
            <div className="grid grid-cols-3 gap-2 md:gap-4 border-t-2 border-espresso pt-6 md:pt-8">
              <div>
                <p className="font-poster text-3xl md:text-4xl text-crimson">3.8K+</p>
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest opacity-60 mt-1">{t("Следбеници", "Followers")}</p>
              </div>
              <div>
                <p className="font-poster text-3xl md:text-4xl text-crimson">4.9★</p>
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest opacity-60 mt-1">Google {t("Оценка", "Rating")}</p>
              </div>
              <div>
                <p className="font-poster text-3xl md:text-4xl text-crimson">124</p>
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest opacity-60 mt-1">Google {t("Рецензии", "Reviews")}</p>
              </div>
            </div>
          </div>
          <div className="relative aspect-square md:aspect-[4/5] border-2 border-espresso shadow-[-8px_8px_0_#D90368] md:shadow-[-12px_12px_0_#D90368] group overflow-hidden mt-8 lg:mt-0">
            <img
              src="https://tigrecoffee.com/images/opt/coffee-bean-bags-shelf-480.webp"
              alt="About Tigre"
              className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            />
          </div>
        </div>
      </section>

      {/* THE MURAL */}
      <section className="px-4 md:px-10 py-16 md:py-32 border-b-2 border-espresso bg-espresso text-sand">
        <div className="max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 relative aspect-square border-2 border-sand group overflow-hidden mt-8 lg:mt-0">
            <img
              src="https://tigrecoffee.com/images/opt/mural-blue-collar-love-900.webp"
              alt="Tigre Mural"
              className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-poster text-5xl md:text-8xl uppercase leading-[0.8] mb-6 md:mb-8 text-burnt">
              {t("Муралот", "The Mural")}
            </h2>
            <h3 className="text-xl md:text-3xl font-bold mb-4 md:mb-6">{t("Љубов под синиот ритам", "Love Under the Blue Rhythm")}</h3>
            <div className="text-base md:text-lg leading-relaxed space-y-4 text-sand/80">
              <p>
                {t(
                  "Во старите ѕидови на Трикотажа Пелистер, каде што со години се слушале машините, чекорите и гласовите на работниците, се родила една тивка љубовна приказна.",
                  "On the old walls of the Pelister knitwear factory, where machines, footsteps, and workers' voices were heard for years, a quiet love story was born."
                )}
              </p>
              <p>
                {t(
                  "Тие биле двајца работници. Секој ден доаѓале во својата работничка облека... Нивниот бакнеж потсетува на „Бакнежот“ на Густав Климт, симбол на љубовта што ги надминува времето, работата и секојдневието.",
                  "They were two workers. Every day they came in their work clothes... Their kiss is reminiscent of Gustav Klimt's 'The Kiss'—a symbol of love that transcends time, labor, and everyday life."
                )}
              </p>
              <p className="font-bold text-burnt mt-4 md:mt-6">
                {t(
                  "Муралот е дело на Ѓорги Димитров, Жоро.",
                  "The mural is the work of Gjorgji Dimitrov, Zhoro."
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE MENU */}
      <section id="menu" className="px-4 md:px-10 py-16 md:py-32 border-b-2 border-espresso bg-sand">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="font-poster text-5xl md:text-[10rem] uppercase leading-[0.8] mb-2 md:mb-4">
              {t("Мени", "Menu")}
            </h2>
            <p className="text-lg md:text-2xl font-bold uppercase tracking-widest text-burnt">
              {t("Разгледај го нашето мени", "Explore our menu")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12 md:gap-y-24">
            {/* 1. Кафе пијалоци */}
            <div>
              <h3 className="font-poster text-3xl md:text-4xl uppercase text-crimson border-b-2 border-espresso pb-3 md:pb-4 mb-4 md:mb-6">{t("Кафе пијалоци", "Coffee Drinks")}</h3>
              <ul className="space-y-3 md:space-y-4 text-base md:text-lg">
                <li className="flex justify-between items-end"><span>Espresso</span><span className="flex-1 border-b-2 border-dotted border-espresso/30 mx-2 md:mx-4 mb-1"></span><span className="font-bold whitespace-nowrap">90 ден</span></li>
                <li className="flex justify-between items-end"><span>Double Espresso</span><span className="flex-1 border-b-2 border-dotted border-espresso/30 mx-2 md:mx-4 mb-1"></span><span className="font-bold whitespace-nowrap">130 ден</span></li>
                <li className="flex justify-between items-end"><span>Lungo</span><span className="flex-1 border-b-2 border-dotted border-espresso/30 mx-2 md:mx-4 mb-1"></span><span className="font-bold whitespace-nowrap">130 ден</span></li>
                <li className="flex justify-between items-end"><span>Americano</span><span className="flex-1 border-b-2 border-dotted border-espresso/30 mx-2 md:mx-4 mb-1"></span><span className="font-bold whitespace-nowrap">100 ден</span></li>
                <li className="flex justify-between items-end"><span>Freddo Espresso</span><span className="flex-1 border-b-2 border-dotted border-espresso/30 mx-2 md:mx-4 mb-1"></span><span className="font-bold whitespace-nowrap">140 ден</span></li>
                <li className="flex justify-between items-end"><span>Caffè Corretto</span><span className="flex-1 border-b-2 border-dotted border-espresso/30 mx-2 md:mx-4 mb-1"></span><span className="font-bold whitespace-nowrap">150 ден</span></li>
                <li className="flex justify-between items-end"><span>Espresso Tonic</span><span className="flex-1 border-b-2 border-dotted border-espresso/30 mx-2 md:mx-4 mb-1"></span><span className="font-bold whitespace-nowrap">150 ден</span></li>
              </ul>
            </div>

            {/* 2. Кафе со млеко */}
            <div>
              <h3 className="font-poster text-3xl md:text-4xl uppercase text-crimson border-b-2 border-espresso pb-3 md:pb-4 mb-4 md:mb-6">{t("Кафе со млеко", "Milk Coffee")}</h3>
              <ul className="space-y-3 md:space-y-4 text-base md:text-lg">
                <li className="flex justify-between items-end"><span>Espresso Macchiato</span><span className="flex-1 border-b-2 border-dotted border-espresso/30 mx-2 md:mx-4 mb-1"></span><span className="font-bold whitespace-nowrap">100 ден</span></li>
                <li className="flex justify-between items-end"><span>Cortado</span><span className="flex-1 border-b-2 border-dotted border-espresso/30 mx-2 md:mx-4 mb-1"></span><span className="font-bold whitespace-nowrap">120 ден</span></li>
                <li className="flex justify-between items-end"><span>Flat White</span><span className="flex-1 border-b-2 border-dotted border-espresso/30 mx-2 md:mx-4 mb-1"></span><span className="font-bold whitespace-nowrap">150 ден</span></li>
                <li className="flex justify-between items-end"><span>Cappuccino</span><span className="flex-1 border-b-2 border-dotted border-espresso/30 mx-2 md:mx-4 mb-1"></span><span className="font-bold whitespace-nowrap">120 ден</span></li>
                <li className="flex justify-between items-end"><span>Freddo Cappuccino</span><span className="flex-1 border-b-2 border-dotted border-espresso/30 mx-2 md:mx-4 mb-1"></span><span className="font-bold whitespace-nowrap">160 ден</span></li>
                <li className="flex justify-between items-end"><span>Latte</span><span className="flex-1 border-b-2 border-dotted border-espresso/30 mx-2 md:mx-4 mb-1"></span><span className="font-bold whitespace-nowrap">130 ден</span></li>
                <li className="flex justify-between items-end"><span>Flavored Latte</span><span className="flex-1 border-b-2 border-dotted border-espresso/30 mx-2 md:mx-4 mb-1"></span><span className="font-bold whitespace-nowrap">150 ден</span></li>
                <li className="flex justify-between items-end"><span>Mocha</span><span className="flex-1 border-b-2 border-dotted border-espresso/30 mx-2 md:mx-4 mb-1"></span><span className="font-bold whitespace-nowrap">150 ден</span></li>
              </ul>
              <p className="mt-3 md:mt-4 text-xs md:text-sm font-bold text-burnt uppercase">{t("Алтернативно млеко +20 ден", "Alternative milk +20 den")}</p>
            </div>

            {/* 3. Single-origin */}
            <div>
              <h3 className="font-poster text-3xl md:text-4xl uppercase text-crimson border-b-2 border-espresso pb-3 md:pb-4 mb-4 md:mb-6">{t("Single-origin", "Single-origin")}</h3>
              <ul className="space-y-3 md:space-y-4 text-base md:text-lg">
                <li className="flex flex-col md:flex-row md:justify-between md:items-end gap-1 md:gap-0">
                  <span>Espresso <span className="text-sm opacity-60 block md:inline">(Ethiopia, Kenya, Honduras, Costa Rica, Brazil, Columbia)</span></span>
                  <span className="flex-1 border-b-2 border-dotted border-espresso/30 mx-2 md:mx-4 mb-1 hidden md:block"></span>
                  <span className="font-bold whitespace-nowrap">130 ден</span>
                </li>
                <li className="flex justify-between items-end"><span>Filter</span><span className="flex-1 border-b-2 border-dotted border-espresso/30 mx-2 md:mx-4 mb-1"></span><span className="font-bold whitespace-nowrap">150 ден</span></li>
              </ul>
            </div>

            {/* 4. Безалкохолни */}
            <div>
              <h3 className="font-poster text-3xl md:text-4xl uppercase text-crimson border-b-2 border-espresso pb-3 md:pb-4 mb-4 md:mb-6">{t("Безалкохолни", "Non-Alcoholic")}</h3>
              <ul className="space-y-3 md:space-y-4 text-base md:text-lg">
                <li className="flex justify-between items-end"><span>{t("Свежо цеден сок", "Freshly squeezed juice")}</span><span className="flex-1 border-b-2 border-dotted border-espresso/30 mx-2 md:mx-4 mb-1"></span><span className="font-bold whitespace-nowrap">160 ден</span></li>
                <li className="flex justify-between items-end"><span>{t("Лимонада", "Lemonade")}</span><span className="flex-1 border-b-2 border-dotted border-espresso/30 mx-2 md:mx-4 mb-1"></span><span className="font-bold whitespace-nowrap">120 ден</span></li>
                <li className="flex justify-between items-end"><span>{t("Домашен refresher", "Homemade refresher")}</span><span className="flex-1 border-b-2 border-dotted border-espresso/30 mx-2 md:mx-4 mb-1"></span><span className="font-bold whitespace-nowrap">140 ден</span></li>
                <li className="flex justify-between items-end"><span>{t("Домашна грејпфрут сода", "Homemade grapefruit soda")}</span><span className="flex-1 border-b-2 border-dotted border-espresso/30 mx-2 md:mx-4 mb-1"></span><span className="font-bold whitespace-nowrap">150 ден</span></li>
                <li className="flex justify-between items-end"><span>{t("Газирани пијалоци", "Carbonated drinks")}</span><span className="flex-1 border-b-2 border-dotted border-espresso/30 mx-2 md:mx-4 mb-1"></span><span className="font-bold whitespace-nowrap">140 ден</span></li>
                <li className="flex justify-between items-end"><span>{t("Сокови", "Juices")}</span><span className="flex-1 border-b-2 border-dotted border-espresso/30 mx-2 md:mx-4 mb-1"></span><span className="font-bold whitespace-nowrap">110 ден</span></li>
                <li className="flex justify-between items-end"><span>{t("Газирана вода", "Sparkling water")}</span><span className="flex-1 border-b-2 border-dotted border-espresso/30 mx-2 md:mx-4 mb-1"></span><span className="font-bold whitespace-nowrap">60 / 120 ден</span></li>
                <li className="flex justify-between items-end"><span>{t("Флаширана вода", "Bottled water")}</span><span className="flex-1 border-b-2 border-dotted border-espresso/30 mx-2 md:mx-4 mb-1"></span><span className="font-bold whitespace-nowrap">60 / 120 ден</span></li>
              </ul>
            </div>

            {/* 5. Матча & топли */}
            <div>
              <h3 className="font-poster text-3xl md:text-4xl uppercase text-crimson border-b-2 border-espresso pb-3 md:pb-4 mb-4 md:mb-6">{t("Матча & топли", "Matcha & Hot")}</h3>
              <ul className="space-y-3 md:space-y-4 text-base md:text-lg">
                <li className="flex justify-between items-end"><span>Matcha Latte</span><span className="flex-1 border-b-2 border-dotted border-espresso/30 mx-2 md:mx-4 mb-1"></span><span className="font-bold whitespace-nowrap">130 ден</span></li>
                <li className="flex justify-between items-end"><span>Flavored Matcha</span><span className="flex-1 border-b-2 border-dotted border-espresso/30 mx-2 md:mx-4 mb-1"></span><span className="font-bold whitespace-nowrap">150 ден</span></li>
                <li className="flex justify-between items-end"><span>Matcha Specialty</span><span className="flex-1 border-b-2 border-dotted border-espresso/30 mx-2 md:mx-4 mb-1"></span><span className="font-bold whitespace-nowrap">190 ден</span></li>
                <li className="flex justify-between items-end"><span>{t("Топла чоколада", "Hot chocolate")}</span><span className="flex-1 border-b-2 border-dotted border-espresso/30 mx-2 md:mx-4 mb-1"></span><span className="font-bold whitespace-nowrap">140 ден</span></li>
                <li className="flex justify-between items-end"><span>{t("Какао", "Cocoa")}</span><span className="flex-1 border-b-2 border-dotted border-espresso/30 mx-2 md:mx-4 mb-1"></span><span className="font-bold whitespace-nowrap">100 ден</span></li>
                <li className="flex justify-between items-end"><span>{t("Чај", "Tea")}</span><span className="flex-1 border-b-2 border-dotted border-espresso/30 mx-2 md:mx-4 mb-1"></span><span className="font-bold whitespace-nowrap">100 ден</span></li>
              </ul>
            </div>

            {/* 6. Коктели */}
            <div>
              <h3 className="font-poster text-3xl md:text-4xl uppercase text-crimson border-b-2 border-espresso pb-3 md:pb-4 mb-4 md:mb-6">{t("Коктели", "Cocktails")}</h3>
              <ul className="space-y-3 md:space-y-4 text-base md:text-lg">
                <li>
                  <div className="flex justify-between items-end"><span className="font-bold">Espresso Martini</span><span className="flex-1 border-b-2 border-dotted border-espresso/30 mx-2 md:mx-4 mb-1"></span><span className="font-bold whitespace-nowrap">250 ден</span></div>
                  <p className="text-xs md:text-sm opacity-60">vodka · еспресо · Kahlúa</p>
                </li>
                <li>
                  <div className="flex justify-between items-end"><span className="font-bold">Mimosa</span><span className="flex-1 border-b-2 border-dotted border-espresso/30 mx-2 md:mx-4 mb-1"></span><span className="font-bold whitespace-nowrap">250 ден</span></div>
                  <p className="text-xs md:text-sm opacity-60">просеко · портокалов сок</p>
                </li>
                <li>
                  <div className="flex justify-between items-end"><span className="font-bold">Aperol Spritz</span><span className="flex-1 border-b-2 border-dotted border-espresso/30 mx-2 md:mx-4 mb-1"></span><span className="font-bold whitespace-nowrap">250 ден</span></div>
                  <p className="text-xs md:text-sm opacity-60">aperol · просеко · газирана вода</p>
                </li>
                <li>
                  <div className="flex justify-between items-end"><span className="font-bold">Limoncello Spritz</span><span className="flex-1 border-b-2 border-dotted border-espresso/30 mx-2 md:mx-4 mb-1"></span><span className="font-bold whitespace-nowrap">250 ден</span></div>
                  <p className="text-xs md:text-sm opacity-60">лимончело · просеко · газирана вода</p>
                </li>
                <li>
                  <div className="flex justify-between items-end"><span className="font-bold">Old Fashioned</span><span className="flex-1 border-b-2 border-dotted border-espresso/30 mx-2 md:mx-4 mb-1"></span><span className="font-bold whitespace-nowrap">250 ден</span></div>
                  <p className="text-xs md:text-sm opacity-60">whiskey · битер · сируп</p>
                </li>
                <li>
                  <div className="flex justify-between items-end"><span className="font-bold">Negroni</span><span className="flex-1 border-b-2 border-dotted border-espresso/30 mx-2 md:mx-4 mb-1"></span><span className="font-bold whitespace-nowrap">300 ден</span></div>
                  <p className="text-xs md:text-sm opacity-60">gin · campari · вермут</p>
                </li>
                <li>
                  <div className="flex justify-between items-end"><span className="font-bold">Margarita</span><span className="flex-1 border-b-2 border-dotted border-espresso/30 mx-2 md:mx-4 mb-1"></span><span className="font-bold whitespace-nowrap">250 ден</span></div>
                  <p className="text-xs md:text-sm opacity-60">tequila · triple sec · лимон · сируп</p>
                </li>
                <li>
                  <div className="flex justify-between items-end"><span className="font-bold">Cosmopolitan</span><span className="flex-1 border-b-2 border-dotted border-espresso/30 mx-2 md:mx-4 mb-1"></span><span className="font-bold whitespace-nowrap">250 ден</span></div>
                  <p className="text-xs md:text-sm opacity-60">vodka · triple sec · лајм · брусница</p>
                </li>
                <li>
                  <div className="flex justify-between items-end"><span className="font-bold">Gin & Tonic</span><span className="flex-1 border-b-2 border-dotted border-espresso/30 mx-2 md:mx-4 mb-1"></span><span className="font-bold whitespace-nowrap">200 ден</span></div>
                </li>
              </ul>
            </div>

            {/* 7. Алкохол */}
            <div>
              <h3 className="font-poster text-3xl md:text-4xl uppercase text-crimson border-b-2 border-espresso pb-3 md:pb-4 mb-4 md:mb-6">{t("Алкохол", "Alcohol")}</h3>
              <ul className="space-y-3 md:space-y-4 text-base md:text-lg">
                <li className="flex justify-between items-end"><span>Gin</span><span className="flex-1 border-b-2 border-dotted border-espresso/30 mx-2 md:mx-4 mb-1"></span><span className="font-bold whitespace-nowrap">150 / 300 ден</span></li>
                <li className="flex justify-between items-end"><span>Rum</span><span className="flex-1 border-b-2 border-dotted border-espresso/30 mx-2 md:mx-4 mb-1"></span><span className="font-bold whitespace-nowrap">120 ден</span></li>
                <li className="flex justify-between items-end"><span>Vodka</span><span className="flex-1 border-b-2 border-dotted border-espresso/30 mx-2 md:mx-4 mb-1"></span><span className="font-bold whitespace-nowrap">120 / 300 ден</span></li>
                <li className="flex justify-between items-end"><span>Tequila</span><span className="flex-1 border-b-2 border-dotted border-espresso/30 mx-2 md:mx-4 mb-1"></span><span className="font-bold whitespace-nowrap">150 / 300 ден</span></li>
                <li className="flex justify-between items-end"><span>Brandy</span><span className="flex-1 border-b-2 border-dotted border-espresso/30 mx-2 md:mx-4 mb-1"></span><span className="font-bold whitespace-nowrap">100 ден</span></li>
                <li className="flex justify-between items-end"><span>Whiskey</span><span className="flex-1 border-b-2 border-dotted border-espresso/30 mx-2 md:mx-4 mb-1"></span><span className="font-bold whitespace-nowrap">160 / 300 ден</span></li>
                <li className="flex justify-between items-end"><span>{t("Ракија", "Rakija")}</span><span className="flex-1 border-b-2 border-dotted border-espresso/30 mx-2 md:mx-4 mb-1"></span><span className="font-bold whitespace-nowrap">120 ден</span></li>
                <li className="flex justify-between items-end"><span>{t("Пиво", "Beer")}</span><span className="flex-1 border-b-2 border-dotted border-espresso/30 mx-2 md:mx-4 mb-1"></span><span className="font-bold whitespace-nowrap">160 ден</span></li>
                <li className="flex justify-between items-end"><span>{t("Вино", "Wine")}</span><span className="flex-1 border-b-2 border-dotted border-espresso/30 mx-2 md:mx-4 mb-1"></span><span className="font-bold whitespace-nowrap">150 ден</span></li>
                <li className="flex justify-between items-end"><span>{t("Ликер", "Liqueur")}</span><span className="flex-1 border-b-2 border-dotted border-espresso/30 mx-2 md:mx-4 mb-1"></span><span className="font-bold whitespace-nowrap">140 / 200 ден</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="px-4 md:px-10 py-16 md:py-32 bg-roast">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="font-poster text-5xl md:text-8xl uppercase leading-[0.8] mb-8 md:mb-16 text-sand text-center">
            {t("Галерија", "Gallery")}
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 auto-rows-[150px] md:auto-rows-[300px]">
            <div className="col-span-2 row-span-2 relative overflow-hidden group border-2 border-sand">
              <img src="https://tigrecoffee.com/images/opt/flatwhite-grapefruit-soda-480.webp" alt="Gallery 1" className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
            </div>
            <div className="col-span-1 row-span-1 relative overflow-hidden group border-2 border-sand">
              <img src="https://tigrecoffee.com/images/opt/latte-flower-flatlay-480.webp" alt="Gallery 2" className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
            </div>
            <div className="col-span-1 row-span-2 relative overflow-hidden group border-2 border-sand">
              <img src="https://tigrecoffee.com/images/opt/refresher-mint-lemon-480.webp" alt="Gallery 3" className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
            </div>
            <div className="col-span-1 row-span-1 relative overflow-hidden group border-2 border-sand">
              <img src="https://tigrecoffee.com/images/opt/latte-art-orange-cup-480.webp" alt="Gallery 4" className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
            </div>
            <div className="col-span-2 row-span-1 relative overflow-hidden group border-2 border-sand hidden md:block">
              <img src="https://tigrecoffee.com/images/opt/coffee-bean-bags-shelf-480.webp" alt="Gallery 5" className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
            </div>
            <div className="col-span-1 row-span-1 relative overflow-hidden group border-2 border-sand">
              <img src="https://tigrecoffee.com/images/opt/waterfall-view-480.webp" alt="Gallery 6" className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
            </div>
            <div className="col-span-2 row-span-2 relative overflow-hidden group border-2 border-sand">
              <img src="https://tigrecoffee.com/images/og-cover.jpg" alt="Gallery 7" className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
            </div>
            <div className="col-span-1 row-span-1 relative overflow-hidden group border-2 border-sand">
              <img src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=800&auto=format&fit=crop" alt="Gallery 8" className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
            </div>
            <div className="col-span-1 row-span-1 relative overflow-hidden group border-2 border-sand hidden md:block">
              <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop" alt="Gallery 9" className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* VISIT US - LIGHTER PEACH COLOR & FIXED CYRILLIC TITLE */}
      <section id="visit" className="px-4 md:px-10 py-16 md:py-32 bg-peach text-espresso border-t-2 border-espresso">
        <div className="max-w-[1600px] mx-auto">
          
          {/* FIXED TITLE WITH CORRECT CYRILLIC ACCENT */}
          <h2 className="font-poster text-[18vw] md:text-[10rem] uppercase mb-12 md:mb-16 flex flex-col leading-[1.1]">
            <span>{t("Посети", "Visit")}</span>
            <span>{t("нѐ", "Us")}</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
            <div className="space-y-8 md:space-y-12">
              <div>
                <p className="text-xs md:text-sm font-bold uppercase tracking-widest opacity-60 mb-1 md:mb-2">{t("Адреса", "Address")}</p>
                <p className="text-3xl md:text-5xl font-bold">Deveani 13, Bitola 7000</p>
              </div>
              <div>
                <p className="text-xs md:text-sm font-bold uppercase tracking-widest opacity-60 mb-1 md:mb-2">{t("Работно време", "Hours")}</p>
                <p className="text-3xl md:text-5xl font-bold">{t("Секој ден · 09:00 – 00:00", "Every day · 09:00 – 00:00")}</p>
              </div>
              <div>
                <p className="text-xs md:text-sm font-bold uppercase tracking-widest opacity-60 mb-1 md:mb-2">{t("Телефон", "Phone")}</p>
                <a href="tel:+38971344400" className="text-3xl md:text-5xl font-bold hover:text-crimson transition-colors block">
                  071 344 400
                </a>
              </div>
            </div>
            <div className="space-y-8 md:space-y-12">
              <div>
                <p className="text-xs md:text-sm font-bold uppercase tracking-widest opacity-60 mb-1 md:mb-2">Instagram</p>
                <a href="https://www.instagram.com/cafe_tigre/" target="_blank" rel="noreferrer" className="text-3xl md:text-5xl font-bold hover:text-crimson transition-colors block">
                  @cafe_tigre
                </a>
              </div>
              <div>
                <p className="text-xs md:text-sm font-bold uppercase tracking-widest opacity-60 mb-1 md:mb-2">{t("Рејтинг", "Rating")}</p>
                <p className="text-3xl md:text-5xl font-bold">4.9 ★ · 124 Google Reviews</p>
              </div>
              <div className="aspect-video bg-espresso border-2 border-espresso relative overflow-hidden group mt-6 md:mt-0">
                <img src="https://tigrecoffee.com/images/og-cover.jpg" alt="Tigre Cafe" className="object-cover w-full h-full opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-4 md:px-10 py-12 md:py-16 bg-espresso text-sand text-center border-t-2 border-espresso">
        <p className="font-poster text-7xl md:text-8xl uppercase mb-2 md:mb-4 tracking-widest text-burnt">TIGRE</p>
        <p className="text-xs md:text-sm font-bold uppercase tracking-widest opacity-50 mb-6">
          © {new Date().getFullYear()} Tigre Cafe Bitola. {t("Сите права задржани.", "All rights reserved.")}
        </p>
        <div className="flex justify-center gap-6">
           <Link href="/privacy" className="text-xs md:text-sm font-bold uppercase tracking-widest text-sand/70 hover:text-burnt transition-colors">
            {t("Политика за приватност", "Privacy Policy")}
          </Link>
        </div>
      </footer>

      {/* COOKIE BANNER */}
      <CookieBanner lang={lang} />

    </main>
  );
}