import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  Zap,
  MapPin,
  Wrench,
  AlertTriangle,
  Compass,
  Sparkles,
  Sun,
  Moon,
  Github,
  Send,
  ExternalLink,
  Search,
  CheckCircle2,
  FileText,
  SlidersHorizontal,
  Layers,
  Heart
} from 'lucide-react';
import { KnowledgeBase } from './components/KnowledgeBase';

export const App: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('cs55_wiki_theme_v2');
    if (saved === 'dark' || saved === 'light') {
      return saved;
    }
    return 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
    localStorage.setItem('cs55_wiki_theme_v2', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-dark-900 text-slate-900 dark:text-slate-100 transition-colors duration-200">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 bg-white/90 dark:bg-dark-850/90 backdrop-blur-md border-b border-slate-200 dark:border-dark-750">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-brand-500 to-sky-600 flex items-center justify-center text-white shadow-md shadow-brand-500/20">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900 dark:text-white">
                  Changan CS55 Plus / UNI
                </span>
                <span className="hidden sm:inline-flex px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider bg-brand-500/10 text-brand-600 dark:text-brand-400 rounded-md border border-brand-500/20">
                  Wiki v1.0
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 hidden xs:block">
                Интерактивная база знаний, схемы, DTC и регламенты ТО
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-dark-750 border border-slate-200/60 dark:border-transparent transition"
              title="Переключить тему оформления"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
            </button>

            {/* GitHub link */}
            <a
              href="https://github.com/scanek/changan-cs55-wiki"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 dark:bg-dark-750 dark:hover:bg-dark-700 text-slate-700 dark:text-slate-200 border border-slate-200/60 dark:border-transparent transition"
              title="Репозиторий на GitHub"
            >
              <Github className="w-4 h-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6">
        {/* Compact Hero Banner with Stats */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-brand-600 via-brand-700 to-indigo-800 dark:from-slate-900 dark:via-dark-850 dark:to-slate-900 border border-brand-500/30 dark:border-dark-750 text-white p-4 sm:p-5 shadow-lg shadow-brand-500/5 dark:shadow-none">
          <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-white/10 dark:bg-brand-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1.5 max-w-xl">
              <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-white/15 dark:bg-brand-500/20 border border-white/20 dark:border-brand-500/30 text-white dark:text-brand-300 text-[11px] font-bold backdrop-blur-sm">
                <Sparkles className="w-3 h-3" />
                <span>Официальные сервисные данные Changan CS55 Plus & UNI-S</span>
              </div>
              <h1 className="text-xl sm:text-2xl font-black tracking-tight">
                База знаний и сервисный справочник
              </h1>
              <p className="text-xs text-sky-100 dark:text-slate-300 leading-relaxed">
                Схемы проводки, распиновка предохранителей, 1 391 код ошибок DTC, калибровки и сервисный мануал 1 719 стр.
              </p>
            </div>

            {/* Key stats in a neat row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 flex-shrink-0">
              <div className="px-3 py-2 rounded-xl bg-white/10 dark:bg-white/5 border border-white/15 dark:border-white/10 backdrop-blur-sm text-center">
                <div className="text-base sm:text-lg font-black text-white dark:text-brand-400">1 391</div>
                <div className="text-[10px] text-sky-100 dark:text-slate-400">Кодов DTC</div>
              </div>
              <div className="px-3 py-2 rounded-xl bg-white/10 dark:bg-white/5 border border-white/15 dark:border-white/10 backdrop-blur-sm text-center">
                <div className="text-base sm:text-lg font-black text-emerald-300 dark:text-emerald-400">674</div>
                <div className="text-[10px] text-sky-100 dark:text-slate-400">Схемы WebP</div>
              </div>
              <div className="px-3 py-2 rounded-xl bg-white/10 dark:bg-white/5 border border-white/15 dark:border-white/10 backdrop-blur-sm text-center">
                <div className="text-base sm:text-lg font-black text-purple-200 dark:text-purple-400">1 719</div>
                <div className="text-[10px] text-sky-100 dark:text-slate-400">Стр. мануала</div>
              </div>
              <div className="px-3 py-2 rounded-xl bg-white/10 dark:bg-white/5 border border-white/15 dark:border-white/10 backdrop-blur-sm text-center">
                <div className="text-base sm:text-lg font-black text-amber-300 dark:text-amber-400">4 блока</div>
                <div className="text-[10px] text-sky-100 dark:text-slate-400">Предохранителей</div>
              </div>
            </div>
          </div>
        </div>

        {/* The Core Knowledge Base Component */}
        <KnowledgeBase />
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-200 dark:border-dark-750 bg-white dark:bg-dark-850 py-8 text-center text-xs text-slate-500 dark:text-slate-400">
        <div className="max-w-7xl mx-auto px-4 space-y-3">
          <div className="flex items-center justify-center space-x-2 text-slate-700 dark:text-slate-300 font-bold">
            <span>Changan CS55 Plus / UNI Community Wiki</span>
          </div>
          <p className="max-w-xl mx-auto text-[11px] leading-relaxed text-slate-400 dark:text-slate-500">
            Схемы, технические регламенты и процедуры собраны из открытых сервисных руководств и мануалов Changan Automobile. Проект создан на энтузиазме для одноклубников, полностью бесплатен и открыт для контрибьюта.
          </p>
          <div className="pt-2 flex items-center justify-center space-x-4 text-xs">
            <a
              href="https://github.com/scanek/changan-cs55-wiki"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-500 transition inline-flex items-center space-x-1 font-semibold"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Репозиторий на GitHub</span>
            </a>
            <span>•</span>
            <a
              href="https://github.com/scanek/to_auto"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-500 transition inline-flex items-center space-x-1 font-semibold"
            >
              <span>Основной сервис «Бортовой Журнал»</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
