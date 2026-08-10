import React, { useState } from 'react';
import { X, Copy, Check, Download, ExternalLink, Code2, Rocket, FileCode } from 'lucide-react';
import { generateVanillaHTMLCode } from '../utils/exportVanilla';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExportModal: React.FC<ExportModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [copied, setCopied] = useState(false);
  const vanillaCode = generateVanillaHTMLCode();

  const handleCopy = () => {
    navigator.clipboard.writeText(vanillaCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    const blob = new Blob([vanillaCode], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'index.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] text-left">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-600 text-white">
              <Download className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span>Exportar HTML, CSS e JS Vanilla</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Pronto para Netlify & Vercel
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                Código estático autônomo sem dependências ou build steps
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Action Header */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-white text-sm flex items-center gap-2">
                <FileCode className="w-4 h-4 text-emerald-400" />
                <span>Arquivo Standalone: index.html</span>
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Utiliza HTML5 semântico, variáveis CSS customizadas e JavaScript puro (Vanilla).
              </p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={handleCopy}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center gap-2 transition-colors"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Código Copiado!' : 'Copiar Código'}</span>
              </button>

              <button
                onClick={handleDownload}
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-emerald-600/20 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Baixar index.html</span>
              </button>
            </div>
          </div>

          {/* Code Viewer Box */}
          <div className="relative rounded-xl bg-slate-950 border border-slate-800 overflow-hidden">
            <div className="px-4 py-2 bg-slate-900 border-b border-slate-800 text-xs font-mono text-slate-400 flex items-center justify-between">
              <span>index.html (Vanilla Web Bundle)</span>
              <span>UTF-8 • {vanillaCode.length} bytes</span>
            </div>
            <pre className="p-4 text-xs font-mono text-slate-300 overflow-x-auto max-h-[300px] leading-relaxed">
              <code>{vanillaCode}</code>
            </pre>
          </div>

          {/* Deployment Instructions for Netlify and Vercel */}
          <div className="grid sm:grid-cols-2 gap-4">
            
            {/* Netlify Guide */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
              <h4 className="text-sm font-bold text-cyan-400 flex items-center gap-2">
                <Rocket className="w-4 h-4" />
                <span>Como publicar no Netlify</span>
              </h4>
              <ol className="text-xs text-slate-300 space-y-1 list-decimal list-inside">
                <li>Baixe o arquivo <strong>index.html</strong> acima.</li>
                <li>Acesse <strong>netlify.com</strong> e faça login.</li>
                <li>Arraste o arquivo ou a pasta contendo o <code className="text-emerald-400">index.html</code> no painel "Sites".</li>
                <li>Seu site estará no ar em segundos!</li>
              </ol>
            </div>

            {/* Vercel Guide */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Rocket className="w-4 h-4 text-white" />
                <span>Como publicar na Vercel</span>
              </h4>
              <ol className="text-xs text-slate-300 space-y-1 list-decimal list-inside">
                <li>Crie um repositório no seu GitHub (ex: <code className="text-blue-400">fsobrosa12tc-byte/portfolio</code>).</li>
                <li>Adicione o arquivo <strong>index.html</strong> no repositório.</li>
                <li>Acesse <strong>vercel.com</strong>, conecte com seu GitHub e importe o repositório.</li>
                <li>Pronto! O deploy estático será automático.</li>
              </ol>
            </div>

          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-950 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white font-semibold text-xs"
          >
            Fechar
          </button>
        </div>

      </div>
    </div>
  );
};
