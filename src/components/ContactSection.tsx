import React, { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Send, Copy, Check, MessageSquare, ExternalLink, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail || !formMessage) return;

    setSending(true);

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          service_id: 'service_9j0h9jg',
          template_id: 'template_brriylt',
          user_id: 'i39xYKUX07hgrGNx5',
          template_params: {
            user_name: formName,
            from_name: formName,
            user_email: formEmail,
            from_email: formEmail,
            reply_to: formEmail,
            message: formMessage
          }
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setFormName('');
        setFormEmail('');
        setFormMessage('');
      } else {
        const errorText = await response.text();
        throw new Error(errorText || 'Erro desconhecido');
      }
    } catch (err: any) {
      console.error('Erro ao enviar mensagem via EmailJS:', err);
      alert('❌ Falha ao enviar a mensagem. Por favor, tente novamente mais tarde.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contato" className="py-20 bg-slate-900/40 dark:bg-slate-950/40 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-left mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Conecte-se Comigo
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-3">
            📫 Vamos Conversar?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2 max-w-2xl">
            Entre em contato para parcerias tecnológicas, implementação de sistemas para CRVAs ou automação comercial com a <strong>Marks Systems</strong>.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start text-left">
          
          {/* Left Direct Links & Badges */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-7 shadow-md space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Mail className="w-5 h-5 text-blue-500" />
                <span>Canais de Comunicação</span>
              </h3>

              {/* Email Copy Card */}
              <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">E-mail Profissional:</span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate block">
                    {PERSONAL_INFO.email}
                  </span>
                </div>

                <button
                  onClick={copyEmail}
                  className="p-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-colors shrink-0"
                  title="Copiar E-mail"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Social Links List */}
              <div className="space-y-3">
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-blue-500 bg-slate-50 dark:bg-slate-950/60 flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#0077B5]/10 text-[#0077B5]">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-sm text-slate-900 dark:text-white block group-hover:text-blue-500">
                        LinkedIn
                      </span>
                      <span className="text-xs text-slate-500">fagner-sobrosa-088765215</span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-500" />
                </a>

                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-blue-500 bg-slate-50 dark:bg-slate-950/60 flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-800 text-white">
                      <Github className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-sm text-slate-900 dark:text-white block group-hover:text-blue-500">
                        GitHub
                      </span>
                      <span className="text-xs text-slate-500">fsobrosa12tc-byte</span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-500" />
                </a>
              </div>

              {/* Location Badge */}
              <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 flex items-center gap-3">
                <MapPin className="w-5 h-5 text-red-500 shrink-0" />
                <div>
                  <strong className="text-slate-900 dark:text-white block">Passo Fundo, RS - Brasil</strong>
                  Disponível para consultoria, desenvolvimento presencial e remoto.
                </div>
              </div>

            </div>
          </div>

          {/* Right Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-md">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-emerald-500" />
                <span>Enviar Mensagem para Antônio</span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                Preencha o formulário abaixo para iniciar uma conversa direta com a Marks Systems.
              </p>

              {!submitted ? (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
                      Seu Nome Completo
                    </label>
                    <input
                      type="text"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="Ex: João Silva"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:border-blue-500 focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
                      Seu E-mail de Contato
                    </label>
                    <input
                      type="email"
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      placeholder="Ex: joao@empresa.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:border-blue-500 focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
                      Sua Mensagem ou Projeto
                    </label>
                    <textarea
                      value={formMessage}
                      onChange={(e) => setFormMessage(e.target.value)}
                      rows={4}
                      placeholder="Descreva sua necessidade ou projeto..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:border-blue-500 focus:outline-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full py-3.5 px-6 rounded-xl font-extrabold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-xl shadow-blue-600/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {sending ? (
                      <span>Enviando...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Enviar Mensagem Direta</span>
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="p-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center mx-auto font-black">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Mensagem Encaminhada!</h4>
                  <p className="text-xs text-slate-300">
                    Sua mensagem foi processada e será respondida o mais breve possível pelo e-mail <strong>{PERSONAL_INFO.email}</strong>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-4 py-2 rounded-lg bg-slate-800 text-xs font-bold text-white hover:bg-slate-700"
                  >
                    Enviar Nova Mensagem
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
