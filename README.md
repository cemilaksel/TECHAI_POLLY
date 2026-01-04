# 🎙️ TECHAIPOLY - Çok Dilli AI Tercüman

**Gerçek zamanlı çoklu dil çeviri uygulaması**

[![Netlify Status](https://api.netlify.com/api/v1/badges/deploy-status)](https://akseltechpoly.netlify.app)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-3.0-green.svg)
![Languages](https://img.shields.io/badge/languages-4-orange.svg)

> 🌐 **Canlı Demo:** [https://akseltechpoly.netlify.app](https://akseltechpoly.netlify.app)

---

## 🌍 Desteklenen Diller

| Bayrak | Dil | Kod | Study Guide |
|--------|-----|-----|-------------|
| 🇬🇧 | English (İngilizce) | EN | 3600 kelime |
| 🇹🇷 | Türkçe | TR | - |
| 🇩🇪 | Deutsch (Almanca) | DE | 3601 kelime |
| 🇷🇴 | Română (Romence) | RO | 3600 kelime |

### Çeviri Kombinasyonları

```
🇬🇧 EN ↔ 🇹🇷 TR    İngilizce ↔ Türkçe
🇩🇪 DE ↔ 🇹🇷 TR    Almanca ↔ Türkçe
🇷🇴 RO ↔ 🇹🇷 TR    Romence ↔ Türkçe
🇬🇧 EN ↔ 🇩🇪 DE    İngilizce ↔ Almanca
🇬🇧 EN ↔ 🇷🇴 RO    İngilizce ↔ Romence
🇩🇪 DE ↔ 🇷🇴 RO    Almanca ↔ Romence
```

---

## 📚 İçindekiler

- [Başlamadan Önce](#-başlamadan-önce)
- [API Key Alma](#-api-key-alma)
- [Arayüz Tanıtımı](#️-arayüz-tanıtımı)
- [Dil Seçimi](#-dil-seçimi)
- [Study Guide](#-study-guide)
- [Temel Kullanım](#-temel-kullanım)
- [Kullanım Senaryoları](#-kullanım-senaryoları)
- [Ayarlar](#️-ayarlar)
- [Sorun Giderme](#-sorun-giderme)
- [Hızlı Başvuru](#-hızlı-başvuru-kartı)

---

## 🚀 Başlamadan Önce

### Gereksinimler

| Gereksinim | Açıklama |
|------------|----------|
| 🌐 **Tarayıcı** | Google Chrome veya Microsoft Edge |
| 🎤 **Mikrofon** | Dahili veya harici mikrofon |
| 🔊 **Hoparlör** | Sesli çeviri dinlemek için |
| 📧 **Google Hesabı** | API key almak için |
| 🌍 **İnternet** | Stabil internet bağlantısı |

### ⚠️ Önemli Notlar

- **Safari ve Firefox** tam desteklenmez → **Chrome** kullanın
- **Mobil cihazlarda** Tab Audio özelliği çalışmaz
- **İlk kullanımda** mikrofon izni vermeniz gerekecek
- **Sessiz ortamda** çalışmak daha iyi sonuç verir

---

## 🔑 API Key Alma

> Bu işlem sadece **bir kez** yapılır. Key tarayıcınızda güvenle saklanır.

### Adım 1: Google AI Studio'ya Giriş

1. Tarayıcınızda açın: `https://aistudio.google.com/app/apikey`
2. Google hesabınızla giriş yapın

### Adım 2: API Key Oluşturma

1. **"Create API key"** butonuna tıklayın
2. Açılan pencerede:

| Alan | Yazılacak |
|------|-----------|
| **Name your key** | `techaipoly` |
| **Choose project** | Boş bırakın |

3. **"Create key"** butonuna basın
4. Oluşturulan key'i **kopyalayın** (📋 ikonuna tıklayın)

> 💡 **İpucu:** Key'i bir yere not edin, tekrar gerekebilir.

### Adım 3: Key'i Uygulamaya Girin

1. TECHAIPOLY'yi açın
2. API Key alanına yapıştırın
3. **"Save Key"** butonuna basın
4. ✅ "API Key saved successfully" mesajını görün

---

## 🖥️ Arayüz Tanıtımı

### Ana Ekran

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  [🗨️] Tech Interpreter    [🇷🇴 EN ↔ 🇹🇷 TR]        🔊 🗑️ ⬇️ 📊 ⚙️      │
│       ● Offline                                                         │
│                                                                         │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  SPEAKER • 00:00 • (TR)                                                 │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │ Merhaba.                                                        │   │
│  └─────────────────────────────────────────────────────────────────┘   │
│                                                                         │
│                                          (EN) • 00:00 • INTERPRETER     │
│                    ┌───────────────────────────────────────────────┐   │
│                    │ Hello.                                    ✨   │   │
│                    └───────────────────────────────────────────────┘   │
│                                                                         │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│                          WAITING FOR AUDIO...                           │
│                                                                         │
│                               ( 🎤 )                                    │
│                                                                         │
│                        ○─── 🖥️ Capture Tab Audio                       │
│                                                                         │
│                    External App: 🌱 Open Sesame ↗️                      │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### Üst Menü Butonları

| Buton | İşlev | Açıklama |
|-------|-------|----------|
| 🔊 | Ses açık/kapalı | AI sesini açar/kapatır |
| 🗑️ | Geçmişi temizle | Sohbet geçmişini siler |
| ⬇️ | İndir | Konuşmayı TXT olarak indirir |
| 📊 | İstatistikler | Study Guide'ı açar |
| ⚙️ | Ayarlar | Uygulama ayarlarını açar |

---

## 🌐 Dil Seçimi

### Nasıl Çalışır?

TECHAIPOLY'de iki ayrı dropdown ile kaynak ve hedef dili seçersiniz:

```
┌─────────────────────────────────────────┐
│                                         │
│    [🇷🇴 RO ▼]  ⇄  [🇹🇷 TR ▼]            │
│        │            │                   │
│    Kaynak Dil    Hedef Dil              │
│                                         │
└─────────────────────────────────────────┘
```

### Adım Adım Dil Seçimi

1. **Sol dropdown'a tıklayın** (Kaynak dil)
2. Açılan listeden konuşacağınız dili seçin:
   - 🇬🇧 EN (İngilizce)
   - 🇹🇷 TR (Türkçe)
   - 🇷🇴 RO (Romence)
   - 🇩🇪 DE (Almanca)

3. **Sağ dropdown'a tıklayın** (Hedef dil)
4. Çevirinin yapılacağı dili seçin

### Örnek Senaryolar

| Senaryo | Kaynak | Hedef | Kullanım |
|---------|--------|-------|----------|
| İngilizce öğrenme | 🇹🇷 TR | 🇬🇧 EN | Türkçe söyle → İngilizce çeviri |
| Romence pratik | 🇷🇴 RO | 🇹🇷 TR | Romence söyle → Türkçe çeviri |
| Almanca anlama | 🇩🇪 DE | 🇹🇷 TR | Almanca video → Türkçe çeviri |
| Teknik çeviri | 🇬🇧 EN | 🇩🇪 DE | İngilizce → Almanca |

---

## 📊 Study Guide

Her dil için ayrı kelime takip sistemi!

### Dile Göre Study Guide

| Dil Seçimi | Study Guide | Hedef Kelime |
|------------|-------------|--------------|
| 🇬🇧 EN içeren | English Study Guide | 3600 kelime |
| 🇩🇪 DE içeren | German Study Guide | 3601 kelime |
| 🇷🇴 RO içeren | Romanian Study Guide | 3600 kelime |

### Study Guide Nasıl Açılır?

1. Üst menüdeki **📊** ikonuna tıklayın
2. Seçili dile göre Study Guide açılır

### Ekran Açıklaması

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  📊 English Study Guide                                            ✕   │
│                                                                         │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  ┌─────────────────────────┐  ┌────────────────────────────────────┐   │
│  │ TOTAL SPOKEN WORDS      │  │ 📚 TARGET VOCABULARY        [0%]   │   │
│  │                         │  │                                    │   │
│  │          0              │  │         0 / 3600                   │   │
│  │                         │  │ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░   │   │
│  └─────────────────────────┘  └────────────────────────────────────┘   │
│                                                                         │
│  ┌────────────┐ ┌──────────────────┐           ┌───────────────────┐   │
│  │ Top Usage  │ │ Target Words (0) │           │ ✨ Generate Guide │   │
│  └────────────┘ └──────────────────┘           └───────────────────┘   │
│                                                                         │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │ WORD          FREQ    SYNONYM / ALT       PRACTICE PHRASE       │   │
│  ├─────────────────────────────────────────────────────────────────┤   │
│  │                                                                 │   │
│  │              No words found for this category yet.              │   │
│  │                                                                 │   │
│  └─────────────────────────────────────────────────────────────────┘   │
│                                                                         │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  🗑️ Reset                                          ⬇️ Export TXT       │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### Study Guide Özellikleri

| Özellik | Açıklama |
|---------|----------|
| **TOTAL SPOKEN WORDS** | Konuştuğunuz toplam kelime sayısı |
| **TARGET VOCABULARY** | Hedef listeden kaç kelime kullandığınız |
| **Top Usage** | En çok kullandığınız kelimeler |
| **Target Words** | Hedef kelime listesinden kullanımlar |
| **Generate Guide** | AI ile eş anlamlı ve örnek cümle üretir |
| **Export TXT** | Çalışma kağıdını indirir |
| **Reset** | İstatistikleri sıfırlar |

---

## 📖 Temel Kullanım

### Adım 1: Dil Seçin

1. Sol dropdown'dan **kaynak dili** seçin
2. Sağ dropdown'dan **hedef dili** seçin

### Adım 2: Mikrofonu Başlatın

1. 🎤 **Mikrofon butonuna** tıklayın
2. Tarayıcı izin isterse **"İzin Ver"** deyin
3. Durum **"● Live"** olacak

### Adım 3: Konuşun

1. Seçtiğiniz kaynak dilde konuşun
2. Çeviri otomatik olarak gelecek
3. AI sesi açıksa çeviriyi dinleyeceksiniz

### Adım 4: Durdurun

1. **Kırmızı ⏹️ butona** basın
2. İsterseniz **⬇️** ile kaydı indirin

---

## 🎯 Kullanım Senaryoları

---

### 📚 Senaryo 1: İngilizce Konuşma Pratiği

**Amaç:** Kendi kendinize İngilizce pratik yapmak

**Dil Ayarı:** 🇹🇷 TR → 🇬🇧 EN

**Adımlar:**
1. ✅ Kaynak dil: **TR**, Hedef dil: **EN** seçin
2. ✅ Mikrofon butonuna basın
3. ✅ Türkçe bir cümle söyleyin: *"Bugün hava çok güzel."*
4. ✅ İngilizce çeviriyi dinleyin: *"The weather is very nice today."*
5. ✅ Çeviriyi tekrarlayarak telaffuz pratiği yapın
6. ✅ 📊 Study Guide'dan kelime istatistiklerinizi görün

**Pratik Cümleleri:**

| Türkçe | İngilizce |
|--------|-----------|
| Benim adım Ahmet. | My name is Ahmet. |
| Nerelisiniz? | Where are you from? |
| İngilizce öğreniyorum. | I am learning English. |
| Bana yardım eder misiniz? | Can you help me? |
| Tanıştığıma memnun oldum. | Nice to meet you. |

---

### 🇷🇴 Senaryo 2: Romence Öğrenme

**Amaç:** Temel Romence kelime ve cümleler öğrenmek

**Dil Ayarı:** 🇹🇷 TR → 🇷🇴 RO

**Adımlar:**
1. ✅ Kaynak dil: **TR**, Hedef dil: **RO** seçin
2. ✅ Mikrofon butonuna basın
3. ✅ Türkçe söyleyin: *"Merhaba, nasılsınız?"*
4. ✅ Romence çeviriyi dinleyin: *"Bună ziua, ce mai faceți?"*
5. ✅ Romence kelimeyi tekrarlayın
6. ✅ 📊 Romanian Study Guide'dan ilerlemenizi takip edin

**Temel Romence Cümleler:**

| Türkçe | Romence | Okunuş |
|--------|---------|--------|
| Merhaba | Bună / Salut | Bu-nı / Sa-lut |
| Teşekkürler | Mulțumesc | Mul-tsu-mesk |
| Evet / Hayır | Da / Nu | Da / Nu |
| Lütfen | Te rog | Te rog |
| Güle güle | La revedere | La re-ve-de-re |
| Nasılsınız? | Ce mai faceți? | Çe may fa-çets |
| İyiyim | Sunt bine | Sunt bi-ne |

---

### 🇩🇪 Senaryo 3: Almanca Anlama

**Amaç:** Almanca içerik dinlerken Türkçe çeviri almak

**Dil Ayarı:** 🇩🇪 DE → 🇹🇷 TR

**Adımlar:**
1. ✅ Kaynak dil: **DE**, Hedef dil: **TR** seçin
2. ✅ "Capture Tab Audio" özelliğini açın
3. ✅ Yan sekmede Almanca video açın
4. ✅ Almanca konuşmalar Türkçe'ye çevrilecek
5. ✅ 📊 German Study Guide'dan öğrendiğiniz kelimeleri görün

**Temel Almanca Cümleler:**

| Almanca | Türkçe |
|---------|--------|
| Guten Morgen | Günaydın |
| Wie geht es Ihnen? | Nasılsınız? |
| Ich verstehe nicht | Anlamıyorum |
| Sprechen Sie Englisch? | İngilizce konuşuyor musunuz? |
| Danke schön | Çok teşekkürler |
| Auf Wiedersehen | Güle güle |

---

### 🎬 Senaryo 4: YouTube Video Çevirisi

**Amaç:** İngilizce YouTube videolarını anlık Türkçe çeviri ile izlemek

**Dil Ayarı:** 🇬🇧 EN → 🇹🇷 TR

**Adımlar:**
1. ✅ Kaynak dil: **EN**, Hedef dil: **TR** seçin
2. ✅ Yan sekmede YouTube'u açın
3. ✅ TECHAIPOLY'de **"Capture Tab Audio"** kutusunu işaretleyin
4. ✅ **🎤 Mikrofon butonuna** basın
5. ✅ Açılan pencerede:
   - **"Chrome Tab"** sekmesini seçin
   - YouTube sekmesini seçin
   - ⚠️ **"Sesi de paylaş"** kutusunu İŞARETLEYİN!
6. ✅ **"Paylaş"** butonuna basın
7. ✅ YouTube sekmesine geçip videoyu oynatın
8. ✅ Çeviriler otomatik gelecek

**⚠️ Önemli:**
- "Sesi de paylaş" kutusunu işaretlemeyi unutmayın!
- Video sesinin açık olduğundan emin olun
- Bu özellik sadece **bilgisayarda** çalışır

---

### 🎧 Senaryo 5: Podcast Dinleme

**Amaç:** İngilizce podcast dinlerken Türkçe çeviri almak

**Dil Ayarı:** 🇬🇧 EN → 🇹🇷 TR

**Adımlar:**
1. ✅ Kaynak dil: **EN**, Hedef dil: **TR** seçin
2. ✅ Spotify/Apple Podcasts'i yan sekmede açın
3. ✅ "Capture Tab Audio" özelliğini aktif edin
4. ✅ Podcast sekmesini seçin ve paylaşın
5. ✅ Oynatma hızını **0.75x** yapın (daha iyi çeviri için)
6. ✅ Dinleyin ve çevirileri takip edin

**Önerilen Podcast'ler:**

| Podcast | Seviye | Konu |
|---------|--------|------|
| 6 Minute English (BBC) | Başlangıç | Genel konular |
| TED Talks Daily | Orta | İlham verici |
| The Daily (NYT) | İleri | Haberler |

---

### 💼 Senaryo 6: İş Görüşmesi Pratiği

**Amaç:** İngilizce iş görüşmesine hazırlanmak

**Dil Ayarı:** 🇬🇧 EN → 🇹🇷 TR (kontrol için)

**Adımlar:**
1. ✅ Kaynak dil: **EN**, Hedef dil: **TR** seçin
2. ✅ Mikrofon butonuna basın
3. ✅ İngilizce cevaplarınızı söyleyin
4. ✅ Türkçe çeviriyi kontrol edin - doğru anlaşılıyor mu?
5. ✅ Study Guide'dan iş İngilizcesi kelimelerinizi takip edin

**Sık Sorulan Sorular:**

| # | Soru (EN) | Türkçe Karşılık |
|---|-----------|-----------------|
| 1 | "Tell me about yourself." | Kendinizden bahsedin. |
| 2 | "What are your strengths?" | Güçlü yönleriniz neler? |
| 3 | "Why do you want this job?" | Bu işi neden istiyorsunuz? |
| 4 | "Where do you see yourself in 5 years?" | 5 yıl sonra kendinizi nerede görüyorsunuz? |
| 5 | "Do you have any questions?" | Sorularınız var mı? |

---

### 🇷🇴 Senaryo 7: Romanya Seyahati Hazırlığı

**Amaç:** Romanya seyahati için temel Romence öğrenmek

**Dil Ayarı:** 🇹🇷 TR → 🇷🇴 RO

**Havalimanı/Otel:**

| Türkçe | Romence |
|--------|---------|
| Rezervasyonum var | Am o rezervare |
| Oda numarası kaç? | Care este numărul camerei? |
| WiFi şifresi ne? | Care este parola WiFi? |
| Kahvaltı dahil mi? | Micul dejun este inclus? |

**Restoran:**

| Türkçe | Romence |
|--------|---------|
| Menüyü alabilir miyim? | Pot să văd meniul? |
| Hesap lütfen | Nota, vă rog |
| Çok lezzetliydi | A fost foarte gustos |

**Acil Durumlar:**

| Türkçe | Romence |
|--------|---------|
| Yardım! | Ajutor! |
| Hastane nerede? | Unde este spitalul? |
| Polisi arayın | Chemați poliția |

---

### 💻 Senaryo 8: Teknik Dokümantasyon

**Amaç:** İngilizce teknik metinleri anlamak

**Dil Ayarı:** 🇬🇧 EN → 🇹🇷 TR

**Adımlar:**
1. ✅ Kaynak dil: **EN**, Hedef dil: **TR** seçin
2. ✅ Teknik metni sesli okuyun
3. ✅ Türkçe çeviriyi alın
4. ✅ Teknik terimleri Study Guide'dan takip edin

**Teknik Terimler:**

| İngilizce | Türkçe |
|-----------|--------|
| function | fonksiyon |
| variable | değişken |
| array | dizi |
| loop | döngü |
| API | Uygulama Programlama Arayüzü |
| database | veritabanı |

---

### 🤝 Senaryo 9: Çok Dilli Toplantı

**Amaç:** Farklı dillerde konuşan katılımcılarla iletişim

**Örnek:** Almanca konuşan meslektaşla toplantı

**Dil Ayarı:** 🇩🇪 DE → 🇹🇷 TR

**Adımlar:**
1. ✅ Kaynak dil: **DE**, Hedef dil: **TR** seçin
2. ✅ Meslektaşınız Almanca konuşsun
3. ✅ Türkçe çeviriyi okuyun/dinleyin
4. ✅ Cevap vermek için dilleri değiştirin: **TR → DE**

**Toplantı İfadeleri (Almanca):**

| Türkçe | Almanca |
|--------|---------|
| Başlayalım mı? | Sollen wir anfangen? |
| Anlıyorum | Ich verstehe |
| Tekrar eder misiniz? | Können Sie das wiederholen? |
| Teşekkürler, toplantı için | Danke für das Meeting |

---

### ⏰ Senaryo 10: Günlük 10 Dakika Rutini

**Amaç:** Her gün düzenli pratik yaparak ilerleme kaydetmek

**Haftalık Program:**

| Gün | Dil | Konu | Örnek |
|-----|-----|------|-------|
| Pazartesi | 🇬🇧 EN | 🌤️ Hava | "It's sunny today." |
| Salı | 🇩🇪 DE | 🍝 Yemek | "Ich koche gerne." |
| Çarşamba | 🇷🇴 RO | 👋 Selamlaşma | "Bună ziua!" |
| Perşembe | 🇬🇧 EN | 💼 İş | "I have a meeting." |
| Cuma | 🇩🇪 DE | 🛒 Alışveriş | "Was kostet das?" |
| Cumartesi | 🇷🇴 RO | 📅 Planlar | "Ce faci mâine?" |
| Pazar | 📊 Tümü | Değerlendirme | Study Guide incele |

**Günlük Rutin:**
```
⏰ 10 dakika konuşma pratiği
📊 İstatistikleri kontrol et
📝 Yeni 5 kelime öğren
💾 Kaydı indir ve tekrar oku
```

**Haftalık Hedefler:**

| Hafta | Hedef |
|-------|-------|
| 1. Hafta | Her dilden 20 kelime |
| 2. Hafta | Her dilden 40 kelime |
| 3. Hafta | Her dilden 60 kelime |
| 4. Hafta | Her dilden 80 kelime |

---

### 🎤 Senaryo 11: Sesame AI ile Sohbet

**Amaç:** Sesame AI avatarları ile İngilizce pratik yapmak

**Dil Ayarı:** 🇬🇧 EN → 🇹🇷 TR

**Adımlar:**
1. ✅ **"Open Sesame"** linkine tıklayın
2. ✅ Sesame sekmesi açılacak
3. ✅ TECHAIPOLY'de "Capture Tab Audio" açın
4. ✅ Sesame sekmesini paylaşın
5. ✅ Avatar ile İngilizce konuşun
6. ✅ Avatarın cevapları Türkçe'ye çevrilecek

---

### 💾 Senaryo 12: Ödevi Kaydetme

**Amaç:** Pratik kaydını öğretmene göndermek

**Adımlar:**
1. ✅ En az 5 dakika konuşma pratiği yapın
2. ✅ Üst menüdeki **⬇️** ikonuna tıklayın
3. ✅ Dosya otomatik inecek: `Conversation_2025-01-06.txt`
4. ✅ Dosyayı öğretmeninize gönderin

**Dosya İçeriği Örneği:**
```
TECHAIPOLY - CONVERSATION HISTORY
========================================
Language Pair: RO ↔ TR

[10:15:23] Speaker (TR): Merhaba, nasılsınız?
[10:15:23] Interpreter (RO): Bună ziua, ce mai faceți?
----------------------------------------
[10:15:35] Speaker (RO): Sunt bine, mulțumesc.
[10:15:35] Interpreter (TR): İyiyim, teşekkürler.
----------------------------------------
```

---

## ⚙️ Ayarlar

Sağ üstteki **⚙️** ikonuna tıklayarak erişin.

### 🔑 Gemini API Key

| Alan | İşlev |
|------|-------|
| **Key Alanı** | API key'iniz gizli gösterilir (●●●●) |
| **Save Key** | Yeni key kaydetmek için |
| **Clear** | Mevcut key'i silmek için |

### 🎤 Microphone Source

| Seçenek | Ne Zaman Kullanılır |
|---------|---------------------|
| **Varsayılan** | Normal kullanım |
| **Dahili Mikrofon** | Laptop kullanıyorsanız |
| **Harici Mikrofon** | USB/Bluetooth mikrofon |
| **Kulaklık Mikrofonu** | Kulaklık takılıysa |

### 🔊 Include System Audio

Tab Audio özelliği için gerekli. Video/podcast çevirisi yapacaksanız açın.

### 📺 Ambient / TV Mode

Oda veya TV sesini yakalamak için. Uzaktan mikrofon kullanıyorsanız açın.

---

## 🔧 Sorun Giderme

| Sorun | Çözüm |
|-------|-------|
| **Mikrofon İzni** | Adres çubuğundaki 🔒 → "İzin Ver" |
| **API Key Hatası** | Key'in başında/sonunda boşluk olmadığından emin olun |
| **Ses Gelmiyor** | 🔊 ikonunun ve bilgisayar sesinin açık olduğunu kontrol edin |
| **Tab Audio Çalışmıyor** | "Sesi de paylaş" kutusunu işaretleyin |
| **Yanlış Dil Algılama** | Kaynak dili manuel seçin |
| **Study Guide Yüklenmiyor** | Sayfayı yenileyin (F5) |

---

## 📋 Hızlı Başvuru Kartı

```
╔═══════════════════════════════════════════════════════════════════════╗
║              TECHAIPOLY - HIZLI BAŞVURU                               ║
╠═══════════════════════════════════════════════════════════════════════╣
║                                                                       ║
║  🚀 BAŞLATMA                                                          ║
║     1. akseltechpoly.netlify.app adresini aç                          ║
║     2. Gemini API key'ini gir                                         ║
║     3. Kaynak ve hedef dili seç                                       ║
║     4. 🎤 butonuna bas ve konuşmaya başla                             ║
║                                                                       ║
║  🌍 DİL SEÇİMİ                                                        ║
║     • Sol dropdown → Konuşacağınız dil                                ║
║     • Sağ dropdown → Çeviri dili                                      ║
║     • Desteklenen: 🇬🇧 EN, 🇹🇷 TR, 🇩🇪 DE, 🇷🇴 RO                       ║
║                                                                       ║
║  📊 STUDY GUIDE                                                       ║
║     • 📊 ikonu → Kelime istatistikleri                                ║
║     • Generate Guide → AI önerileri al                                ║
║     • Export TXT → Çalışma kağıdını indir                             ║
║                                                                       ║
║  📺 VİDEO ÇEVİRİSİ                                                    ║
║     1. Capture Tab Audio işaretle                                     ║
║     2. 🎤 butona bas                                                  ║
║     3. Chrome Tab seç                                                 ║
║     4. "Sesi de paylaş" kutusunu işaretle! ⚠️                         ║
║                                                                       ║
╚═══════════════════════════════════════════════════════════════════════╝
```

---

## 📄 Lisans & Geliştirici

**Lisans:** MIT  
**Geliştirici:** Cemil Aksel  
**Kurum:** ESMEK - Eskişehir Büyükşehir Belediyesi & UNDP İşbirliği

---

<p align="center">
  <b>🌟 İyi Çalışmalar! 🌟</b><br>
  <i>Her gün 10 dakika pratik, büyük fark yaratır!</i><br><br>
  <b>TECHAIPOLY - Tüm Diller, Tek Platform</b>
</p>

---

**Versiyon:** 3.0 | **Son Güncelleme:** 05.01.2026 - 00.22