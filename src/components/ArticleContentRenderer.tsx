import React, { useState } from 'react';
import { Check, Copy, ExternalLink, Camera, AlertCircle, ChevronRight } from 'lucide-react';

interface ArticleContentRendererProps {
  content: string;
}

export const ArticleContentRenderer: React.FC<ArticleContentRendererProps> = ({ content }) => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

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

        // 2. Callouts
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

        // 3. Photo references
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

        // 4. Code block
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

        // 5. Unordered List
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

        // 6. Regular Paragraph
        return (
          <p key={idx} className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            {renderInline(trimmed)}
          </p>
        );
      })}
    </div>
  );
};
