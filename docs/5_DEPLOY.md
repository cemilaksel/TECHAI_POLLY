# 🚀 TECHAIPOLY - Dağıtım Rehberi (DEPLOY.md) 

Bu doküman, TECHAIPOLY uygulamasının yerel geliştirme ortamından üretim (production) ortamına taşınma sürecini, CI/CD yapılandırmasını ve yayına alım standartlarını tanımlar. Süreçler **SRP (Sorumlulukların Ayrılması)** prensibiyle modülerize edilmiştir.

---

## 🌐 1. Ortam Tanımları (Environments)

| Ortam            | URL                                      | Amaç                          |
|:-----------------|:-----------------------------------------|:------------------------------|
| **Development**  | `http://localhost:5173`                  | Lokal özellik geliştirme      |
| **Production**   | `https://akseltechpoly.netlify.app`      | Son kullanıcı erişimi (Canlı) |

---

## 🛠️ 2. Ön Gereksinimler (Prerequisites)

- **Node.js:** v18.0.0 veya üzeri (LTS önerilir)
- **Paket Yöneticisi:** npm (v9+) veya yarn
- **Git:** Sürüm kontrol sistemi
- **Netlify CLI:** (Opsiyonel) Lokal testler için

---

## 💻 3. Lokal Geliştirme Akışı (Controller: Dev Process)

Uygulamayı yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin:

```bash
# 1. Depoyu klonlayın
git clone <repo-url>
cd tech-interpreter-ai

# 2. Bağımlılıkları yükleyin
npm install

# 3. Geliştirme sunucusunu başlatın
npm run dev
```

---

## 📦 4. Sürüm Kontrolü (Model: Repository State)

Değişikliklerin GitHub'a güvenli şekilde gönderilmesi için takip edilen standart akış:

```bash
# Değişiklikleri sahneye alın
git add .

# Anlamlı bir commit mesajı yazın (Conventional Commits)
git commit -m "feat: Study Guide dil desteği eklendi"

# Ana şubeye gönderin
git push origin main
```

---

## ☁️ 5. Netlify CI/CD Yapılandırması (Service: Deployment)

Netlify üzerindeki otomatik dağıtım (Auto-deploy) ayarları şu şekildedir:

| Ayar                 | Değer                 | Sorumluluk                     |
|:---------------------|:----------------------|:-------------------------------|
| **Repository**       | GitHub / <your-repo>  | Kaynak kod bağlantısı          |
| **Branch**           | `main`                | Dağıtıma esas dal              |
| **Build Command**    | `npm run build`       | Uygulama derleme komutu        |
| **Publish Directory**| `dist`                | Yayına alınacak çıktı klasörü  |

---

## 🔒 6. Yapılandırma ve Güvenlik (Security: API Management)

TECHAIPOLY, SRP gereği API anahtarlarını sunucu tarafında (Environment Variables) **tutmaz**.

- **API Key Yönetimi:** Uygulama açılışında kullanıcıdan istenir ve sadece kullanıcının tarayıcısında `LocalStorage` (Model katmanı) içinde saklanır.
- **Güvenlik:** Netlify üzerinde herhangi bir `GEMINI_API_KEY` tanımlamanıza gerek yoktur. Bu, kullanıcı güvenliğini ve anahtar gizliliğini sağlar.

---

## ✅ 7. Deploy Checklist (Final View)

Yayına almadan önce ve sonra kontrol edilecek maddeler:

- [ ] `npm run build` komutu yerelde hatasız çalışıyor mu?
- [ ] `TEST.md` üzerindeki kritik senaryolar (TC-01, TC-02) doğrulandı mı?
- [ ] Gereksiz `console.log` çıktıları temizlendi mi?
- [ ] GitHub push işlemi başarıyla tamamlandı mı?
- [ ] Netlify "Build Successful" statüsüne geçti mi?
- [ ] Canlı ortamda API Key girişi ve çeviri testi yapıldı mı?

---

## ⏪ 8. Geri Alma (Rollback Strategy)

Eğer üretim ortamında bir hata tespit edilirse:
1. **Netlify Dashboard** -> **Deploys** sekmesine gidin.
2. Çalışan son başarılı deploy'u seçin.
3. **"Publish deploy"** butonuna tıklayarak anında eski sürüme dönün.

---

## 🔍 9. Sorun Giderme (Troubleshooting)

- **Build Hatası (404 / Script Not Found):** `index.html` içindeki dosya yollarının `/` ile başladığından emin olun.
- **API Bağlantı Hatası:** Kullanıcının girdiği API Key'in geçerli ve "Paid/Free Tier" limitlerine uygun olduğunu kontrol edin.
- **Tailwind Stilleri Yüklenmiyor:** `tailwind.config.js` dosyasındaki `content` dizilerinin tüm `.tsx` dosyalarını kapsadığını doğrulayın.

---
*Son Güncelleme: 06.01.2026 - Versiyon: 1.0*