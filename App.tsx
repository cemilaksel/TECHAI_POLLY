import React, { useState } from 'react';
import Header from './components/Header';
import ChatList from './components/ChatList';
import ControlBar from './components/ControlBar';
import SettingsModal from './components/SettingsModal';
import StatsModal from './components/StatsModal';
import ApiKeyPrompt from './components/ApiKeyPrompt';
import { useTranslationSession } from './hooks/useTranslationSession';
import { useStudyGuide } from './hooks/useStudyGuide';
import { useApiKey } from './hooks/useApiKey';
import { defaultSettings } from './models/SettingsModel';

const App: React.FC = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [settings, setSettings] = useState(defaultSettings);

  const { isValid: hasApiKey, saveKey } = useApiKey();
  const { 
    wordStats, studyGuide, isGeneratingGuide, updateWordStats, 
    generateStudyGuide, exportGuideAsText, clearStats, essentialList, 
    currentLanguage, setCurrentLanguage 
  } = useStudyGuide();

  const { 
    status, history, stream, duration,
    currentInputText, currentOutputText, connect, disconnect, clearHistory, downloadHistoryAsText,
    sourceLang, setSourceLang, targetLang, setTargetLang
  } = useTranslationSession({
    onWordDetected: updateWordStats,
    isAudioOutputEnabled: settings.isAudioOutputEnabled,
  });

  // Sync StudyGuide context with current pair. 
  React.useEffect(() => {
     if (sourceLang === 'RO' || targetLang === 'RO') setCurrentLanguage('RO');
     else if (sourceLang === 'DE' || targetLang === 'DE') setCurrentLanguage('DE');
     else setCurrentLanguage('EN');
  }, [sourceLang, targetLang, setCurrentLanguage]);

  return (
    <div className="flex flex-col h-screen bg-slate-950 text-slate-200 font-sans relative">
      {!hasApiKey && <ApiKeyPrompt onSave={saveKey} />}

      <SettingsModal 
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
        selectedDeviceId={settings.selectedDeviceId}
        onDeviceChange={(id) => setSettings({...settings, selectedDeviceId: id})}
        isAmbientMode={settings.isAmbientMode}
        onAmbientModeChange={(val) => setSettings({...settings, isAmbientMode: val})}
        isSystemAudioEnabled={settings.isSystemAudioEnabled}
        onSystemAudioChange={(val) => setSettings({...settings, isSystemAudioEnabled: val})}
      />

      <StatsModal 
        isOpen={showStats}
        onClose={() => setShowStats(false)}
        wordStats={wordStats}
        studyGuide={studyGuide}
        isGeneratingGuide={isGeneratingGuide}
        onGenerateGuide={generateStudyGuide}
        onExport={exportGuideAsText}
        onClear={clearStats}
        essentialList={essentialList}
        currentLanguage={currentLanguage}
      />

      <Header 
        status={status}
        sourceLang={sourceLang}
        setSourceLang={setSourceLang}
        targetLang={targetLang}
        setTargetLang={setTargetLang}
        isAudioOutputEnabled={settings.isAudioOutputEnabled}
        onToggleAudioOutput={() => setSettings({...settings, isAudioOutputEnabled: !settings.isAudioOutputEnabled})}
        onOpenStats={() => setShowStats(true)}
        onOpenSettings={() => setShowSettings(true)}
        onDownloadChat={downloadHistoryAsText}
        onClearChat={clearHistory}
        hasApiKey={hasApiKey}
      />

      <main className="flex-1 overflow-hidden relative">
        <ChatList history={history} currentInputText={currentInputText} currentOutputText={currentOutputText} />
      </main>

      <ControlBar 
        status={status}
        stream={stream}
        duration={duration}
        activeMode={`${sourceLang}_${targetLang}`}
        isAmbientMode={settings.isAmbientMode}
        isSystemAudioEnabled={settings.isSystemAudioEnabled}
        onSystemAudioChange={(val) => setSettings({...settings, isSystemAudioEnabled: val})}
        onConnect={() => connect(settings.selectedDeviceId, settings.isAmbientMode, settings.isSystemAudioEnabled)}
        onDisconnect={disconnect}
      />
    </div>
  );
};

export default App;
