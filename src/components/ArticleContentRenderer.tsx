import React, { useState } from 'react';
import { Check, Copy, ExternalLink, Camera, AlertCircle, ChevronRight, ZoomIn, ZoomOut, X, Maximize2 } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

interface ArticleContentRendererProps {
  content: string;
}

export const ArticleContentRenderer: React.FC<ArticleContentRendererProps> = ({ content }) => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [activeModalImage, setActiveModalImage] = useState<{ url: string; caption: string } | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  // Helper to parse inline bold and links
  const renderInline = (text: string): React.ReactNode => {
    const parts: React.ReactNode[] = [];
    let remaining = text;
    let keyIdx = 0;

    while (remaining) {
      const linkMatch = remaining.match(/\[(.*?)\]\((https?:\/\/[^\)]+)\)/);
      const boldMatch = remaining.match(/\*\*(.*?)\*\*/);

      let earliestMatch: { type: 'link' | 'bold'; index: number; length: number; match: RegExpMatchArray } | null = null;

      if (linkMatch && linkMatch.index !== undefined) {
        earliestMatch = { type: 'link', index: linkMatch.index, length: linkMatch[0].length, match: linkMatch };
      }

      if (boldMatch && boldMatch.index !== undefined) {
        if (!earliestMatch || boldMatch.index < earliestMatch.index) {
          earliestMatch = { type: 'bold', index: boldMatch.index, length: boldMatch[0].length, match: boldMatch };
        }
      }

      if (!earliestMatch) {
        parts.push(remaining);
        break;
      }

      if (earliestMatch.index > 0) {
        parts.push(remaining.substring(0, earliestMatch.index));
      }

      if (earliestMatch.type === 'link') {
        const linkText = earliestMatch.match[1];
        const linkUrl = earliestMatch.match[2];
        parts.push(
          <a
            key={`link-${keyIdx++}`}
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 dark:text-brand-400 font-bold hover:underline inline-flex items-center space-x-0.5"
          >
            <span>{linkText}</span>
            <ExternalLink className="w-3 h-3 inline ml-0.5" />
          </a>
        );
      } else if (earliestMatch.type === 'bold') {
        const boldText = earliestMatch.match[1];
        parts.push(
          <strong key={`bold-${keyIdx++}`} className="font-bold text-slate-900 dark:text-white">
            {boldText}
          </strong>
        );
      }

      remaining = remaining.substring(earliestMatch.index + earliestMatch.length);
    }

    return parts;
  };

  const blocks = content.split(/\n\n+/);

  return (
    <div className="space-y-4 text-slate-800 dark:text-slate-200 text-sm sm:text-base leading-relaxed">
      {blocks.map((block, idx) => {
        const trimmed = block.trim();

        // 1. Headings
        if (trimmed.startsWith('## ')) {
          return (
            <h2
              key={idx}
              className="text-base sm:text-lg font-black text-slate-900 dark:text-white pt-6 pb-2 border-b border-slate-200 dark:border-dark-750 flex items-center space-x-2"
            >
              <span className="w-2 h-5 bg-brand-500 rounded-full" />
              <span>{trimmed.replace(/^##\s+/, '')}</span>
            </h2>
          );
        }

        if (trimmed.startsWith('### ')) {
          return (
            <h3
              key={idx}
              className="text-sm sm:text-base font-bold text-slate-900 dark:text-white pt-4 pb-1 flex items-center space-x-1.5"
            >
              <ChevronRight className="w-4 h-4 text-brand-500 flex-shrink-0" />
              <span>{trimmed.replace(/^###\s+/, '')}</span>
            </h3>
          );
        }

        if (trimmed.startsWith('#### ')) {
          return (
            <h4 key={idx} className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 pt-2">
              {trimmed.replace(/^####\s+/, '')}
            </h4>
          );
        }

        // 2. Markdown Images: ![Caption](url)
        const imgMatch = trimmed.match(/^!\[(.*?)\]\((.*?)\)$/);
        if (imgMatch) {
          const caption = imgMatch[1];
          const rawSrc = imgMatch[2];
          const resolvedSrc = getAssetUrl(rawSrc);

          return (
            <figure key={idx} className="my-5 space-y-2 group">
              <div
                onClick={() => {
                  setActiveModalImage({ url: resolvedSrc, caption });
                  setZoomLevel(1);
                }}
                className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-dark-750 bg-slate-100 dark:bg-dark-900/60 cursor-pointer shadow-sm hover:shadow-md hover:border-brand-500/50 transition-all flex items-center justify-center p-1 sm:p-2"
              >
                <img
                  src={resolvedSrc}
                  alt={caption}
                  loading="lazy"
                  className="w-auto h-auto max-h-[520px] max-w-full object-contain rounded-xl group-hover:scale-[1.01] transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center pointer-events-none rounded-xl">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/75 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-xl flex items-center space-x-1.5 shadow-lg">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Увеличить фото</span>
                  </span>
                </div>
              </div>
              {caption && (
                <figcaption className="text-center text-xs text-slate-500 dark:text-slate-400 font-medium flex items-center justify-center space-x-1.5 pt-0.5">
                  <Camera className="w-3.5 h-3.5 text-brand-500 flex-shrink-0" />
                  <span>{caption}</span>
                </figcaption>
              )}
            </figure>
          );
        }

        // 3. Callouts
        if (trimmed.startsWith('> [!NOTE]') || trimmed.startsWith('>')) {
          const calloutBody = trimmed
            .replace(/^>\s*\[!NOTE\]\s*/, '')
            .replace(/^>\s*/gm, '')
            .trim();
          return (
            <div
              key={idx}
              className="my-3 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-900 dark:text-amber-200 flex items-start space-x-3 shadow-sm"
            >
              <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm leading-relaxed">{renderInline(calloutBody)}</div>
            </div>
          );
        }

        // 4. Legacy photo references fallback
        if (trimmed.startsWith('*📷 Фото:') || trimmed.startsWith('📷 Фото:')) {
          const photoCaption = trimmed.replace(/^\*?📷\s*Фото:\s*/, '').replace(/\*$/, '');
          return (
            <div
              key={idx}
              className="my-2 px-3.5 py-2.5 rounded-xl bg-slate-100/80 dark:bg-dark-800/80 border border-slate-200 dark:border-dark-700 flex items-center space-x-2.5 text-xs text-slate-600 dark:text-slate-400 font-medium"
            >
              <Camera className="w-4 h-4 text-brand-500 flex-shrink-0" />
              <span>{photoCaption}</span>
            </div>
          );
        }

        // 5. Code block
        if (trimmed.startsWith('```')) {
          const codeLines = trimmed.replace(/^```[a-z]*\n?/, '').replace(/\n?```$/, '');
          return (
            <div key={idx} className="relative my-3 rounded-2xl overflow-hidden border border-slate-700 shadow-md">
              <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800 text-[11px] font-mono text-slate-400">
                <span>Команда / Скрипт</span>
                <button
                  type="button"
                  onClick={() => handleCopy(codeLines)}
                  className="flex items-center space-x-1 text-slate-300 hover:text-white transition"
                >
                  {copiedCode === codeLines ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">Скопировано</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Копировать</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="p-4 bg-slate-950 text-slate-100 font-mono text-xs overflow-x-auto leading-relaxed">
                <code>{codeLines}</code>
              </pre>
            </div>
          );
        }

        // 6. Markdown Table (| Header | Header |)
        if (trimmed.startsWith('|') && trimmed.includes('\n|')) {
          const lines = trimmed.split('\n').map((l) => l.trim()).filter((l) => l.startsWith('|'));
          if (lines.length >= 2) {
            const headerLine = lines[0];
            const isSeparator = (l: string) => /^\|[\s\-:|]+\|$/.test(l);
            const dataLines = lines.slice(1).filter((l) => !isSeparator(l));

            const parseCells = (row: string) =>
              row
                .split('|')
                .slice(1, -1)
                .map((c) => c.trim());
            const headers = parseCells(headerLine);

            return (
              <div key={idx} className="my-4 overflow-x-auto rounded-2xl border border-slate-200 dark:border-dark-750 shadow-sm">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-100 dark:bg-dark-800 border-b border-slate-200 dark:border-dark-700 text-slate-900 dark:text-white font-bold">
                      {headers.map((h, hIdx) => (
                        <th key={hIdx} className="px-3.5 py-2.5 whitespace-nowrap">
                          {renderInline(h)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-dark-750 bg-white dark:bg-dark-850">
                    {dataLines.map((row, rIdx) => {
                      const cells = parseCells(row);
                      return (
                        <tr key={rIdx} className="hover:bg-slate-50 dark:hover:bg-dark-800/50 transition-colors">
                          {cells.map((c, cIdx) => (
                            <td key={cIdx} className="px-3.5 py-2.5 text-slate-700 dark:text-slate-300">
                              {renderInline(c)}
                            </td>
                          ))}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            );
          }
        }

        // 7. Unordered List
        if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
          const items = trimmed.split(/\n/).filter((l) => l.trim().startsWith('* ') || l.trim().startsWith('- '));
          return (
            <ul key={idx} className="space-y-1.5 my-2.5 pl-1">
              {items.map((it, itIdx) => {
                const itemText = it.replace(/^[\*\-]\s+/, '').trim();
                return (
                  <li key={itIdx} className="flex items-start space-x-2 text-xs sm:text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2 flex-shrink-0" />
                    <span>{renderInline(itemText)}</span>
                  </li>
                );
              })}
            </ul>
          );
        }

        // 7. Regular Paragraph
        return (
          <p key={idx} className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            {renderInline(trimmed)}
          </p>
        );
      })}

      {/* Lightbox Zoom Modal */}
      {activeModalImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
          <div className="bg-white dark:bg-dark-850 rounded-3xl border border-slate-200 dark:border-dark-700 shadow-2xl w-full max-w-5xl h-[90vh] flex flex-col overflow-hidden">
            {/* Header bar */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-slate-200 dark:border-dark-750">
              <div className="flex items-center space-x-2">
                <Camera className="w-4 h-4 text-brand-500 flex-shrink-0" />
                <h3 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white line-clamp-1 max-w-md">
                  {activeModalImage.caption || 'Иллюстрация к статье'}
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
                  href={activeModalImage.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-xl bg-brand-50 dark:bg-brand-950/50 hover:bg-brand-100 dark:hover:bg-brand-900/50 text-brand-600 dark:text-brand-400 text-xs font-bold transition"
                  title="Открыть оригинал в новой вкладке"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Оригинал</span>
                </a>

                <button
                  type="button"
                  onClick={() => setActiveModalImage(null)}
                  className="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-dark-750 transition ml-1"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Image viewport */}
            <div className="flex-1 overflow-auto p-4 bg-slate-100 dark:bg-dark-900 flex items-center justify-center">
              <div
                style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center center' }}
                className="transition-transform duration-200 max-w-full"
              >
                <img
                  src={activeModalImage.url}
                  alt={activeModalImage.caption}
                  className="rounded-xl shadow-2xl border border-slate-200 dark:border-dark-800 object-contain max-h-[75vh]"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
