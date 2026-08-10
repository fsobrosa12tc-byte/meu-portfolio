import React, { useState } from 'react';
import { X, Car, CheckCircle2, Clock, DollarSign, FileText, RefreshCw, AlertCircle, ShieldCheck } from 'lucide-react';

interface IntegraCrvaDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Ticket {
  id: string;
  ownerName: string;
  plate: string;
  serviceType: string;
  status: 'Aguardando Triagem' | 'Em Vistoria IVD' | 'Concluído no Balcão' | 'Taxa Paga';
  time: string;
  fee: number;
}

export const IntegraCrvaDemoModal: React.FC<IntegraCrvaDemoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [plate, setPlate] = useState('IXR-4820');
  const [ownerName, setOwnerName] = useState('Carlos Eduardo Silva');
  const [serviceType, setServiceType] = useState('Transferência de Propriedade + Vistoria IVD');
  const [chassiStatus, setChassiStatus] = useState<'Pendentes' | 'Aprovado'>('Aprovado');

  const [tickets, setTickets] = useState<Ticket[]>([
    {
      id: 'CRVA-001',
      ownerName: 'Mariana Oliveira',
      plate: 'RST-9A12',
      serviceType: 'Primeiro Emplacamento',
      status: 'Concluído no Balcão',
      time: '14:20',
      fee: 285.50
    },
    {
      id: 'CRVA-002',
      ownerName: 'Roberto M. Santos',
      plate: 'IOA-3049',
      serviceType: 'Vistoria IVD Transferência',
      status: 'Em Vistoria IVD',
      time: '14:35',
      fee: 198.00
    }
  ]);

  const handleGenerateTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!plate || !ownerName) return;

    const newTicket: Ticket = {
      id: `CRVA-${Math.floor(100 + Math.random() * 900)}`,
      ownerName,
      plate: plate.toUpperCase(),
      serviceType,
      status: 'Aguardando Triagem',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      fee: serviceType.includes('Transferência') ? 198.00 : 285.50
    };

    setTickets([newTicket, ...tickets]);
    setPlate('');
    setOwnerName('');
  };

  const advanceStatus = (id: string) => {
    setTickets(tickets.map(t => {
      if (t.id === id) {
        if (t.status === 'Aguardando Triagem') return { ...t, status: 'Em Vistoria IVD' };
        if (t.status === 'Em Vistoria IVD') return { ...t, status: 'Taxa Paga' };
        if (t.status === 'Taxa Paga') return { ...t, status: 'Concluído no Balcão' };
      }
      return t;
    }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-blue-600 text-white font-black text-sm">
              IVD
            </div>
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span>Simulador INTEGRA CRVA</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Demonstração Interativa
                </span>
              </h3>
              <p className="text-xs text-slate-400">Balcão de Atendimento, Fila do CRVA & Módulo PDV DETRAN-RS</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Scrollable */}
        <div className="p-6 overflow-y-auto space-y-6 text-left">
          
          {/* Info Banner */}
          <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs sm:text-sm flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white block font-semibold mb-0.5">Módulo de Atendimento e PDV da Marks Systems</strong>
              Este simulador exemplifica a triagem de documentos, emissão de senha de atendimento e avanço de laudo IVD em tempo real.
            </div>
          </div>

          {/* Form & Queue Grid */}
          <div className="grid lg:grid-cols-12 gap-6">
            
            {/* Ticket Generator */}
            <form onSubmit={handleGenerateTicket} className="lg:col-span-5 bg-slate-950/60 p-5 rounded-xl border border-slate-800 space-y-4">
              <h4 className="font-bold text-white text-sm flex items-center gap-2">
                <Car className="w-4 h-4 text-blue-400" />
                <span>Emitir Ficha de Atendimento</span>
              </h4>

              <div>
                <label className="block text-xs text-slate-400 font-medium mb-1">Nome do Proprietário</label>
                <input
                  type="text"
                  value={ownerName}
                  onChange={(e) => setOwnerName(e.target.value)}
                  placeholder="Ex: Carlos Eduardo Silva"
                  className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white text-sm focus:border-blue-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs text-slate-400 font-medium mb-1">Placa do Veículo</label>
                <input
                  type="text"
                  value={plate}
                  onChange={(e) => setPlate(e.target.value)}
                  placeholder="Ex: IXR-4820"
                  className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white text-sm font-mono tracking-wider uppercase focus:border-blue-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs text-slate-400 font-medium mb-1">Serviço de Trânsito</label>
                <select
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white text-sm focus:border-blue-500 focus:outline-none"
                >
                  <option value="Transferência de Propriedade + Vistoria IVD">Transferência de Propriedade + Vistoria IVD</option>
                  <option value="Primeiro Emplacamento">Primeiro Emplacamento</option>
                  <option value="Segunda Via CRV / CRLV-e">Segunda Via CRV / CRLV-e</option>
                  <option value="Troca de Placa Mercosul">Troca de Placa Mercosul</option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-slate-400 font-medium mb-1">Vistoria Prévia de Chassi/Motor</label>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setChassiStatus('Aprovado')}
                    className={`flex-1 py-1.5 rounded text-xs font-bold border ${
                      chassiStatus === 'Aprovado' ? 'bg-emerald-600/20 text-emerald-400 border-emerald-500' : 'bg-slate-900 text-slate-400 border-slate-800'
                    }`}
                  >
                    OK (Conforme)
                  </button>
                  <button
                    type="button"
                    onClick={() => setChassiStatus('Pendentes')}
                    className={`flex-1 py-1.5 rounded text-xs font-bold border ${
                      chassiStatus === 'Pendentes' ? 'bg-amber-600/20 text-amber-400 border-amber-500' : 'bg-slate-900 text-slate-400 border-slate-800'
                    }`}
                  >
                    Exige Regularização
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/20 transition-all"
              >
                + Gerar Ficha no Balcão
              </button>
            </form>

            {/* Active Queue Display */}
            <div className="lg:col-span-7 bg-slate-950/60 p-5 rounded-xl border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold text-white text-sm flex items-center gap-2">
                    <Clock className="w-4 h-4 text-cyan-400" />
                    <span>Fila em Tempo Real (CRVA)</span>
                  </h4>
                  <span className="text-xs text-slate-400">{tickets.length} AtendimentosAtivos</span>
                </div>

                <div className="space-y-3 max-h-[260px] overflow-y-auto pr-1">
                  {tickets.map((t) => (
                    <div
                      key={t.id}
                      className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between gap-3 text-xs"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-extrabold text-blue-400 font-mono">{t.id}</span>
                          <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-200 font-mono font-bold">
                            {t.plate}
                          </span>
                        </div>
                        <div className="text-slate-300 font-medium mt-1">{t.ownerName}</div>
                        <div className="text-slate-500 text-[11px]">{t.serviceType}</div>
                      </div>

                      <div className="text-right">
                        <span
                          className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold mb-1 ${
                            t.status === 'Concluído no Balcão'
                              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                              : t.status === 'Em Vistoria IVD'
                              ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                              : t.status === 'Taxa Paga'
                              ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                              : 'bg-slate-800 text-slate-300'
                          }`}
                        >
                          {t.status}
                        </span>

                        <div className="text-slate-400 font-bold mb-1">R$ {t.fee.toFixed(2)}</div>

                        <button
                          onClick={() => advanceStatus(t.id)}
                          className="text-[11px] text-blue-400 hover:text-blue-300 font-bold flex items-center gap-1 ml-auto"
                        >
                          <span>Avançar Etapa</span>
                          <RefreshCw className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>Tecnologia: Python + SQL + Módulo PDV</span>
                <span className="text-emerald-400 font-semibold">🟢 Operante Marks Systems</span>
              </div>
            </div>

          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-950 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white font-semibold text-xs"
          >
            Fechar Simulador
          </button>
        </div>

      </div>
    </div>
  );
};
