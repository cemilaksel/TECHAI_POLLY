# 💻 TECHAIPOLY - Kod Standartları ve Stil Rehberi (CODE.md) : Kodlama Standartları

Bu doküman, TECHAIPOLY projesinde kod kalitesini, okunabilirliği ve mimari tutarlılığı korumak için takip edilmesi gereken standartları tanımlar. Proje, **MVC** ve **SRP** prensiplerini temel alır.

---

## 🏗️ 1. Mimari Uyumluluk (MVC & SRP)

Kod yazarken her dosyanın tek bir sorumluluğu olmalıdır (**SRP**).

- **Models (`models/`):** Sadece veri yapısı ve saf mantık. React veya UI bağımlılığı içermez.
- **Views (`components/`):** Sadece UI ve prop gösterimi. İş mantığı (logic) içermez.
- **Controllers (`controllers/`, `hooks/`):** Veri ile UI arasındaki köprü. State yönetimi ve API çağrıları burada yapılır.

---

## 🔡 2. İsimlendirme Kuralları (Naming Conventions)

| Tip                         | Kural                      | Örnek                                           |
|:----------------------------|:---------------------------|:------------------------------------------------|
| **Bileşenler (Components)** | PascalCase                 | `AudioVisualizer.tsx`, `SettingsModal.tsx`      |
| **Hook Dosyaları**          | camelCase (use önekiyle)   | `useTranslationSession.ts`, `useApiKey.ts`      |
| **Fonksiyonlar & Değişkenler**| camelCase                  | `const [status, setStatus]`, `pcmTo16kBase64()` |
| **Sabitler (Constants)**    | UPPER_SNAKE_CASE           | `AUDIO_CONSTANTS`, `SAMPLE_RATE_OUTPUT`         |
| **Tipler / İnterfaceler**   | PascalCase                 | `interface ConversationPair`, `type Status`     |

---

## 🎨 3. Kod Formatı ve Stil

### Prettier Yapılandırması
- **Semi:** true (noktalı virgül kullanın)
- **SingleQuote:** true (tek tırnak tercih edin)
- **TrailingComma:** es5
- **PrintWidth:** 100

### Import Sıralaması
1. React ve core kütüphaneler (`react`, `@google/genai`)
2. Üçüncü taraf paketler (`@heroicons/react`)
3. Proje içi Controller ve Hook'lar (`../hooks/...`)
4. Proje içi Model ve Tipler (`../models/...`)
5. Stil ve Varlıklar (`./index.css`)

---

## 🌿 4. Git ve Versiyon Kontrolü

### Commit Mesaj Standartları (Keep a Changelog Uyumlu)
Mesajlar şu öneklerle başlamalıdır:

- `feat:` Yeni bir özellik eklendiğinde. (Örn: `feat: Almanca dil desteği eklendi`)
- `fix:` Bir hata düzeltildiğinde. (Örn: `fix: mobil cihazda ses kesilme hatası`)
- `docs:` Dokümantasyon değişikliklerinde. (Örn: `docs: README güncellendi`)
- `refactor:` Kod iyileştirmesi (işlev değişmeden). (Örn: `refactor: AudioController sadeleştirildi`)
- `chore:` Build süreçleri veya kütüphane güncellemeleri.

### Branch İsimlendirme
- `feature/ozellik-adi`
- `bugfix/hata-adi`
- `hotfix/acil-duzeltme`

---

## 🚀 5. PR (Pull Request) ve Review Kuralları

- **Reviewer:** Her PR en az 1 geliştirici tarafından incelenmelidir.
- **Bağımlılık:** PR açılmadan önce `npm run build` komutu yerelde çalıştırılmalı ve hatasız olmalıdır.
- **Dokümantasyon:** Yeni bir özellik eklendiyse `CHANGELOG.md` dosyasına ilgili versiyon altına ekleme yapılmalıdır.
- **Küçük PR'lar:** Mümkünse PR'lar 300 satırı geçmemelidir (Review kolaylığı için).

---

## 🧪 6. Test ve Kalite

- Yazılan her yeni `service` veya `model` fonksiyonu için `TEST.md` dosyasına ilgili test senaryosu eklenmelidir.
- Console logları "production" build öncesinde temizlenmelidir.
- Erişilebilirlik için bileşenlerde `aria-label` kullanımına dikkat edilmelidir.

---
*Son Güncelleme: 06.01.2026*