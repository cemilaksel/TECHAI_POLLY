import React from 'react';
import { ConnectionStatus } from '../types';
import { ChatBubbleLeftRightIcon, ChartBarIcon, Cog6ToothIcon, ArrowDownTrayIcon, SpeakerWaveIcon, SpeakerXMarkIcon, ExclamationTriangleIcon, TrashIcon, ArrowsRightLeftIcon } from '@heroicons/react/24/outline';
import { SUPPORTED_LANGUAGES } from '../models/LanguageModel';

interface HeaderProps {
  status: ConnectionStatus;
  sourceLang: string;
  setSourceLang: (code: string) => void;
  targetLang: string;
  setTargetLang: (code: string) => void;
  isAudioOutputEnabled: boolean;
  onToggleAudioOutput: () => void;
  onOpenStats: () => void;
  onOpenSettings: () => void;
  onDownloadChat: () => void;
  onClearChat: () => void;
  hasApiKey: boolean;
}

const Header: React.FC<HeaderProps> = ({ 
  status, 
  sourceLang, setSourceLang,
  targetLang, setTargetLang,
  isAudioOutputEnabled,
  onToggleAudioOutput,
  onOpenStats, 
  onOpenSettings,
  onDownloadChat,
  onClearChat,
  hasApiKey
}) => {
  
  const swapLanguages = () => {
    const temp = sourceLang;
    setSourceLang(targetLang);
    setTargetLang(temp);
  };

  return (
    <header className="flex-none h-16 border-b border-slate-800 bg-slate-900/50 backdrop-blur-md px-4 md:px-6 flex items-center justify-between z-10 overflow-x-auto custom-scrollbar">
      <div className="flex items-center gap-3 min-w-max">
        <div className="p-2 bg-gradient-to-br from-primary-500 to-indigo-600 rounded-lg shadow-lg shadow-primary-500/20 hidden sm:block">
          <ChatBubbleLeftRightIcon className="w-5 h-5 text-white" />
        </div>
        <div>
          <h1 className="text-sm md:text-base font-bold text-white tracking-tight leading-none">Tech Interpreter</h1>
          <div className="flex items-center gap-2 text-[10px] text-slate-400 mt-0.5">
             <span className="flex items-center gap-1">
               <span className={`w-1.5 h-1.5 rounded-full ${
                  status === 'connected' ? 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]' : 
                  status === 'connecting' ? 'bg-amber-400' : 
                  status === 'error' ? 'bg-red-500' :
                  'bg-slate-600'
                }`}></span>
               {status === 'connected' ? 'Live' : 
                status === 'connecting' ? 'Connecting' : 
                status === 'error' ? 'Error' : 
                'Offline'}
             </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-4 mx-2">
        <div className="flex items-center gap-1 bg-slate-950/50 border border-slate-800 p-1 rounded-xl shadow-inner">
          <select 
            value={sourceLang}
            onChange={(e) => setSourceLang(e.target.value)}
            disabled={status !== 'disconnected'}
            className="bg-transparent text-slate-200 text-xs font-medium py-1 pl-1 pr-4 outline-none appearance-none cursor-pointer disabled:cursor-not-allowed hover:text-white transition-colors"
          >
            {SUPPORTED_LANGUAGES.map(l => (
              <option key={l.code} value={l.code} className="bg-slate-900">{l.flag} {l.code}</option>
            ))}
          </select>
          
          <button 
            onClick={swapLanguages}
            disabled={status !== 'disconnected'}
            className="p-1 text-slate-500 hover:text-primary-400 transition-colors disabled:opacity-50"
          >
            <ArrowsRightLeftIcon className="w-3.5 h-3.5" />
          </button>

          <select 
            value={targetLang}
            onChange={(e) => setTargetLang(e.target.value)}
            disabled={status !== 'disconnected'}
            className="bg-transparent text-slate-200 text-xs font-medium py-1 pl-1 pr-4 outline-none appearance-none cursor-pointer disabled:cursor-not-allowed hover:text-white transition-colors text-right"
          >
            {SUPPORTED_LANGUAGES.map(l => (
              <option key={l.code} value={l.code} className="bg-slate-900">{l.flag} {l.code}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex items-center gap-1 md:gap-2">
        <button 
          onClick={onToggleAudioOutput}
          className={`p-2 transition-colors rounded-lg hover:bg-slate-800 ${isAudioOutputEnabled ? 'text-primary-400' : 'text-slate-500'}`}
          title={isAudioOutputEnabled ? "Mute AI" : "Unmute AI"}
        >
           {isAudioOutputEnabled ? <SpeakerWaveIcon className="w-5 h-5" /> : <SpeakerXMarkIcon className="w-5 h-5" />}
        </button>

        <div className="h-6 w-px bg-slate-800 mx-1 hidden md:block"></div>

        <button 
          onClick={onClearChat}
          className="p-2 text-slate-400 hover:text-red-400 transition-colors hover:bg-slate-800 rounded-lg"
          title="Reset"
        >
          <TrashIcon className="w-5 h-5" />
        </button>

        <button 
          onClick={onDownloadChat}
          className="p-2 text-slate-400 hover:text-emerald-400 transition-colors hover:bg-slate-800 rounded-lg hidden sm:block"
          title="Save"
        >
          <ArrowDownTrayIcon className="w-5 h-5" />
        </button>
        <button 
          onClick={onOpenStats}
          className="p-2 text-slate-400 hover:text-primary-400 transition-colors hover:bg-slate-800 rounded-lg"
          title="Study"
        >
          <ChartBarIcon className="w-5 h-5" />
        </button>
        <button 
          onClick={onOpenSettings}
          className="p-2 text-slate-400 hover:text-white transition-colors hover:bg-slate-800 rounded-lg"
          title="Settings"
        >
          <Cog6ToothIcon className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
};

export default Header;