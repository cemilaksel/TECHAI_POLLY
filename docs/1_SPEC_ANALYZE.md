# 🎙️ TECHAIPOLY - Teknik Spesifikasyonlar (SPEC.md)

TECHAIPOLY, Gemini Live API kullanarak İngilizce, Türkçe, Almanca ve Romence dilleri arasında gerçek zamanlı, düşük gecikmeli teknik çeviri ve dil öğrenimi sağlayan bir "Simultane AI Tercüman" platformudur.

---

## 🌟 1. Proje Özeti

### Amaç
Teknik terim odaklı dil öğrenimini (Paul Nation - Essential English Words) gerçek zamanlı çeviri ile birleştirerek kullanıcıların konuşma ve anlama becerilerini simultane bir deneyimle artırmak.

### Hedef Kitle
- Çok dilli teknik toplantılara katılan mühendisler ve profesyoneller.
- İngilizce, Almanca veya Romence öğrenen teknik personel.
- Yabancı dilde video/podcast içeriklerini anlık çeviriyle takip etmek isteyenler.

### Problem / Çözüm
- **Problem:** Geleneksel çeviri araçlarının teknik terimlerdeki bağlam kaybı ve "canlı" etkileşimdeki yüksek gecikme süreleri.
- **Çözüm:** Gemini 2.5 Flash Native Audio ile doğrudan ses-ses işleme ve 4000 temel kelime listesiyle entegre gerçek zamanlı istatistik takibi.

---

## 📋 2. Fonksiyonel Gereksinimler (FR)

### FR-01: Çoklu Dil Desteği
| ID      | Gereksinim                                  | Öncelik    |
|:--------|:--------------------------------------------|:-----------|
| FR-01.1 | 4 dil desteklenmeli (EN, TR, DE, RO)        | 🔴 Yüksek  |
| FR-01.2 | 12 çeviri kombinasyonu aktif çalışmalı      | 🔴 Yüksek  |
| FR-01.3 | Dil seçimi 2 dropdown ile sezgisel olmalı   | 🔴 Yüksek  |

### FR-02: Gerçek Zamanlı Çeviri
| ID      | Gereksinim                                  | Öncelik    |
|:--------|:--------------------------------------------|:-----------|
| FR-02.1 | Konuşma anında akıcı metne dönüşmeli        | 🔴 Yüksek  |
| FR-02.2 | Çeviri sesi otomatik oynatılmalı            | 🔴 Yüksek  |
| FR-02.3 | Görsel "Listening" animasyonu sunulmalı     | 🟡 Orta    |

### FR-03: Study Guide (Öğrenim Rehberi)
| ID      | Gereksinim                                  | Öncelik    |
|:--------|:--------------------------------------------|:-----------|
| FR-03.1 | Dile göre kelime sayısı gösterilmeli        | 🔴 Yüksek  |
| FR-03.2 | Top Usage (En çok kullanım) listesi         | 🔴 Yüksek  |
| FR-03.3 | Generate Guide AI ile öneri üretmeli        | 🟡 Orta    |
| FR-03.4 | Geçmişi Export TXT olarak dışa aktarmalı    | 🟡 Orta    |

### FR-04: Tab Audio (Sekme Sesi Yakalama)
| ID      | Gereksinim                                  | Öncelik    |
|:--------|:--------------------------------------------|:-----------|
| FR-04.1 | Sistem sesi (YouTube/Podcast) yakalanmalı   | 🟡 Orta    |
| FR-04.2 | Ekran paylaşımı protokolü ile çalışmalı     | 🟡 Orta    |

---

## ⚡ 3. Non-Fonksiyonel Gereksinimler (NFR)

- **Performans:** Ses girişinden çıktıya kadar olan gecikme **< 500ms** olmalıdır.
- **Güvenlik:** API anahtarları sadece **LocalStorage**'da tutulmalı, sunucuya gitmemelidir.
- **Platform:** Web tabanlı, **Chrome** ve **Edge** tarayıcılarında tam uyumluluk.
- **Aesthetic:** Vibe Coding uyumlu neon vurgular ve minimalist karanlık tema.

---

## 👤 4. Kullanıcı Hikayeleri (User Stories)

| ID    | Kullanıcı Rolü  | Beklenti ve Kabul Kriterleri                                              |
|:------|:----------------|:--------------------------------------------------------------------------|
| US-01 | İngilizce Öğr.  | ✅ Kelimeler 4000 listesiyle eşleşmeli. <br/> ✅ AI çalışma kartı üretmeli. |
| US-02 | Romence Turist  | ✅ TR ↔ RO sesli çeviri akıcı olmalı. <br/> ✅ Telaffuz net anlaşılmalı.     |
| US-03 | Almanca İzleyici| ✅ Tab Audio ile video sesi yakalanmalı. <br/> ✅ Almanca terimler kaydedilmeli. |
| US-04 | Teknik Okuyucu  | ✅ Teknik terimler bağlama uygun çevrilmeli. <br/> ✅ TXT export alınabilmeli. |

---

## 🚫 5. Kısıtlamalar & Limitler

### API Limitleri
- Gemini Live API: Dakika başına (RPM) ve günlük (RPD) limitlere tabidir.
- Kesintisiz oturum süresi tarayıcı ve API limitlerine göre 5-10 dk arasındadır.

### Tarayıcı Uyumluluk Tablosu
| Özellik             | Chrome  | Edge    | Firefox | Safari  |
|:--------------------|:-------:|:-------:|:-------:|:-------:|
| Mikrofon Girişi     | ✅      | ✅      | ✅      | ⚠️      |
| Tab Audio Capture   | ✅      | ✅      | ❌      | ❌      |
| PCM Low-Latency Play| ✅      | ✅      | ✅      | ✅      |

---

## ⚙️ 6. Teknik Spesifikasyonlar

### **🎙️ Ses İşleme (Audio Pipeline)**
- **Sampling:** 16kHz Target Input / 24kHz AI Output.
- **Encoding:** Int16 Base64 PCM stream.
- **Buffers:** 4096 sample size script processor.

### **🧠 AI Engine**
- **Model:** `gemini-2.5-flash-native-audio-preview-09-2025`
- **Logic:** `gemini-3-flash-preview` (Study Card JSON Generation).

### **💾 Veri Saklama**
- **Stats:** `techInterpreter_allWordStats` (LocalStorage).
- **Guides:** `techInterpreter_allStudyGuides` (LocalStorage).

---
*Son Güncelleme: 06.01.2026 - Versiyon: 3.3*