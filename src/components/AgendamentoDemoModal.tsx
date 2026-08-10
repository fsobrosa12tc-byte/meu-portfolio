import React, { useState } from 'react';
import { X, Calendar, Clock, DollarSign, CheckCircle2, QrCode, User, Scissors, Sparkles } from 'lucide-react';

interface AgendamentoDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ServiceOption {
  id: string;
  name: string;
  category: string;
  duration: string;
  price: number;
}

export const AgendamentoDemoModal: React.FC<AgendamentoDemoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const services: ServiceOption[] = [
    { id: '1', name: 'Nail Art & Alongamento em Gel', category: 'Nail Designer', duration: '1h 30min', price: 150.00 },
    { id: '2', name: 'Manutenção de Cutilagem & Esmaltação', category: 'Nail Designer', duration: '45min', price: 75.00 },
    { id: '3', name: 'Design de Sobrancelhas + Henna', category: 'Estética', duration: '40min', price: 65.00 },
    { id: '4', name: 'Tratamento Capilar & Escova', category: 'Salão de Beleza', duration: '1h 15min', price: 120.00 },
  ];

  const [selectedService, setSelectedService] = useState<ServiceOption>(services[0]);
  const [clientName, setClientName] = useState('Juliana Mendonça');
  const [selectedDate, setSelectedDate] = useState('2026-08-10');
  const [selectedSlot, setSelectedSlot] = useState('14:30');
  const [paymentMethod, setPaymentMethod] = useState<'PIX' | 'Cartao'>('PIX');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const timeSlots = ['09:00', '10:30', '13:00', '14:30', '16:00', '17:30'];

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingConfirmed(true);
  };

  const resetForm = () => {
    setBookingConfirmed(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-indigo-600 text-white">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span>Plataforma de Agendamento & Gestão</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                  Demo
                </span>
              </h3>
              <p className="text-xs text-slate-400">Automação de Horários e Pagamentos PIX para Salões & Estéticas</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-left">
          
          {!bookingConfirmed ? (
            <form onSubmit={handleConfirmBooking} className="space-y-6">
              
              {/* Select Service */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  1. Escolha o Serviço
                </label>
                <div className="grid sm:grid-cols-2 gap-3">
                  {services.map((s) => {
                    const isSelected = selectedService.id === s.id;
                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setSelectedService(s)}
                        className={`p-3.5 rounded-xl border text-left transition-all ${
                          isSelected
                            ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-md'
                            : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex justify-between items-start mb-1">
                          <span className="text-xs font-bold text-indigo-400 uppercase">{s.category}</span>
                          <span className="text-sm font-extrabold text-emerald-400">R$ {s.price.toFixed(2)}</span>
                        </div>
                        <div className="font-bold text-sm text-white">{s.name}</div>
                        <div className="text-xs text-slate-400 flex items-center gap-1 mt-1">
                          <Clock className="w-3 h-3" />
                          <span>Duração: {s.duration}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Client & Date Selector */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Nome da Cliente
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    <input
                      type="text"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="Nome da cliente"
                      className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-indigo-500 focus:outline-none"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Data do Agendamento
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-indigo-500 focus:outline-none"
                    required
                  />
                </div>
              </div>

              {/* Time Slots */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  2. Horários Disponíveis em Tempo Real
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {timeSlots.map((slot) => {
                    const isSelected = selectedSlot === slot;
                    return (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedSlot(slot)}
                        className={`py-2 rounded-lg text-xs font-bold border transition-all ${
                          isSelected
                            ? 'bg-indigo-600 text-white border-indigo-500 shadow-md'
                            : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Payment Method */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 font-semibold block">Total a Confirmar</span>
                  <span className="text-2xl font-black text-white">R$ {selectedService.price.toFixed(2)}</span>
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('PIX')}
                    className={`px-4 py-2 rounded-lg text-xs font-bold border flex items-center gap-1.5 ${
                      paymentMethod === 'PIX'
                        ? 'bg-emerald-600/20 text-emerald-400 border-emerald-500'
                        : 'bg-slate-900 text-slate-400 border-slate-800'
                    }`}
                  >
                    <QrCode className="w-3.5 h-3.5" />
                    <span>PIX Automático</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('Cartao')}
                    className={`px-4 py-2 rounded-lg text-xs font-bold border ${
                      paymentMethod === 'Cartao'
                        ? 'bg-blue-600/20 text-blue-400 border-blue-500'
                        : 'bg-slate-900 text-slate-400 border-slate-800'
                    }`}
                  >
                    Cartão no Balcão
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-extrabold text-sm shadow-xl shadow-indigo-600/20 transition-all"
              >
                🚀 Confirmar Agendamento e Gerar Comanda
              </button>

            </form>
          ) : (
            /* Confirmation Receipt State */
            <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4 animate-fade-in">
              <div className="w-14 h-14 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center mx-auto font-black shadow-lg shadow-emerald-500/20">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h4 className="text-xl font-extrabold text-white">Agendamento Confirmado com Sucesso!</h4>
                <p className="text-xs text-emerald-400 font-medium mt-1">Registro inserido na tabela SQL `agendamentos`</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 text-left text-xs font-mono text-slate-300 space-y-2 max-w-md mx-auto border border-slate-800">
                <div className="flex justify-between border-b border-slate-800 pb-1">
                  <span className="text-slate-500">Cliente:</span>
                  <span className="text-white font-bold">{clientName}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-1">
                  <span className="text-slate-500">Serviço:</span>
                  <span className="text-indigo-400 font-bold">{selectedService.name}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-1">
                  <span className="text-slate-500">Data/Hora:</span>
                  <span className="text-white">{selectedDate} às {selectedSlot}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Valor / Método:</span>
                  <span className="text-emerald-400 font-bold">R$ {selectedService.price.toFixed(2)} ({paymentMethod})</span>
                </div>
              </div>

              <button
                onClick={resetForm}
                className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-colors"
              >
                + Novo Agendamento de Teste
              </button>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-950 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white font-semibold text-xs"
          >
            Fechar Demo
          </button>
        </div>

      </div>
    </div>
  );
};
