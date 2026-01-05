# 🗺️ TECHAIPOLY Teknik Plan & Mimari Dokümantasyon - Tasarım

TECHAIPOLY, düşük gecikmeli (low-latency) sesli çeviri ve teknik terim odaklı dil öğrenme asistanıdır. Bu doküman, projenin teknik yapısını, "Vibe Coding" prensiplerini ve mimari kararlarını detaylandırır.

---

## 🏗️ Temel Mimari (MVC + SRP)

Proje, sürdürülebilirlik ve test edilebilirlik için **Model-View-Controller (MVC)** yapısını ve **Single Responsibility Principle (SRP)** prensiplerini takip eder.

### 🧱 Katmanlı Yapı Özeti

| Katman            | Sorumluluk                                      | Konum                         |
|:------------------|:------------------------------------------------|:------------------------------|
| **Model**         | Veri yapıları, yerel depolama ve dil mantığı    | `models/`, `data/`            |
| **View**          | UI bileşenleri, stil ve kullanıcı etkileşimi    | `components/`                 |
| **Controller**    | İş akışı, API orkestrasyonu ve state yönetimi   | `controllers/`, `hooks/`      |

---

### 1. Model (Veri ve İş Mantığı Katmanı)
`src/models/` dizini altında yer alan bu katman, uygulamanın "ne olduğu" ile ilgilenir.
- **ApiKeyModel:** API anahtarlarının tarayıcıda (LocalStorage) güvenli yönetimi.
- **SettingsModel:** Cihaz tercihleri, Ambient/TV modları ve ses çıkış ayarları.
- **TranslationModel:** Konuşma geçmişi objeleri ve basit dil algılama regex mantığı.
- **AudioModel:** Web Audio API için örnekleme hızları ve buffer sabitleri.
- **LanguageModel:** Sistem komutları (System Instructions) ve dil bayrakları.

### 2. View (Arayüz Katmanı)
`src/components/` dizini altındaki React bileşenleri, veriyi görselleştirmekle yükümlüdür.
- **Header:** Durum göstergesi ve dil seçimi dropdownları.
- **ChatList:** Dinamik mesaj balonları ve gerçek zamanlı "Listening" animasyonu.
- **ControlBar:** Mikrofon butonu, Tab Audio seçeneği ve **AudioVisualizer**.
- **StatsModal:** Çok dilli kelime istatistikleri ve AI tabanlı çalışma kartları.
- **SettingsModal:** Teknik ayarların yapıldığı kullanıcı arayüzü.

### 3. Controller & Hooks (Orkestrasyon Katmanı)
`src/controllers/` ve `hooks/` dizinleri, Model ve View arasındaki köprüyü kurar.
- **AudioController:** Ses yakalama, downsampling (16kHz) ve playback zamanlaması.
- **TranslationController:** Metin buffer'lama ve geçmişe (history) commit etme işlemleri.
- **useTranslationSession:** Gemini Live API (WebSocket) bağlantısını yöneten ana beyin.
- **useStudyGuide:** Kelime tespiti, dil bazlı ayrıştırma ve istatistik biriktirme.

---

## 🛠️ Teknik Yığın (Tech Stack)

| Teknoloji           | Kullanım Amacı                                          |
|:--------------------|:--------------------------------------------------------|
| **Gemini 2.5 Flash**| Çok modlu (Ses/Metin) gerçek zamanlı multimodal işleme. |
| **Google GenAI SDK**| Live API bağlantısı ve WebSocket yönetimi.              |
| **Web Audio API**   | PCM 16-bit ses yakalama, işleme ve düşük gecikmeli çalma. |
| **React 19**        | Modern, performanslı ve bileşen tabanlı UI yönetimi.    |
| **Tailwind CSS**    | Hızlı, estetik ve responsive tasarım (Dark Mode).       |
| **Vite**            | Hot-reload özellikli hızlı geliştirme ortamı.           |

---

## 📂 Dosya Yapısı (Project Blueprint)

```text
.
├── App.tsx                   # Ana Uygulama Kabuğu (Orkestratör)
├── index.tsx                 # Giriş Noktası
├── types.ts                  # Global Tip Tanımlamaları
├── components/               # View: Saf Arayüz Bileşenleri
│   ├── ApiKeyPrompt.tsx      # API Anahtarı Giriş Ekranı
│   ├── AudioVisualizer.tsx   # Ses Spektrum Görselleştirici
│   ├── ChatList.tsx          # Mesaj Balonları ve Buffer Görünümü
│   ├── ControlBar.tsx        # Ana Kontroller (Mikrofon, Tab Audio)
│   ├── Header.tsx            # Dil Seçimi ve Global Aksiyonlar
│   ├── SettingsModal.tsx     # Teknik Yapılandırma Paneli
│   └── StatsModal.tsx        # Study Guide ve İstatistik Ekranı
├── controllers/              # Controller: Mantıksal İşleyiciler
│   ├── ApiKeyController.ts   # API Key Validasyon ve Kayıt Kontrolü
│   ├── AudioController.ts    # Web Audio API Akış Yönetimi
│   └── TranslationController.ts # Metin İşleme ve Geçmişe Yazma
├── hooks/                    # Controller (React): Hook Tabanlı Logic
│   ├── useApiKey.ts          # API Key State Yönetimi
│   ├── useStudyGuide.ts      # Kelime Takibi ve AI Analiz Logic
│   └── useTranslationSession.ts # Gemini Live WebSocket Yönetimi
├── models/                   # Model: Veri Şemaları ve Sabitler
│   ├── ApiKeyModel.ts        # Storage Kuralları
│   ├── AudioModel.ts         # Ses Örnekleme ve Zamanlama Parametreleri
│   ├── LanguageModel.ts      # Desteklenen Diller ve Sistem Komutları
│   ├── SettingsModel.ts      # Uygulama Tercihleri Şeması
│   └── TranslationModel.ts   # Konuşma Objeleri ve Dil Algılama Regex
├── services/                 # Utility: Altyapı Servisleri
│   ├── audioUtils.ts         # PCM/Base64 Dönüşüm ve Downsampling
│   └── geminiService.ts      # Gemini Flash API Çağrıları (Study Cards)
└── data/                     # Veri: Dil Kaynakları
    ├── essentialWords_en.ts  # İngilizce Temel Kelimeler (4000)
    ├── essentialWords_tr.ts  # Türkçe Karşılıklar (Opsiyonel)
    ├── essentialWords_ro.ts  # Romence Temel Kelimeler
    └── essentialWords_de.ts  # Almanca Temel Kelimeler
```

---

## ⛔ Korunan Dosyalar (Vibe Coding Critical)

"Vibe Coding" metodolojisinde uygulamanın kararlılığını korumak için aşağıdaki dosyaların çekirdek yapısı manuel müdahale dışında korunmalıdır:

1.  **`services/audioUtils.ts`**: Ham ses verisinin (PCM Float32) API'nin kabul ettiği (PCM Int16 Base64) formatına dönüşümü kritiktir.
2.  **`hooks/useTranslationSession.ts`**: WebSocket yaşam döngüsü ve buffer senkronizasyonu bu dosyadadır.
3.  **`models/LanguageModel.ts`**: Gemini'nin karakterini belirleyen `SystemInstruction` yapısı burada saklanır.

---

## 🔄 Veri Akış Şeması (Data Flow)

```text
[GİRİŞ] -> Kullanıcı Sesi (Mic) VEYA Tab Sesi (System Audio)
   |
[İŞLEME] -> AudioController: Downsample (Mic Rate -> 16kHz)
   |
[İLETİM] -> useTranslationSession: WebSocket.send(Base64 PCM)
   |
[YAPAY ZEKA] -> Gemini Live API: Simultaneous Multimodal Processing
   |
[GERİ BİLDİRİM]
   ├──> Ses (Binary) -> decodeAudioData -> AudioContext Playback (Interpreter)
   ├──> Metin (JSON) -> TranslationController -> ChatList UI (Transkripsiyon)
   └──> Kelimeler -> useStudyGuide -> LocalStorage Stats (Analiz)
```

---
---

## 🔄 Veri Akış Şeması

1.  **Giriş:** Kullanıcı konuşur veya sistem sesi (Capture Tab Audio) yakalanır.
2.  **Lokal İşleme:** `AudioController` sesi 16kHz PCM formatına çevirir (Downsampling).
3.  **İletim:** `useTranslationSession` üzerinden ham ses verisi Gemini Live API'ye akıtılır.
4.  **AI Yanıtı:** Gemini anında simultane çeviri metni ve ses verisi döner.
5.  **Çıkış:** 
    - Ses `audioUtils` ile çözülüp hoparlöre gönderilir.
    - Metin `ChatList`'e yansıtılır.
    - Kelimeler `useStudyGuide` tarafından istatistiklere işlenir.

---

## 🧠 State Yapısı (Architecture)

Uygulamanın ana state'i `ConversationPair` yapısı üzerine kuruludur:

```typescript
// types.ts
export interface ConversationPair {
  id: string;         // Benzersiz ID (Timestamp)
  input: {
    text: string;     // Kaynak dildeki konuşma
    language: string; // Algılanan dil (EN/TR/RO/DE)
    timestamp: number;
  };
  output: {
    text: string;     // Hedef dildeki çeviri
    language: string; 
    timestamp: number;
  };
}

// messages array (TranslationController)
const [history, setHistory] = useState<ConversationPair[]>([]);
```

---

## 🌍 Dil Ekleme Adımları (Scalability)

Uygulamaya yeni bir dil eklemek için (Örn: Fransızca) şu SRP adımları takip edilir:

1.  **Data:** `data/essentialWords_fr.ts` dosyası oluşturulur ve kelimeler aktarılır.
2.  **Model:** `models/LanguageModel.ts` içindeki `SUPPORTED_LANGUAGES` dizisine yeni dil objesi eklenir.
3.  **Hook:** `hooks/useStudyGuide.ts` içindeki `StudyLanguage` tipine 'FR' eklenir ve switch-case yapısına dahil edilir.
4.  **Sync:** `App.tsx` içindeki `useEffect` dil algılama mantığı güncellenir.

---
*Son Güncelleme: 05.01.2026 - 23:17*