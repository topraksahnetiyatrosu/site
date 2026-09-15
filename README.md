# Toprak Sahne Tiyatrosu — Ön Yüz (React)

Bu klasör, sitenin gerçek görsel halidir. Ziyaretçiler bunu görecek.
Ama önce "derlenmesi" (build edilmesi) gerekiyor — yani bu React kodu,
normal bir web sitesinin anlayacağı düz HTML/CSS/JS dosyalarına
dönüştürülmeli. Bunu ben burada deneyip yapamadım (bu ortamda internet
erişimim yok, paketleri indiremedim) — bu adımı sizin bir şekilde
tamamlamanız gerekiyor. İki yol var:

## Yol 1 — Node.js kurulu bir bilgisayarınız / bir tanıdığınız varsa

Bu klasörü o bilgisayara kopyalayın, terminalde şu iki komutu çalıştırın:

```bash
npm install
npm run build
```

Bu, `dist/` adında yeni bir klasör oluşturur. **İşte size gereken tek şey
budur** — `dist/` klasörünün İÇİNDEKİ dosyaları (index.html ve assets/
klasörü) hosting'inizde `siteniz.com` adresine karşılık gelen ana klasöre
yükleyin.

Yüklemeden önce `src/storageShim.js` dosyasındaki şu satırı kendi API
adresinizle değiştirin:
```js
const API_URL = import.meta.env.VITE_API_URL || "http://localhost/api";
```
En kolayı: bu klasörde `.env` adında bir dosya oluşturup içine tek satır
yazmak:
```
VITE_API_URL=https://api.siteniz.com/api
```
(build'den ÖNCE yapın, sonra `npm run build` çalıştırın.)

## Yol 2 — Node.js'iniz yoksa (ücretsiz, kod yazmadan)

1. https://github.com adresinde ücretsiz bir hesap açın, bu klasörü yeni
   bir "repository" olarak yükleyin (sürükle-bırak ile de olur).
2. https://netlify.com adresinde ücretsiz bir hesap açın, "Import from
   Git" ile o repoyu bağlayın.
3. Netlify şunları otomatik sorar/doldurur:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Environment variable: `VITE_API_URL` = `https://api.siteniz.com/api`
4. "Deploy" deyin — Netlify sizin için derleyip yayınlar, size bir adres
   verir. İsterseniz kendi alan adınızı (siteniz.com) sonradan bu adrese
   bağlayabilirsiniz (Netlify'ın ayarlarından, "Domain management").

Bu yol, bilgisayarınıza hiçbir şey kurmadan tamamen tarayıcıdan yapılır.

## Bu iş için bir geliştiriciye götürürseniz

Yukarıdaki adımlar toplam 10-15 dakika süren, net tanımlı bir iştir —
herhangi bir web geliştiriciye "bu React projesini derleyip
hosting'ime yükler misin" diye götürebilirsiniz.
