# 🧪 TECHAIPOLY - Test Spesifikasyonları (TEST.md) - Test Senaryoları

Bu doküman, TECHAIPOLY uygulamasının kalite güvence süreçlerini, test senaryolarını ve kabul kriterlerini tanımlar. Test süreçleri **SRP (Single Responsibility)** ve **MVC** mimari katmanlarına uygun olarak modüler şekilde tasarlanmıştır.

---

## 🎯 1. Test Stratejisi

| Seviye         | Odak Noktası                               | Sorumlu Katman (SRP)                            |
|:---------------|:-------------------------------------------|:------------------------------------------------|
| **Unit Test**  | Bağımsız mantık ve dönüşümler              | **Models & Services** (audioUtils, LanguageModel)|
| **Integration**| Bileşenler arası iletişim ve state akışı   | **Controllers & Hooks** (useTranslationSession) |
| **E2E Test**   | Kullanıcı deneyimi ve API entegrasyonu     | **View (UI)** -> API Flow                       |
| **Manuel Test**| Mikrofon kalitesi ve Tab Audio senkronu    | Tüm Uygulama                                    |

---

## 📋 2. Test Senaryoları (TC)

### TC-01: Dil Seçimi ve Arayüz Uyumu (FR-01)
- **Ön Koşul:** Uygulama yüklü ve API Key girilmiş olmalı.
- **Beklenen Sonuç:** Dil dropdownları değiştiğinde Header ve Study Guide dili anlık güncellenmeli.

| Adımlar                                         | Beklenen Sonuç                                    | Durum |
|:------------------------------------------------|:--------------------------------------------------|:-----:|
| 1. Kaynak dili 'RO' (Romence) seç.              | Bayrak ve kod '🇷🇴 RO' olarak güncellenmeli.       | [ ]   |
| 2. 'Swap' (⇄) butonuna tıkla.                   | Kaynak ve Hedef diller yer değiştirmeli.          | [ ]   |
| 3. Dil değişimi sonrası 📊 ikonuna tıkla.       | İlgili dilin Study Guide başlığı görünmeli.       | [ ]   |

---

### TC-02: Gerçek Zamanlı Çeviri Akışı (FR-02)
- **Ön Koşul:** Mikrofon izni verilmiş ve durum 'Live' olmalı.
- **Beklenen Sonuç:** Ses girişi sonrası < 500ms içinde transkripsiyon ve çeviri görünmeli.

| Adımlar                                         | Beklenen Sonuç                                    | Durum |
|:------------------------------------------------|:--------------------------------------------------|:-----:|
| 1. TR ↔ EN modunda "Merhaba dünya" de.          | "Listening..." alanında metin belirmeli.          | [ ]   |
| 2. AI yanıtını bekle.                           | "Hello world" metni ve sesli yanıt gelmeli.       | [ ]   |
| 3. Ses dalga formunu (Visualizer) izle.         | Konuşma anında neon barlar hareket etmeli.        | [ ]   |

---

### TC-03: Study Guide ve Kelime Analizi (FR-03)
- **Ön Koşul:** En az 10 farklı kelime içeren bir konuşma yapılmış olmalı.
- **Beklenen Sonuç:** Kelimeler frekansına göre listelenmeli ve AI kart üretebilmeli.

| Adımlar                                         | Beklenen Sonuç                                    | Durum |
|:------------------------------------------------|:--------------------------------------------------|:-----:|
| 1. 📊 Study Guide panelini aç.                  | 'Top Usage' listesinde kelimeler görünmeli.       | [ ]   |
| 2. 'Target Words' sekmesine geç.                | 4000'lik listedeki kelimeler 'Target' etiketi almalı. | [ ]   |
| 3. 'Generate Guide' butonuna tıkla.             | AI; eş anlamlı ve örnek cümleler üretmeli.        | [ ]   |
| 4. 'Reset' butonuna tıkla.                      | LocalStorage istatistikleri silinmeli.            | [ ]   |

---

### TC-04: Tab Audio Capture (FR-04)
- **Ön Koşul:** Bilgisayarda Chrome/Edge tarayıcı kullanımı.
- **Beklenen Sonuç:** Başka sekmedeki ses yakalanıp tercüme edilmeli.

| Adımlar                                         | Beklenen Sonuç                                    | Durum |
|:------------------------------------------------|:--------------------------------------------------|:-----:|
| 1. 'Capture Tab Audio' kutusunu işaretle.       | Ekran paylaşımı penceresi açılmalı.               | [ ]   |
| 2. 'Sesi de paylaş' kutusunu seç ve paylaş.     | Durum 'Live' olmalı.                              | [ ]   |
| 3. Yan sekmede İngilizce bir video başlat.      | Videodaki sesler Türkçe'ye çevrilmeli.            | [ ]   |

---

### TC-05: Veri Dışa Aktarma (FR-05)
- **Ön Koşul:** Mevcut bir sohbet geçmişi bulunmalı.
- **Beklenen Sonuç:** .txt dosyası doğru formatta indirilmeli.

| Adımlar                                         | Beklenen Sonuç                                    | Durum |
|:------------------------------------------------|:--------------------------------------------------|:-----:|
| 1. Üst menüden 'Download' (⬇️) tıkla.           | `Conversation_YYYY-MM-DD.txt` inmeli.             | [ ]   |
| 2. Study Guide içinden 'Export' tıkla.          | `StudyGuide_EN.txt` inmeli.                       | [ ]   |

---

## 🔄 3. Regresyon Test Listesi
*Her yeni güncelleme sonrası mutlaka kontrol edilmelidir:*
- [ ] API Key silindiğinde `ApiKeyPrompt` ekranı geliyor mu?
- [ ] 'Ambient Mode' açıldığında arka plan gürültü bastırma kapanıyor mu?
- [ ] Sayfa yenilendiğinde LocalStorage'daki kelime istatistikleri korunuyor mu?
- [ ] 10 dakikadan uzun oturumlarda WebSocket bağlantısı stabil mi?

---

## 📱 4. Cihaz ve Tarayıcı Matrisi

| Özellik              | Chrome (Desktop) | Edge (Desktop) | Firefox | Safari (iOS)    |
|:---------------------|:----------------:|:--------------:|:-------:|:---------------:|
| Mikrofon Kaydı       | ✅               | ✅             | ✅      | ⚠️ (İzin gerek) |
| Tab Audio Capture    | ✅               | ✅             | ❌      | ❌              |
| PCM Audio Playback   | ✅               | ✅             | ✅      | ✅              |
| LocalStorage Stats   | ✅               | ✅             | ✅      | ✅              |

---

## ⚙️ 5. Teknik Birim Testleri (Unit Tests)

- **audioUtils:** `pcmTo16kBase64` fonksiyonu Float32 dizisini doğru Int16 formatına çeviriyor mu?
- **LanguageModel:** `getSystemInstruction` her 12 kombinasyon için doğru dil kodlarını içeriyor mu?
- **TranslationModel:** `detectLanguage` fonksiyonu "Merhaba" kelimesini 'TR' olarak algılıyor mu?

---
*Son Güncelleme: 06.01.2026*