import React, { useState, useMemo } from 'react';
import {
  Zap,
  Search,
  X,
  SlidersHorizontal,
  Lightbulb,
  MapPin,
  Sparkles,
  AlertTriangle,
  BookOpen,
  Wrench,
  Droplets,
  Disc,
  CheckCircle2,
  ExternalLink,
  Copy,
  Check,
  Maximize2,
  Info,
  Layers,
  Eye,
  Download,
  FileText,
  Archive,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Cpu,
  Compass,
  ShieldAlert,
  ChevronRight,
  Clock,
  Gauge
} from 'lucide-react';
import { FuseBox, FuseItem, SchemeItem } from '../types';
import { getAssetUrl } from '../utils/assets';
import { CHANGAN_CS55_PLUS_FUSE_BOXES } from '../data/fuseBoxesData';
import { DTC_CODES_DATABASE, SYSTEM_GLOSSARY } from '../data/dtcCodesData';
import { CHANGAN_CS55_PLUS_SPECS } from '../data/vehicleSpecsData';
import { SCHEMES_CATALOG } from '../data/schemesCatalogData';
import { SERVICE_PROCEDURES, ServiceProcedure } from '../data/serviceProceduresData';
import { MANUAL_SECTIONS, ManualSection } from '../data/manualNavigationData';



type KnowledgeSubTab = 'fuses' | 'atlas' | 'procedures' | 'manual' | 'dtc' | 'specs' | 'glossary';

export const KnowledgeBase: React.FC<{ initialTab?: KnowledgeSubTab; onTabChange?: (tab: KnowledgeSubTab) => void }> = ({ initialTab, onTabChange }) => {
  const [subTab, setSubTabState] = useState<KnowledgeSubTab>(initialTab || 'fuses');
  const setSubTab = (t: KnowledgeSubTab) => { setSubTabState(t); onTabChange?.(t); };
  const [demoMode, setDemoMode] = useState<boolean>(false);

  // Brand check: Changan or UNI
  const isChangan = true;

  // FUSE BOX STATE
  const [activeBoxId, setActiveBoxId] = useState<string>('cabin_p01');
  const [fuseSearchQuery, setFuseSearchQuery] = useState<string>('');
  const [selectedPowerType, setSelectedPowerType] = useState<string>('all');
  const [activePreset, setActivePreset] = useState<string>('all');
  const [viewingSchemeImage, setViewingSchemeImage] = useState<string | null>(null);

  // ATLAS SCHEMES STATE
  const [atlasSearchQuery, setAtlasSearchQuery] = useState<string>('');
  const [selectedAtlasCat, setSelectedAtlasCat] = useState<string>('all');
  const [atlasLimit, setAtlasLimit] = useState<number>(36);
  const [activeModalScheme, setActiveModalScheme] = useState<SchemeItem | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  // PROCEDURES STATE
  const [selectedProcId, setSelectedProcId] = useState<string>('reset_service_interval');
  const [procSearchQuery, setProcSearchQuery] = useState<string>('');

  // MANUAL NAV STATE
  const [manualSearchQuery, setManualSearchQuery] = useState<string>('');

  // DTC STATE
  const [dtcSearchQuery, setDtcSearchQuery] = useState<string>('');
  const [selectedDtcCategory, setSelectedDtcCategory] = useState<string>('all');
  const [dtcScopeFilter, setDtcScopeFilter] = useState<'all' | 'standard' | 'changan'>('all');
  const [dtcLimit, setDtcLimit] = useState<number>(50);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  // SPECS STATE
  const [activeSpecCategory, setActiveSpecCategory] = useState<string>('fluids');
  const [specSearchQuery, setSpecSearchQuery] = useState<string>('');

  // GLOSSARY STATE
  const [glossarySearchQuery, setGlossarySearchQuery] = useState<string>('');

  const currentBox: FuseBox = useMemo(() => {
    return (
      CHANGAN_CS55_PLUS_FUSE_BOXES.find((b) => b.id === activeBoxId) ||
      CHANGAN_CS55_PLUS_FUSE_BOXES[0]
    );
  }, [activeBoxId]);

  // Quick preset filter buttons for fuses
  const quickPresets = [
    { id: 'all', label: 'Все цепи', icon: SlidersHorizontal },
    { id: 'preset_dashcam', label: '📹 Регистратор (ACC + B+)', filter: (item: FuseItem) => ['DF30', 'DF31', 'DF10', 'DF13', 'DF27'].includes(item.code) },
    { id: 'preset_lighter', label: '🔌 Розетки и USB', filter: (item: FuseItem) => ['DF31', 'DF32', 'DF30'].includes(item.code) || item.name.toLowerCase().includes('розет') || item.name.toLowerCase().includes('usb') },
    { id: 'preset_heat', label: '🔥 Обогревы', filter: (item: FuseItem) => item.category === 'climate' && (item.name.toLowerCase().includes('обогрев') || item.name.toLowerCase().includes('подогрев')) },
    { id: 'preset_lights', label: '💡 Свет и фары', filter: (item: FuseItem) => item.category === 'lighting' || item.name.toLowerCase().includes('фар') || item.name.toLowerCase().includes('свет') },
    { id: 'preset_wipers', label: '🌧️ Дворники', filter: (item: FuseItem) => item.name.toLowerCase().includes('стеклоочистител') || item.name.toLowerCase().includes('дворник') },
    { id: 'preset_engine', label: '⚙️ ДВС и КПП', filter: (item: FuseItem) => item.category === 'powertrain' },
    { id: 'preset_obd', label: '🔍 Разъем OBD2', filter: (item: FuseItem) => item.code === 'DF02' || item.name.toLowerCase().includes('obd') || item.name.toLowerCase().includes('диагност') },
  ];

  // Filtered fuses
  const filteredFuses = useMemo(() => {
    let list = currentBox.items;

    if (activePreset !== 'all') {
      const presetObj = quickPresets.find((p) => p.id === activePreset);
      if (presetObj && presetObj.filter) {
        list = list.filter(presetObj.filter);
      }
    }

    if (selectedPowerType !== 'all') {
      list = list.filter((item) => item.powerType === selectedPowerType);
    }

    if (fuseSearchQuery.trim()) {
      const q = fuseSearchQuery.toLowerCase().trim();
      list = list.filter(
        (item) =>
          item.code.toLowerCase().includes(q) ||
          item.name.toLowerCase().includes(q) ||
          (item.description && item.description.toLowerCase().includes(q)) ||
          (item.notes && item.notes.toLowerCase().includes(q)) ||
          (item.rating && item.rating.toLowerCase().includes(q))
      );
    }

    return list;
  }, [currentBox, activePreset, selectedPowerType, fuseSearchQuery]);

  // ATLAS CATEGORIES
  const atlasCategories = [
    { id: 'all', title: 'Все схемы и системы', emoji: '📚', count: SCHEMES_CATALOG.length },
    { id: 'engine_transmission', title: 'ДВС и трансмиссия 7DCT', emoji: '⚙️', count: SCHEMES_CATALOG.filter((s) => s.category === 'engine_transmission').length },
    { id: 'lighting_body', title: 'Освещение и кузов', emoji: '💡', count: SCHEMES_CATALOG.filter((s) => s.category === 'lighting_body').length },
    { id: 'climate_comfort', title: 'Климат-контроль и обогревы', emoji: '❄️', count: SCHEMES_CATALOG.filter((s) => s.category === 'climate_comfort').length },
    { id: 'safety_chassis', title: 'Шасси, тормоза и ADAS', emoji: '🛡️', count: SCHEMES_CATALOG.filter((s) => s.category === 'safety_chassis').length },
    { id: 'multimedia_network', title: 'Мультимедиа, экран и CAN', emoji: '🎵', count: SCHEMES_CATALOG.filter((s) => s.category === 'multimedia_network').length },
    { id: 'connectors', title: 'Распиновки разъемов', emoji: '🔌', count: SCHEMES_CATALOG.filter((s) => s.category === 'connectors').length },
    { id: 'grounding', title: 'Точки массы кузова (GND)', emoji: '📍', count: SCHEMES_CATALOG.filter((s) => s.category === 'grounding').length },
    { id: 'harnesses', title: 'Трассировка жгутов', emoji: '🗺️', count: SCHEMES_CATALOG.filter((s) => s.category === 'harnesses').length },
  ];

  // Filtered Atlas Schemes
  const filteredSchemes = useMemo(() => {
    let list = SCHEMES_CATALOG;

    if (selectedAtlasCat !== 'all') {
      list = list.filter((s) => s.category === selectedAtlasCat);
    }

    if (atlasSearchQuery.trim()) {
      const q = atlasSearchQuery.toLowerCase().trim();
      list = list.filter(
        (s) =>
          s.title.toLowerCase().includes(q) ||
          s.section.toLowerCase().includes(q) ||
          s.originalFile.toLowerCase().includes(q)
      );
    }

    return list;
  }, [selectedAtlasCat, atlasSearchQuery]);

  // Filtered Procedures
  const filteredProcedures = useMemo(() => {
    if (!procSearchQuery.trim()) return SERVICE_PROCEDURES;
    const q = procSearchQuery.toLowerCase().trim();
    return SERVICE_PROCEDURES.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.system.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
  }, [procSearchQuery]);

  const activeProcedure: ServiceProcedure = useMemo(() => {
    return SERVICE_PROCEDURES.find((p) => p.id === selectedProcId) || SERVICE_PROCEDURES[0];
  }, [selectedProcId]);

  // Filtered Manual Sections
  const filteredManualSections = useMemo(() => {
    if (!manualSearchQuery.trim()) return MANUAL_SECTIONS;
    const q = manualSearchQuery.toLowerCase().trim();
    return MANUAL_SECTIONS.filter(
      (sec) =>
        sec.chapterTitle.toLowerCase().includes(q) ||
        sec.description.toLowerCase().includes(q) ||
        sec.subsections.some((sub) => sub.title.toLowerCase().includes(q))
    );
  }, [manualSearchQuery]);

  // Filtered DTC codes
  const filteredDtcCodes = useMemo(() => {
    let list = DTC_CODES_DATABASE;

    if (selectedDtcCategory !== 'all') {
      list = list.filter((c) => c.category === selectedDtcCategory);
    }

    if (dtcScopeFilter === 'standard') {
      list = list.filter((c) => c.isGeneric);
    } else if (dtcScopeFilter === 'changan') {
      list = list.filter((c) => !c.isGeneric || c.code.length > 5);
    }

    if (dtcSearchQuery.trim()) {
      const q = dtcSearchQuery.toUpperCase().trim();
      const qLower = dtcSearchQuery.toLowerCase().trim();
      list = list.filter(
        (c) =>
          c.code.toUpperCase().includes(q) ||
          c.desc.toLowerCase().includes(qLower) ||
          c.system.toLowerCase().includes(qLower)
      );
    }

    return list;
  }, [selectedDtcCategory, dtcScopeFilter, dtcSearchQuery]);

  // Filtered Glossary
  const filteredGlossary = useMemo(() => {
    if (!glossarySearchQuery.trim()) return SYSTEM_GLOSSARY;
    const q = glossarySearchQuery.toLowerCase().trim();
    return SYSTEM_GLOSSARY.filter(
      (g) => g.abbrev.toLowerCase().includes(q) || g.desc.toLowerCase().includes(q)
    );
  }, [glossarySearchQuery]);

  // Filtered Specs
  const currentSpecCategory = useMemo(() => {
    return CHANGAN_CS55_PLUS_SPECS.find((c) => c.id === activeSpecCategory) || CHANGAN_CS55_PLUS_SPECS[0];
  }, [activeSpecCategory]);

  const filteredSpecs = useMemo(() => {
    let list = currentSpecCategory.specs;
    if (specSearchQuery.trim()) {
      const q = specSearchQuery.toLowerCase().trim();
      list = list.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.value.toLowerCase().includes(q) ||
          (s.standardOrSpec && s.standardOrSpec.toLowerCase().includes(q)) ||
          (s.notes && s.notes.toLowerCase().includes(q))
      );
    }
    return list;
  }, [currentSpecCategory, specSearchQuery]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(text);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const renderBrandFallback = (featureTitle: string) => (
    <div className="bg-gradient-to-br from-slate-50 to-brand-50/30 dark:from-dark-850 dark:to-dark-800 border border-slate-200 dark:border-dark-750 rounded-2xl p-6 text-center space-y-4 shadow-sm">
      <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center mx-auto">
        <Info className="w-6 h-6" />
      </div>
      <div className="max-w-md mx-auto space-y-2">
        <h3 className="text-base font-bold text-slate-900 dark:text-white">
          {featureTitle} для Changan CS55 Plus / UNI
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          База электросхем, мануалов и калибровок сейчас наполнена для семейства Changan (CS55 Plus / UNI-S). Разделы для других марок пополняются по мере загрузки документации сообществом.
        </p>
      </div>
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => setDemoMode(true)}
          className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-xs font-bold shadow-md shadow-brand-500/20 transition"
        >
          <Eye className="w-4 h-4" />
          <span>Посмотреть демо-базу (Changan CS55 Plus / UNI-S)</span>
        </button>
        <button
          type="button"
          onClick={() => setSubTab('dtc')}
          className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-slate-200 dark:bg-dark-750 hover:bg-slate-300 dark:hover:bg-dark-700 text-slate-700 dark:text-slate-300 text-xs font-bold transition"
        >
          <AlertTriangle className="w-4 h-4 text-amber-500" />
          <span>Перейти к универсальному сканеру ошибок (DTC)</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Top Knowledge Sub-navigation Bar */}
      <div className="flex items-center justify-between flex-wrap gap-3 pb-2 border-b border-slate-200 dark:border-dark-750">
        <div className="flex lg:grid lg:grid-cols-7 items-center lg:items-stretch gap-1.5 sm:gap-2 py-1 w-full overflow-x-auto lg:overflow-visible scrollbar-none">
          <button
            type="button"
            onClick={() => setSubTab('fuses')}
            className={`flex-shrink-0 lg:flex-shrink flex items-center justify-center space-x-1.5 px-2.5 lg:px-1 xl:px-2.5 py-2 rounded-xl text-xs xl:text-sm font-bold transition-all whitespace-nowrap border ${
              subTab === 'fuses'
                ? 'bg-brand-600 text-white shadow-md shadow-brand-600/20 border-brand-600'
                : 'bg-white dark:bg-dark-850 border-slate-200 dark:border-dark-750 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-dark-800 hover:border-slate-300 dark:hover:border-dark-700 shadow-sm'
            }`}
          >
            <Zap className="w-4 h-4 text-amber-500 flex-shrink-0" />
            <span>Предохранители</span>
          </button>

          <button
            type="button"
            onClick={() => setSubTab('atlas')}
            className={`flex-shrink-0 lg:flex-shrink flex items-center justify-center space-x-1.5 px-2.5 lg:px-1 xl:px-2.5 py-2 rounded-xl text-xs xl:text-sm font-bold transition-all whitespace-nowrap border ${
              subTab === 'atlas'
                ? 'bg-brand-600 text-white shadow-md shadow-brand-600/20 border-brand-600'
                : 'bg-white dark:bg-dark-850 border-slate-200 dark:border-dark-750 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-dark-800 hover:border-slate-300 dark:hover:border-dark-700 shadow-sm'
            }`}
          >
            <Layers className="w-4 h-4 text-indigo-500 flex-shrink-0" />
            <span>Атлас схем</span>
            <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono flex-shrink-0 ${subTab === 'atlas' ? 'bg-black/20 text-white' : 'bg-slate-100 dark:bg-dark-750 text-slate-600 dark:text-slate-400'}`}>
              674
            </span>
          </button>

          <button
            type="button"
            onClick={() => setSubTab('procedures')}
            className={`flex-shrink-0 lg:flex-shrink flex items-center justify-center space-x-1.5 px-2.5 lg:px-1 xl:px-2.5 py-2 rounded-xl text-xs xl:text-sm font-bold transition-all whitespace-nowrap border ${
              subTab === 'procedures'
                ? 'bg-brand-600 text-white shadow-md shadow-brand-600/20 border-brand-600'
                : 'bg-white dark:bg-dark-850 border-slate-200 dark:border-dark-750 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-dark-800 hover:border-slate-300 dark:hover:border-dark-700 shadow-sm'
            }`}
          >
            <Cpu className="w-4 h-4 text-emerald-500 flex-shrink-0" />
            <span>Калибровки<span className="hidden xl:inline"> и сбросы</span></span>
            <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono flex-shrink-0 ${subTab === 'procedures' ? 'bg-black/20 text-white' : 'bg-slate-100 dark:bg-dark-750 text-slate-600 dark:text-slate-400'}`}>
              7
            </span>
          </button>

          <button
            type="button"
            onClick={() => setSubTab('manual')}
            className={`flex-shrink-0 lg:flex-shrink flex items-center justify-center space-x-1.5 px-2.5 lg:px-1 xl:px-2.5 py-2 rounded-xl text-xs xl:text-sm font-bold transition-all whitespace-nowrap border ${
              subTab === 'manual'
                ? 'bg-brand-600 text-white shadow-md shadow-brand-600/20 border-brand-600'
                : 'bg-white dark:bg-dark-850 border-slate-200 dark:border-dark-750 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-dark-800 hover:border-slate-300 dark:hover:border-dark-700 shadow-sm'
            }`}
          >
            <FileText className="w-4 h-4 text-sky-500 flex-shrink-0" />
            <span>Мануал ТО</span>
            <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono flex-shrink-0 ${subTab === 'manual' ? 'bg-black/20 text-white' : 'bg-slate-100 dark:bg-dark-750 text-slate-600 dark:text-slate-400'}`}>
              1719
            </span>
          </button>

          <button
            type="button"
            onClick={() => setSubTab('dtc')}
            className={`flex-shrink-0 lg:flex-shrink flex items-center justify-center space-x-1.5 px-2.5 lg:px-1 xl:px-2.5 py-2 rounded-xl text-xs xl:text-sm font-bold transition-all whitespace-nowrap border ${
              subTab === 'dtc'
                ? 'bg-brand-600 text-white shadow-md shadow-brand-600/20 border-brand-600'
                : 'bg-white dark:bg-dark-850 border-slate-200 dark:border-dark-750 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-dark-800 hover:border-slate-300 dark:hover:border-dark-700 shadow-sm'
            }`}
          >
            <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0" />
            <span>Сканер DTC</span>
            <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono flex-shrink-0 ${subTab === 'dtc' ? 'bg-black/20 text-white' : 'bg-slate-100 dark:bg-dark-750 text-slate-600 dark:text-slate-400'}`}>
              1391
            </span>
          </button>

          <button
            type="button"
            onClick={() => setSubTab('specs')}
            className={`flex-shrink-0 lg:flex-shrink flex items-center justify-center space-x-1.5 px-2.5 lg:px-1 xl:px-2.5 py-2 rounded-xl text-xs xl:text-sm font-bold transition-all whitespace-nowrap border ${
              subTab === 'specs'
                ? 'bg-brand-600 text-white shadow-md shadow-brand-600/20 border-brand-600'
                : 'bg-white dark:bg-dark-850 border-slate-200 dark:border-dark-750 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-dark-800 hover:border-slate-300 dark:hover:border-dark-700 shadow-sm'
            }`}
          >
            <Droplets className="w-4 h-4 text-cyan-500 flex-shrink-0" />
            <span>Объемы и ТО</span>
          </button>

          <button
            type="button"
            onClick={() => setSubTab('glossary')}
            className={`flex-shrink-0 lg:flex-shrink flex items-center justify-center space-x-1.5 px-2.5 lg:px-1 xl:px-2.5 py-2 rounded-xl text-xs xl:text-sm font-bold transition-all whitespace-nowrap border ${
              subTab === 'glossary'
                ? 'bg-brand-600 text-white shadow-md shadow-brand-600/20 border-brand-600'
                : 'bg-white dark:bg-dark-850 border-slate-200 dark:border-dark-750 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-dark-800 hover:border-slate-300 dark:hover:border-dark-700 shadow-sm'
            }`}
          >
            <BookOpen className="w-4 h-4 text-purple-500 flex-shrink-0" />
            <span>Словарь</span>
            <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono flex-shrink-0 ${subTab === 'glossary' ? 'bg-black/20 text-white' : 'bg-slate-100 dark:bg-dark-750 text-slate-600 dark:text-slate-400'}`}>
              63
            </span>
          </button>
        </div>

        {demoMode && !isChangan && (
          <div className="flex items-center space-x-2 text-xs bg-amber-500/10 text-amber-600 dark:text-amber-400 px-3 py-1.5 rounded-xl border border-amber-500/20">
            <span className="font-bold">Демо: Changan CS55 Plus / UNI-S</span>
            <button
              onClick={() => setDemoMode(false)}
              className="text-slate-400 hover:text-slate-600 dark:hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>

      {/* ========================================================================= */}
      {/* 1. FUSES & SCHEMES TAB */}
      {/* ========================================================================= */}
      {subTab === 'fuses' && (
        <>
          {!isChangan && !demoMode ? (
            renderBrandFallback('Схемы предохранителей')
          ) : (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {CHANGAN_CS55_PLUS_FUSE_BOXES.map((box) => {
                  const isActive = box.id === activeBoxId;
                  return (
                    <button
                      key={box.id}
                      type="button"
                      onClick={() => {
                        setActiveBoxId(box.id);
                        setActivePreset('all');
                      }}
                      className={`text-left p-4 rounded-2xl border transition-all flex flex-col justify-between space-y-3 ${
                        isActive
                          ? 'bg-brand-500/5 dark:bg-brand-500/10 border-brand-500 ring-2 ring-brand-500/20 shadow-md'
                          : 'bg-white dark:bg-dark-850 border-slate-200 dark:border-dark-750 hover:border-slate-300 dark:hover:border-dark-700 shadow-sm'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span
                          className={`font-mono font-black text-xs px-2 py-0.5 rounded-md ${
                            isActive
                              ? 'bg-brand-500 text-white'
                              : 'bg-slate-100 dark:bg-dark-750 text-slate-600 dark:text-slate-400'
                          }`}
                        >
                          {box.code}
                        </span>
                        <span className="text-[11px] font-bold text-slate-400">
                          {box.items.length} элементов
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                          {box.title}
                        </h4>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                          {box.location}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="bg-slate-50 dark:bg-dark-850/60 border border-slate-200 dark:border-dark-750 rounded-2xl p-4 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-start space-x-2 text-xs text-slate-700 dark:text-slate-300">
                    <MapPin className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white">Расположение: </span>
                      <span>{currentBox.location}</span>
                    </div>
                  </div>

                  {currentBox.image && (
                    <button
                      type="button"
                      onClick={() => {
                        setViewingSchemeImage(currentBox.image || null);
                        setZoomLevel(1);
                      }}
                      className="inline-flex items-center justify-center space-x-1.5 px-3 py-1.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-xs font-bold transition shadow-sm flex-shrink-0"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Схема во весь экран</span>
                    </button>
                  )}
                </div>

                {currentBox.tips && currentBox.tips.length > 0 && (
                  <div className="space-y-1.5 pt-2 border-t border-slate-200/80 dark:border-dark-750/80">
                    {currentBox.tips.map((tip, idx) => (
                      <div key={idx} className="text-xs text-slate-600 dark:text-slate-300 flex items-start space-x-2">
                        <Sparkles className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{tip}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* VISUAL DIAGRAM CARD (Always visible for fast reference) */}
              {currentBox.image && (
                <div className="bg-white dark:bg-dark-850 border border-slate-200 dark:border-dark-750 rounded-2xl overflow-hidden shadow-sm transition hover:border-brand-500/50">
                  <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-100 dark:border-dark-750 bg-slate-50/75 dark:bg-dark-800/60">
                    <div className="flex items-center space-x-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                        Оригинальная схема и распиновка блока: {currentBox.title}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setViewingSchemeImage(currentBox.image || null);
                        setZoomLevel(1);
                      }}
                      className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-xl bg-brand-50 dark:bg-brand-950/40 hover:bg-brand-100 dark:hover:bg-brand-900/40 text-brand-600 dark:text-brand-400 text-xs font-bold transition"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Открыть со зумом</span>
                    </button>
                  </div>

                  <div
                    onClick={() => {
                      setViewingSchemeImage(currentBox.image || null);
                      setZoomLevel(1);
                    }}
                    className="relative group cursor-pointer bg-slate-900/5 dark:bg-dark-900 flex items-center justify-center p-3 sm:p-5 overflow-hidden max-h-80 select-none"
                    title="Нажмите для увеличения схемы со зумом"
                  >
                    <img
                      src={getAssetUrl(currentBox.image)}
                      alt={`Схема ${currentBox.title}`}
                      className="max-h-72 w-auto object-contain rounded-lg transition-transform duration-300 group-hover:scale-[1.02] shadow-sm"
                    />
                    <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="px-4 py-2 rounded-xl bg-slate-900/90 text-white text-xs font-bold flex items-center space-x-2 shadow-xl backdrop-blur-sm border border-white/10">
                        <Maximize2 className="w-4 h-4 text-brand-400" />
                        <span>Нажмите для полноэкранного просмотра со зумом</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      value={fuseSearchQuery}
                      onChange={(e) => setFuseSearchQuery(e.target.value)}
                      placeholder="Поиск по названию (прикуриватель, регистратор, свет...) или коду (DF31, EF01)..."
                      className="w-full bg-white dark:bg-dark-850 border border-slate-200 dark:border-dark-750 rounded-xl pl-9 pr-9 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-brand-500 shadow-sm"
                    />
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    {fuseSearchQuery && (
                      <button
                        onClick={() => setFuseSearchQuery('')}
                        className="absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-600 dark:hover:text-white p-0.5 rounded-lg"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>

                  <div className="flex items-center space-x-1 bg-white dark:bg-dark-850 border border-slate-200 dark:border-dark-750 p-1 rounded-xl flex-shrink-0 text-xs shadow-sm">
                    <span className="text-slate-400 font-bold px-2">Питание:</span>
                    <button
                      type="button"
                      onClick={() => setSelectedPowerType('all')}
                      className={`px-2.5 py-1 rounded-lg font-bold transition ${
                        selectedPowerType === 'all'
                          ? 'bg-brand-500 text-white shadow-sm'
                          : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-dark-750'
                      }`}
                    >
                      Все
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedPowerType('battery')}
                      className={`px-2 py-1 rounded-lg font-bold transition flex items-center space-x-1 ${
                        selectedPowerType === 'battery'
                          ? 'bg-amber-500 text-white shadow-sm'
                          : 'text-amber-600 dark:text-amber-400 hover:bg-amber-500/10'
                      }`}
                      title="Постоянное питание 12V от АКБ"
                    >
                      <span>BAT+</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedPowerType('acc')}
                      className={`px-2 py-1 rounded-lg font-bold transition flex items-center space-x-1 ${
                        selectedPowerType === 'acc'
                          ? 'bg-emerald-500 text-white shadow-sm'
                          : 'text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10'
                      }`}
                      title="Питание при включенном аксессуарном режиме / зажигании"
                    >
                      <span>ACC</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedPowerType('ignition')}
                      className={`px-2 py-1 rounded-lg font-bold transition flex items-center space-x-1 ${
                        selectedPowerType === 'ignition'
                          ? 'bg-blue-500 text-white shadow-sm'
                          : 'text-blue-600 dark:text-blue-400 hover:bg-blue-500/10'
                      }`}
                      title="Питание только при включенном зажигании IGN1/IGN2"
                    >
                      <span>IGN</span>
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-1.5 py-1">
                  {quickPresets.map((preset) => {
                    const isActive = activePreset === preset.id;
                    return (
                      <button
                        key={preset.id}
                        type="button"
                        onClick={() => setActivePreset(preset.id)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap flex items-center space-x-1.5 ${
                          isActive
                            ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm'
                            : 'bg-white dark:bg-dark-850 border border-slate-200 dark:border-dark-750 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-dark-700'
                        }`}
                      >
                        <span>{preset.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1">
                  <span>Найдено цепей: <strong className="text-slate-900 dark:text-white">{filteredFuses.length}</strong></span>
                  {activePreset !== 'all' && (
                    <button
                      onClick={() => setActivePreset('all')}
                      className="text-brand-500 hover:underline font-bold"
                    >
                      Сбросить фильтр
                    </button>
                  )}
                </div>

                {filteredFuses.length === 0 ? (
                  <div className="p-8 text-center bg-white dark:bg-dark-850 border border-slate-200 dark:border-dark-750 rounded-2xl space-y-2">
                    <Lightbulb className="w-8 h-8 text-slate-400 mx-auto" />
                    <p className="text-sm font-bold text-slate-700 dark:text-slate-300">
                      Предохранители не найдены
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    {filteredFuses.map((fuse) => {
                      let ratingBadgeBg = 'bg-slate-100 dark:bg-dark-750 text-slate-700 dark:text-slate-300';
                      if (fuse.ratingValue) {
                        if (fuse.ratingValue <= 7.5) ratingBadgeBg = 'bg-amber-900/10 text-amber-800 dark:text-amber-400 border border-amber-800/30';
                        else if (fuse.ratingValue === 10) ratingBadgeBg = 'bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/30';
                        else if (fuse.ratingValue === 15) ratingBadgeBg = 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/30';
                        else if (fuse.ratingValue === 20) ratingBadgeBg = 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border border-yellow-500/30';
                        else if (fuse.ratingValue === 25) ratingBadgeBg = 'bg-white text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-600';
                        else if (fuse.ratingValue === 30) ratingBadgeBg = 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30';
                        else if (fuse.ratingValue >= 40) ratingBadgeBg = 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/30';
                      }

                      return (
                        <div
                          key={fuse.code}
                          className="bg-white dark:bg-dark-850 border border-slate-200 dark:border-dark-750 rounded-xl p-3.5 flex flex-col justify-between hover:border-slate-300 dark:hover:border-dark-700 transition shadow-sm space-y-2"
                        >
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex items-center space-x-2">
                              <span className="font-mono font-black text-sm px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-dark-750 text-slate-900 dark:text-white border border-slate-200 dark:border-dark-700">
                                {fuse.code}
                              </span>
                              {fuse.rating && (
                                <span className={`font-mono font-bold text-xs px-2 py-0.5 rounded-lg ${ratingBadgeBg}`}>
                                  {fuse.rating}
                                </span>
                              )}
                              {fuse.type === 'relay' && (
                                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                                  РЕЛЕ
                                </span>
                              )}
                            </div>

                            <span
                              className={`text-[10px] font-bold px-2 py-0.5 rounded-md whitespace-nowrap flex-shrink-0 ${
                                fuse.powerType === 'battery'
                                  ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20'
                                  : fuse.powerType === 'acc'
                                  ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                                  : fuse.powerType === 'ignition'
                                  ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20'
                                  : 'bg-slate-100 dark:bg-dark-750 text-slate-500'
                              }`}
                            >
                              {fuse.powerType === 'battery' && 'BAT+ 12V'}
                              {fuse.powerType === 'acc' && 'ACC'}
                              {fuse.powerType === 'ignition' && 'IGN'}
                              {fuse.powerType === 'unknown' && 'Цепь'}
                            </span>
                          </div>

                          <div>
                            <h5 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white leading-snug">
                              {fuse.name}
                            </h5>
                            {fuse.description && (
                              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-normal">
                                {fuse.description}
                              </p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          )}
        </>
      )}

      {/* ========================================================================= */}
      {/* 2. ATLAS OF ELECTRICAL SCHEMES TAB */}
      {/* ========================================================================= */}
      {subTab === 'atlas' && (
        <>
          {!isChangan && !demoMode ? (
            renderBrandFallback('Атлас электросхем и распиновок')
          ) : (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-brand-700 dark:from-indigo-900/90 dark:via-slate-900/90 dark:to-brand-900/90 text-white rounded-3xl p-5 sm:p-6 border border-indigo-400/30 dark:border-indigo-500/30 shadow-xl space-y-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-10 -mt-10 w-48 h-48 bg-white/10 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <Archive className="w-5 h-5 text-indigo-200 dark:text-indigo-400" />
                      <h3 className="font-black text-base sm:text-lg">
                        Центр загрузки технической документации Changan
                      </h3>
                    </div>
                    <p className="text-xs text-indigo-100 dark:text-slate-300 max-w-2xl leading-relaxed">
                      Официальные заводские материалы CS55 Plus / UNI-S доступны для сохранения на телефон или компьютер в оффлайн-формате.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <a
                      href={getAssetUrl('downloads/CS55_Plus_Service_Manual.pdf')}
                      download="CS55_Plus_Руководство_по_ТО_и_ремонту.pdf"
                      className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-white text-indigo-900 hover:bg-indigo-50 dark:bg-indigo-500 dark:hover:bg-indigo-600 dark:text-white text-xs font-bold transition shadow-md shadow-indigo-950/20"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Мануал ТО (PDF 32 MB)</span>
                    </a>
                    <a
                      href={getAssetUrl('downloads/Changan_CS55_Plus_Wiring_Schemes.zip')}
                      download="Changan_CS55_Plus_Электросхемы.zip"
                      className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-bold transition border border-white/20"
                    >
                      <Archive className="w-3.5 h-3.5" />
                      <span>Архив схем (ZIP 50 MB)</span>
                    </a>
                    <a
                      href={getAssetUrl('downloads/Changan_UNI-S_DTC_Codes.pdf')}
                      download="Коды_ошибок_UNI-S_DTC.pdf"
                      className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-bold transition border border-white/20"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>Коды DTC (PDF)</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="relative">
                  <input
                    type="text"
                    value={atlasSearchQuery}
                    onChange={(e) => {
                      setAtlasSearchQuery(e.target.value);
                      setAtlasLimit(36);
                    }}
                    placeholder="Поиск по названию схемы (фары, климат, D01, BCM, масса, круиз, камера)..."
                    className="w-full bg-white dark:bg-dark-850 border border-slate-200 dark:border-dark-750 rounded-xl pl-9 pr-9 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 shadow-sm"
                  />
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  {atlasSearchQuery && (
                    <button
                      onClick={() => {
                        setAtlasSearchQuery('');
                        setAtlasLimit(36);
                      }}
                      className="absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-600 dark:hover:text-white p-0.5 rounded-lg"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* Категории атласа: аккуратная адаптивная сетка 3x3 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-xs">
                  {atlasCategories.map((cat) => {
                    const isActive = selectedAtlasCat === cat.id;
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => {
                          setSelectedAtlasCat(cat.id);
                          setAtlasLimit(36);
                        }}
                        className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl font-bold transition-all border text-left ${
                          isActive
                            ? 'bg-brand-600 text-white border-brand-600 shadow-md shadow-brand-600/20'
                            : 'bg-white dark:bg-dark-850 border-slate-200 dark:border-dark-750 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-dark-800 hover:border-brand-500/30 shadow-sm'
                        }`}
                      >
                        <div className="flex items-center space-x-2.5 min-w-0">
                          <span className="text-base flex-shrink-0">{cat.emoji}</span>
                          <span className="truncate">{cat.title}</span>
                        </div>
                        <span
                          className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md flex-shrink-0 ml-2 ${
                            isActive
                              ? 'bg-white/20 text-white'
                              : 'bg-slate-100 dark:bg-dark-750 text-slate-600 dark:text-slate-400'
                          }`}
                        >
                          {cat.count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1">
                  <div className="flex items-center space-x-2">
                    <span>
                      Найдено: <strong className="text-slate-900 dark:text-white">{filteredSchemes.length}</strong> схем
                    </span>
                    {selectedAtlasCat !== 'all' && (
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedAtlasCat('all');
                          setAtlasLimit(36);
                        }}
                        className="text-brand-500 hover:underline font-bold"
                      >
                        (сбросить фильтр)
                      </button>
                    )}
                  </div>
                  <span>
                    Показано: {Math.min(atlasLimit, filteredSchemes.length)} из {filteredSchemes.length}
                  </span>
                </div>

                {filteredSchemes.length === 0 ? (
                  <div className="p-8 text-center bg-white dark:bg-dark-850 border border-slate-200 dark:border-dark-750 rounded-2xl space-y-2">
                    <Layers className="w-8 h-8 text-slate-400 mx-auto" />
                    <p className="text-sm font-bold text-slate-700 dark:text-slate-300">
                      Схемы не найдены
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                    {filteredSchemes.slice(0, atlasLimit).map((scheme) => (
                      <div
                        key={scheme.id}
                        onClick={() => {
                          setActiveModalScheme(scheme);
                          setZoomLevel(1);
                        }}
                        className="group bg-white dark:bg-dark-850 border border-slate-200 dark:border-dark-750 hover:border-indigo-500 dark:hover:border-indigo-500 rounded-2xl overflow-hidden cursor-pointer transition-all shadow-sm hover:shadow-md flex flex-col justify-between"
                      >
                        <div className="aspect-[4/3] bg-slate-100 dark:bg-dark-900 overflow-hidden relative">
                          <img
                            src={getAssetUrl(scheme.image)}
                            alt={scheme.title}
                            loading="lazy"
                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <Maximize2 className="w-5 h-5 text-white drop-shadow-md" />
                          </div>
                        </div>

                        <div className="p-2.5 space-y-1">
                          <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 block line-clamp-1">
                            {scheme.categoryTitle}
                          </span>
                          <h6 className="font-bold text-xs text-slate-800 dark:text-slate-200 line-clamp-2 leading-snug">
                            {scheme.title}
                          </h6>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {filteredSchemes.length > atlasLimit && (
                  <div className="text-center pt-3">
                    <button
                      type="button"
                      onClick={() => setAtlasLimit((prev) => prev + 36)}
                      className="px-6 py-2.5 rounded-xl bg-white dark:bg-dark-850 border border-slate-200 dark:border-dark-750 hover:bg-slate-50 dark:hover:bg-dark-800 text-xs font-bold text-slate-700 dark:text-slate-300 shadow-sm transition"
                    >
                      Показать еще 36 схем (осталось {filteredSchemes.length - atlasLimit})
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </>
      )}

      {/* ========================================================================= */}
      {/* 3. SERVICE PROCEDURES & CALIBRATIONS TAB */}
      {/* ========================================================================= */}
      {subTab === 'procedures' && (
        <>
          {!isChangan && !demoMode ? (
            renderBrandFallback('Сервисные калибровки и адаптации')
          ) : (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Left: Procedures Navigation List */}
                <div className="lg:col-span-4 space-y-2.5">
                  <div className="relative">
                    <input
                      type="text"
                      value={procSearchQuery}
                      onChange={(e) => setProcSearchQuery(e.target.value)}
                      placeholder="Поиск процедур (сцепление, ручник, ТО...)..."
                      className="w-full bg-white dark:bg-dark-850 border border-slate-200 dark:border-dark-750 rounded-xl pl-9 pr-9 py-2 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 shadow-sm"
                    />
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    {procSearchQuery && (
                      <button onClick={() => setProcSearchQuery('')} className="absolute right-2.5 top-2 text-slate-400 p-0.5">
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>

                  <div className="space-y-2">
                    {filteredProcedures.map((proc) => {
                      const isActive = proc.id === selectedProcId;
                      return (
                        <button
                          key={proc.id}
                          type="button"
                          onClick={() => setSelectedProcId(proc.id)}
                          className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-start justify-between space-x-3 ${
                            isActive
                              ? 'bg-emerald-500/10 border-emerald-500 ring-2 ring-emerald-500/20 shadow-sm'
                              : 'bg-white dark:bg-dark-850 border-slate-200 dark:border-dark-750 hover:border-slate-300 dark:hover:border-dark-700 shadow-sm'
                          }`}
                        >
                          <div className="space-y-1">
                            <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 block">
                              {proc.system}
                            </span>
                            <h5 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white leading-snug">
                              {proc.title}
                            </h5>
                            <div className="flex items-center space-x-2 text-[11px] text-slate-500 dark:text-slate-400 pt-0.5">
                              <Clock className="w-3 h-3" />
                              <span>{proc.timeEstimate}</span>
                            </div>
                          </div>
                          <ChevronRight className={`w-4 h-4 mt-1 flex-shrink-0 transition-transform ${isActive ? 'text-emerald-500 translate-x-1' : 'text-slate-400'}`} />
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Right: Active Procedure Detailed Instructions */}
                <div className="lg:col-span-8 bg-white dark:bg-dark-850 border border-slate-200 dark:border-dark-750 rounded-3xl p-5 sm:p-6 space-y-5 shadow-sm">
                  <div className="border-b border-slate-200 dark:border-dark-750 pb-4 space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-black uppercase px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                        {activeProcedure.system}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center space-x-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{activeProcedure.timeEstimate}</span>
                      </span>
                    </div>
                    <h3 className="font-black text-base sm:text-xl text-slate-900 dark:text-white">
                      {activeProcedure.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {activeProcedure.description}
                    </p>
                  </div>

                  {/* Prerequisites */}
                  {activeProcedure.prerequisites && activeProcedure.prerequisites.length > 0 && (
                    <div className="bg-slate-50 dark:bg-dark-750/50 border border-slate-200 dark:border-dark-700 rounded-2xl p-4 space-y-2">
                      <h5 className="font-bold text-xs text-slate-800 dark:text-slate-200 uppercase tracking-wide flex items-center space-x-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        <span>Обязательные предварительные условия:</span>
                      </h5>
                      <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-400 list-disc list-inside">
                        {activeProcedure.prerequisites.map((p, idx) => (
                          <li key={idx} className="leading-relaxed">{p}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Step by step guide */}
                  <div className="space-y-3">
                    <h5 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                      Пошаговая инструкция выполнения:
                    </h5>
                    <div className="space-y-2.5">
                      {activeProcedure.steps.map((st) => (
                        <div
                          key={st.step}
                          className="flex items-start space-x-3 p-3 rounded-xl bg-slate-50/70 dark:bg-dark-750/30 border border-slate-100 dark:border-dark-700/60"
                        >
                          <span className="w-6 h-6 rounded-full bg-emerald-500 text-white font-black text-xs flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm shadow-emerald-500/20">
                            {st.step}
                          </span>
                          <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                            {st.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Warnings */}
                  {activeProcedure.warnings && activeProcedure.warnings.length > 0 && (
                    <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-4 space-y-1.5 text-xs text-amber-700 dark:text-amber-400">
                      <div className="font-bold flex items-center space-x-1.5">
                        <AlertTriangle className="w-4 h-4 text-amber-500" />
                        <span>Важные предостережения и примечания:</span>
                      </div>
                      <ul className="space-y-1 list-disc list-inside pl-1 text-slate-700 dark:text-slate-300">
                        {activeProcedure.warnings.map((w, idx) => (
                          <li key={idx} className="leading-relaxed">{w}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* ========================================================================= */}
      {/* 4. SERVICE MANUAL 1,719-PAGE NAVIGATOR TAB */}
      {/* ========================================================================= */}
      {subTab === 'manual' && (
        <>
          {!isChangan && !demoMode ? (
            renderBrandFallback('Навигатор по Сервисному Мануалу')
          ) : (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-sky-600 via-sky-700 to-brand-700 dark:from-sky-900/90 dark:via-slate-900/90 dark:to-brand-900/90 text-white rounded-3xl p-5 sm:p-6 border border-sky-400/30 dark:border-sky-500/30 shadow-xl space-y-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <BookOpen className="w-5 h-5 text-sky-200 dark:text-sky-400" />
                      <h3 className="font-black text-base sm:text-lg">
                        Интерактивный навигатор по сервисному руководству (1 719 страниц)
                      </h3>
                    </div>
                    <p className="text-xs text-sky-100 dark:text-slate-300 max-w-2xl leading-relaxed">
                      Полный дилерский мануал CS55 Plus / UNI-S разбит по 11 главам. Нажмите на любой раздел, и мануал откроется в читалке браузера ровно на нужной странице.
                    </p>
                  </div>
                  <a
                    href={getAssetUrl('downloads/CS55_Plus_Service_Manual.pdf')}
                    download="CS55_Plus_Руководство_по_ТО_и_ремонту.pdf"
                    className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-xl bg-white text-sky-900 hover:bg-sky-50 dark:bg-sky-500 dark:hover:bg-sky-600 dark:text-white text-xs font-bold transition shadow-md shadow-sky-950/20 flex-shrink-0"
                  >
                    <Download className="w-4 h-4" />
                    <span>Скачать весь PDF (32 МБ)</span>
                  </a>
                </div>
              </div>

              {/* Search bar */}
              <div className="relative">
                <input
                  type="text"
                  value={manualSearchQuery}
                  onChange={(e) => setManualSearchQuery(e.target.value)}
                  placeholder="Поиск по содержанию мануала (турбина, тормоза, кондиционер, бампер, сцепление, зазоры)..."
                  className="w-full bg-white dark:bg-dark-850 border border-slate-200 dark:border-dark-750 rounded-xl pl-9 pr-9 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-sky-500 shadow-sm"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                {manualSearchQuery && (
                  <button onClick={() => setManualSearchQuery('')} className="absolute right-2.5 top-2.5 text-slate-400 p-0.5">
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Sections Accordion / Cards Columns (eliminates height-stretch blank gaps) */}
              <div className="columns-1 md:columns-2 gap-4 [column-fill:_balance]">
                {filteredManualSections.map((sec) => (
                  <div
                    key={sec.id}
                    className="break-inside-avoid mb-4 bg-white dark:bg-dark-850 border border-slate-200 dark:border-dark-750 rounded-2xl p-4 sm:p-5 shadow-sm space-y-3.5 hover:border-brand-500/40 dark:hover:border-brand-500/40 transition"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-mono font-black text-xs px-2.5 py-1 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
                          ГЛАВА {sec.chapterNumber}
                        </span>
                        <a
                          href={`${getAssetUrl('downloads/CS55_Plus_Service_Manual.pdf')}#page=${sec.page}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-mono font-bold text-slate-500 hover:text-sky-600 dark:hover:text-sky-400 flex items-center space-x-1"
                        >
                          <span>Стр. {sec.page}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>

                      <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white leading-snug">
                        {sec.chapterTitle}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                        {sec.description}
                      </p>
                    </div>

                    {/* Subsections Quick Jump */}
                    <div className="pt-2 border-t border-slate-100 dark:border-dark-750 space-y-1.5">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wide block">
                        Ключевые разделы главы:
                      </span>
                      <div className="grid grid-cols-1 gap-1">
                        {sec.subsections.map((sub, idx) => (
                          <a
                            key={idx}
                            href={`${getAssetUrl('downloads/CS55_Plus_Service_Manual.pdf')}#page=${sub.page}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 py-1 px-2 rounded-lg hover:bg-slate-50 dark:hover:bg-dark-750 flex items-center justify-between transition"
                          >
                            <span className="truncate pr-2">{sub.title}</span>
                            <span className="font-mono text-[11px] text-slate-400 flex-shrink-0">
                              стр. {sub.page} →
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}

      {/* ========================================================================= */}
      {/* 5. DIAGNOSTIC TROUBLE CODES (DTC) TAB */}
      {/* ========================================================================= */}
      {subTab === 'dtc' && (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/20 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="w-5 h-5 text-amber-500" />
                <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                  Диагностический справочник кодов неисправностей (DTC)
                </h3>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                База включает стандартные коды OBD-II (SAE J2012) для всех автомобилей, а также дилерские 7-значные коды заводских протоколов Changan (BCM, 7DCT, ECM, ADAS).
              </p>
            </div>
            <div className="flex-shrink-0 text-xs font-mono font-bold bg-amber-500 text-white px-3 py-1 rounded-xl shadow-sm">
              1 391 код в базе
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={dtcSearchQuery}
                  onChange={(e) => {
                    setDtcSearchQuery(e.target.value);
                    setDtcLimit(50);
                  }}
                  placeholder="Введите код (P0300, B1001, U0100...) или симптом (зажигание, сцепление, датчик)..."
                  className="w-full bg-white dark:bg-dark-850 border border-slate-200 dark:border-dark-750 rounded-xl pl-9 pr-9 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-amber-500 shadow-sm"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                {dtcSearchQuery && (
                  <button
                    onClick={() => {
                      setDtcSearchQuery('');
                      setDtcLimit(50);
                    }}
                    className="absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-600 dark:hover:text-white p-0.5 rounded-lg"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              <div className="flex items-center space-x-1 bg-white dark:bg-dark-850 border border-slate-200 dark:border-dark-750 p-1 rounded-xl flex-shrink-0 text-xs shadow-sm">
                <button
                  type="button"
                  onClick={() => setDtcScopeFilter('all')}
                  className={`px-2.5 py-1 rounded-lg font-bold transition ${
                    dtcScopeFilter === 'all'
                      ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-dark-750'
                  }`}
                >
                  Все ({DTC_CODES_DATABASE.length})
                </button>
                <button
                  type="button"
                  onClick={() => setDtcScopeFilter('standard')}
                  className={`px-2.5 py-1 rounded-lg font-bold transition ${
                    dtcScopeFilter === 'standard'
                      ? 'bg-emerald-500 text-white shadow-sm'
                      : 'text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10'
                  }`}
                  title="Стандартные общепринятые коды OBD-II для всех марок"
                >
                  Стандарт OBD-II
                </button>
                <button
                  type="button"
                  onClick={() => setDtcScopeFilter('changan')}
                  className={`px-2.5 py-1 rounded-lg font-bold transition ${
                    dtcScopeFilter === 'changan'
                      ? 'bg-amber-500 text-white shadow-sm'
                      : 'text-amber-600 dark:text-amber-400 hover:bg-amber-500/10'
                  }`}
                  title="Заводские коды Changan с подробным байтом типа неисправности"
                >
                  Специфика Changan
                </button>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-1.5 py-1 text-xs">
              <button
                type="button"
                onClick={() => setSelectedDtcCategory('all')}
                className={`px-3 py-1.5 rounded-xl font-bold transition whitespace-nowrap ${
                  selectedDtcCategory === 'all'
                    ? 'bg-amber-500 text-white shadow-sm'
                    : 'bg-white dark:bg-dark-850 border border-slate-200 dark:border-dark-750 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-dark-700'
                }`}
              >
                Все категории
              </button>
              <button
                type="button"
                onClick={() => setSelectedDtcCategory('powertrain')}
                className={`px-3 py-1.5 rounded-xl font-bold transition whitespace-nowrap ${
                  selectedDtcCategory === 'powertrain'
                    ? 'bg-amber-500 text-white shadow-sm'
                    : 'bg-white dark:bg-dark-850 border border-slate-200 dark:border-dark-750 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-dark-700'
                }`}
              >
                ⚙️ P — ДВС и КПП
              </button>
              <button
                type="button"
                onClick={() => setSelectedDtcCategory('body')}
                className={`px-3 py-1.5 rounded-xl font-bold transition whitespace-nowrap ${
                  selectedDtcCategory === 'body'
                    ? 'bg-amber-500 text-white shadow-sm'
                    : 'bg-white dark:bg-dark-850 border border-slate-200 dark:border-dark-750 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-dark-700'
                }`}
              >
                🚗 B — Кузов и BCM
              </button>
              <button
                type="button"
                onClick={() => setSelectedDtcCategory('chassis')}
                className={`px-3 py-1.5 rounded-xl font-bold transition whitespace-nowrap ${
                  selectedDtcCategory === 'chassis'
                    ? 'bg-amber-500 text-white shadow-sm'
                    : 'bg-white dark:bg-dark-850 border border-slate-200 dark:border-dark-750 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-dark-700'
                }`}
              >
                🛑 C — Шасси и Тормоза
              </button>
              <button
                type="button"
                onClick={() => setSelectedDtcCategory('network')}
                className={`px-3 py-1.5 rounded-xl font-bold transition whitespace-nowrap ${
                  selectedDtcCategory === 'network'
                    ? 'bg-amber-500 text-white shadow-sm'
                    : 'bg-white dark:bg-dark-850 border border-slate-200 dark:border-dark-750 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-dark-700'
                }`}
              >
                🌐 U — CAN и Связь
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1">
              <span>
                Найдено: <strong className="text-slate-900 dark:text-white">{filteredDtcCodes.length}</strong> кодов
              </span>
              <span className="text-[11px]">
                Показано: {Math.min(dtcLimit, filteredDtcCodes.length)} из {filteredDtcCodes.length}
              </span>
            </div>

            {filteredDtcCodes.length === 0 ? (
              <div className="p-8 text-center bg-white dark:bg-dark-850 border border-slate-200 dark:border-dark-750 rounded-2xl space-y-2">
                <AlertTriangle className="w-8 h-8 text-slate-400 mx-auto" />
                <p className="text-sm font-bold text-slate-700 dark:text-slate-300">
                  Код неисправности не найден
                </p>
              </div>
            ) : (
              <div className="space-y-2">
                {filteredDtcCodes.slice(0, dtcLimit).map((item) => {
                  let catColor = 'bg-slate-100 text-slate-700 dark:bg-dark-750 dark:text-slate-300';
                  if (item.category === 'powertrain') catColor = 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20';
                  else if (item.category === 'body') catColor = 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-500/20';
                  else if (item.category === 'chassis') catColor = 'bg-red-500/10 text-red-700 dark:text-red-400 border border-red-500/20';
                  else if (item.category === 'network') catColor = 'bg-purple-500/10 text-purple-700 dark:text-purple-400 border border-purple-500/20';

                  return (
                    <div
                      key={item.code}
                      className="bg-white dark:bg-dark-850 border border-slate-200 dark:border-dark-750 rounded-xl p-3.5 hover:border-amber-500/40 transition flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-sm"
                    >
                      <div className="space-y-1.5 flex-1">
                        <div className="flex items-center space-x-2 flex-wrap gap-y-1">
                          <button
                            type="button"
                            onClick={() => copyToClipboard(item.code)}
                            className="inline-flex items-center space-x-1.5 font-mono font-black text-sm px-2.5 py-0.5 rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:opacity-90 transition"
                            title="Нажмите, чтобы скопировать код"
                          >
                            <span>{item.code}</span>
                            {copiedCode === item.code ? (
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                            ) : (
                              <Copy className="w-3.5 h-3.5 text-slate-400" />
                            )}
                          </button>

                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${catColor}`}>
                            {item.category === 'powertrain' && 'ДВС / КПП (P)'}
                            {item.category === 'body' && 'Кузов (B)'}
                            {item.category === 'chassis' && 'Шасси (C)'}
                            {item.category === 'network' && 'Связь / CAN (U)'}
                          </span>

                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-dark-750 text-slate-600 dark:text-slate-400">
                            {item.system}
                          </span>

                          {item.isGeneric ? (
                            <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                              OBD-II Стандарт (Все авто)
                            </span>
                          ) : (
                            <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-slate-200/60 dark:bg-dark-700 text-slate-600 dark:text-slate-400">
                              Заводской Changan
                            </span>
                          )}
                        </div>

                        <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}

                {filteredDtcCodes.length > dtcLimit && (
                  <div className="text-center pt-2">
                    <button
                      type="button"
                      onClick={() => setDtcLimit((prev) => prev + 100)}
                      className="px-6 py-2.5 rounded-xl bg-white dark:bg-dark-850 border border-slate-200 dark:border-dark-750 hover:bg-slate-50 dark:hover:bg-dark-800 text-xs font-bold text-slate-700 dark:text-slate-300 shadow-sm transition"
                    >
                      Показать еще 100 кодов (осталось {filteredDtcCodes.length - dtcLimit})
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 6. FLUIDS & SERVICE SPECS TAB */}
      {/* ========================================================================= */}
      {subTab === 'specs' && (
        <>
          {!isChangan && !demoMode ? (
            renderBrandFallback('Заправочные объемы и регламент ТО')
          ) : (
            <div className="space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {CHANGAN_CS55_PLUS_SPECS.map((cat) => {
                  const isActive = cat.id === activeSpecCategory;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => {
                        setActiveSpecCategory(cat.id);
                        setSpecSearchQuery('');
                      }}
                      className={`p-3.5 rounded-2xl border text-left transition-all flex flex-col justify-between space-y-2 ${
                        isActive
                          ? 'bg-cyan-500/10 border-cyan-500 ring-2 ring-cyan-500/20 shadow-sm'
                          : 'bg-white dark:bg-dark-850 border-slate-200 dark:border-dark-750 hover:border-slate-300 dark:hover:border-dark-700 shadow-sm'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span
                          className={`p-2 rounded-xl ${
                            isActive
                              ? 'bg-cyan-500 text-white'
                              : 'bg-slate-100 dark:bg-dark-750 text-slate-600 dark:text-slate-400'
                          }`}
                        >
                          {cat.id === 'fluids' && <Droplets className="w-4 h-4" />}
                          {cat.id === 'torques' && <Wrench className="w-4 h-4" />}
                          {cat.id === 'wheels' && <Disc className="w-4 h-4" />}
                          {cat.id === 'consumables_guide' && <CheckCircle2 className="w-4 h-4" />}
                        </span>
                        <span className="text-[11px] font-bold text-slate-400">
                          {cat.specs.length}
                        </span>
                      </div>
                      <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white leading-snug">
                        {cat.title}
                      </h4>
                    </button>
                  );
                })}
              </div>

              <div className="relative">
                <input
                  type="text"
                  value={specSearchQuery}
                  onChange={(e) => setSpecSearchQuery(e.target.value)}
                  placeholder="Поиск по спецификациям (масло, свечи, давление, момент...)..."
                  className="w-full bg-white dark:bg-dark-850 border border-slate-200 dark:border-dark-750 rounded-xl pl-9 pr-9 py-2 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500 shadow-sm"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                {specSearchQuery && (
                  <button onClick={() => setSpecSearchQuery('')} className="absolute right-2.5 top-2 text-slate-400 p-0.5">
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {filteredSpecs.map((spec, idx) => (
                  <div
                    key={idx}
                    className="bg-white dark:bg-dark-850 border border-slate-200 dark:border-dark-750 rounded-2xl p-4 flex flex-col justify-between hover:border-cyan-500/40 transition shadow-sm space-y-3"
                  >
                    <div className="space-y-1">
                      <h5 className="font-bold text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                        {spec.name}
                      </h5>
                      <div className="font-black text-sm sm:text-base text-slate-900 dark:text-white">
                        {spec.value}
                      </div>
                    </div>

                    {spec.standardOrSpec && (
                      <div className="p-2 rounded-xl bg-slate-50 dark:bg-dark-750/70 border border-slate-200/80 dark:border-dark-700 text-xs font-mono text-cyan-700 dark:text-cyan-400 font-bold">
                        {spec.standardOrSpec}
                      </div>
                    )}

                    {spec.notes && (
                      <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 leading-relaxed pt-1 border-t border-slate-100 dark:border-dark-750">
                        {spec.notes}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}

      {/* ========================================================================= */}
      {/* 7. GLOSSARY TAB */}
      {/* ========================================================================= */}
      {subTab === 'glossary' && (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-purple-500/10 via-purple-500/5 to-transparent border border-purple-500/20 rounded-2xl p-4 flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-purple-500" />
                <span>Словарь автомобильных систем и модулей</span>
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Расшифровка сокращений электронных блоков управления и датчиков (BCM, TCU, ECU, SRS, ADAS, EPB и др.).
              </p>
            </div>
            <div className="text-xs font-mono font-bold bg-purple-500 text-white px-3 py-1 rounded-xl shadow-sm">
              63 системы
            </div>
          </div>

          <div className="relative">
            <input
              type="text"
              value={glossarySearchQuery}
              onChange={(e) => setGlossarySearchQuery(e.target.value)}
              placeholder="Поиск по аббревиатуре (BCM, DCT, EPB...) или описанию..."
              className="w-full bg-white dark:bg-dark-850 border border-slate-200 dark:border-dark-750 rounded-xl pl-9 pr-9 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-purple-500 shadow-sm"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            {glossarySearchQuery && (
              <button onClick={() => setGlossarySearchQuery('')} className="absolute right-2.5 top-2.5 text-slate-400 p-0.5">
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {filteredGlossary.map((item, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-dark-850 border border-slate-200 dark:border-dark-750 rounded-xl p-3 hover:border-purple-500/40 transition shadow-sm flex items-start space-x-3"
              >
                <span className="font-mono font-black text-xs px-2.5 py-1 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 flex-shrink-0">
                  {item.abbrev}
                </span>
                <div className="text-xs text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SCHEMATIC IMAGE VIEWER MODAL (FUSES) WITH ZOOM */}
      {/* ========================================================================= */}
      {viewingSchemeImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
          <div className="bg-white dark:bg-dark-850 rounded-3xl border border-slate-200 dark:border-dark-700 shadow-2xl w-full max-w-6xl h-[92vh] flex flex-col overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3 border-b border-slate-200 dark:border-dark-750">
              <div className="flex items-center space-x-2">
                <Layers className="w-4 h-4 text-brand-500" />
                <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white line-clamp-1">
                  Заводская схема: {currentBox.title}
                </h3>
              </div>

              <div className="flex items-center space-x-1.5 sm:space-x-2">
                <button
                  type="button"
                  onClick={() => setZoomLevel((z) => Math.max(0.5, z - 0.25))}
                  className="p-1.5 rounded-xl bg-slate-100 dark:bg-dark-750 hover:bg-slate-200 dark:hover:bg-dark-700 text-slate-700 dark:text-slate-300 transition"
                  title="Уменьшить"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setZoomLevel(1)}
                  className="px-2.5 py-1 text-xs font-mono font-bold rounded-xl bg-slate-100 dark:bg-dark-750 hover:bg-slate-200 dark:hover:bg-dark-700 text-slate-700 dark:text-slate-300 transition"
                  title="Сбросить масштаб"
                >
                  {Math.round(zoomLevel * 100)}%
                </button>
                <button
                  type="button"
                  onClick={() => setZoomLevel((z) => Math.min(3, z + 0.25))}
                  className="p-1.5 rounded-xl bg-slate-100 dark:bg-dark-750 hover:bg-slate-200 dark:hover:bg-dark-700 text-slate-700 dark:text-slate-300 transition"
                  title="Увеличить"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>

                <div className="h-5 w-px bg-slate-200 dark:bg-dark-700 mx-1" />

                <a
                  href={getAssetUrl(viewingSchemeImage)}
                  download={`${currentBox.id}_scheme.jpg`}
                  className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-dark-750 hover:bg-slate-200 dark:hover:bg-dark-700 text-slate-700 dark:text-slate-300 text-xs font-bold transition"
                  title="Скачать схему блока"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Скачать</span>
                </a>

                <a
                  href={getAssetUrl(viewingSchemeImage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-xl bg-brand-50 dark:bg-brand-950/50 hover:bg-brand-100 dark:hover:bg-brand-900/50 text-brand-600 dark:text-brand-400 text-xs font-bold transition"
                  title="Открыть в новой вкладке"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Оригинал</span>
                </a>

                <button
                  type="button"
                  onClick={() => setViewingSchemeImage(null)}
                  className="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-dark-750 transition ml-1"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-auto p-4 bg-slate-100 dark:bg-dark-900 flex items-center justify-center">
              <div
                style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center center' }}
                className="transition-transform duration-200 max-w-full"
              >
                <img
                  src={getAssetUrl(viewingSchemeImage)}
                  alt={`Схема ${currentBox.title}`}
                  className="rounded-xl shadow-2xl border border-slate-200 dark:border-dark-800 object-contain max-h-[78vh]"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* ATLAS FULLSCREEN MODAL VIEWER WITH ZOOM */}
      {/* ========================================================================= */}
      {activeModalScheme && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
          <div className="bg-white dark:bg-dark-850 rounded-3xl border border-slate-200 dark:border-dark-700 shadow-2xl w-full max-w-6xl h-[92vh] flex flex-col overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3 border-b border-slate-200 dark:border-dark-750">
              <div className="space-y-0.5">
                <span className="text-[10px] font-bold text-indigo-500 uppercase tracking-wide">
                  {activeModalScheme.categoryTitle}
                </span>
                <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white line-clamp-1">
                  {activeModalScheme.title}
                </h3>
              </div>

              <div className="flex items-center space-x-1.5 sm:space-x-2">
                <button
                  type="button"
                  onClick={() => setZoomLevel((z) => Math.max(0.5, z - 0.25))}
                  className="p-1.5 rounded-xl bg-slate-100 dark:bg-dark-750 hover:bg-slate-200 dark:hover:bg-dark-700 text-slate-700 dark:text-slate-300 transition"
                  title="Уменьшить"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setZoomLevel(1)}
                  className="px-2.5 py-1 text-xs font-mono font-bold rounded-xl bg-slate-100 dark:bg-dark-750 hover:bg-slate-200 dark:hover:bg-dark-700 text-slate-700 dark:text-slate-300 transition"
                  title="Сбросить масштаб"
                >
                  {Math.round(zoomLevel * 100)}%
                </button>
                <button
                  type="button"
                  onClick={() => setZoomLevel((z) => Math.min(3, z + 0.25))}
                  className="p-1.5 rounded-xl bg-slate-100 dark:bg-dark-750 hover:bg-slate-200 dark:hover:bg-dark-700 text-slate-700 dark:text-slate-300 transition"
                  title="Увеличить"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>

                <div className="h-5 w-px bg-slate-200 dark:bg-dark-700 mx-1" />

                <a
                  href={getAssetUrl(activeModalScheme.image)}
                  download={`${activeModalScheme.originalFile || activeModalScheme.id}.webp`}
                  className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-dark-750 hover:bg-slate-200 dark:hover:bg-dark-700 text-slate-700 dark:text-slate-300 text-xs font-bold transition"
                  title="Скачать схему"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Скачать</span>
                </a>

                <a
                  href={getAssetUrl(activeModalScheme.image)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 text-xs font-bold transition"
                  title="Открыть в новой вкладке"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Оригинал</span>
                </a>

                <button
                  type="button"
                  onClick={() => setActiveModalScheme(null)}
                  className="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-dark-750 transition ml-1"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-auto p-4 bg-slate-100 dark:bg-dark-900 flex items-center justify-center">
              <div
                style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center center' }}
                className="transition-transform duration-200 max-w-full"
              >
                <img
                  src={getAssetUrl(activeModalScheme.image)}
                  alt={activeModalScheme.title}
                  className="rounded-xl shadow-2xl border border-slate-200 dark:border-dark-800 object-contain max-h-[78vh]"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
