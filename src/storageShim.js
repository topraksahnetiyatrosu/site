// Bu dosya, artifact önizlemesine özgü `window.storage` API'sini, gerçek
// PHP+MySQL sunucumuzdaki `api/storage.php` uç noktasına bağlar. site.jsx
// dosyasının GERİ KALANI HİÇ DEĞİŞTİRİLMEDİ — tüm window.storage.get/set/
// delete/list çağrıları aynen çalışmaya devam ediyor, sadece arkada artık
// gerçek bir veritabanına gidip geliyorlar.

const API_URL = import.meta.env.VITE_API_URL || "http://localhost/api";

async function apiGet(key, shared) {
  const res = await fetch(
    `${API_URL}/storage.php?action=get&key=${encodeURIComponent(key)}&shared=${shared ? 1 : 0}`,
    { credentials: "include" }
  );
  if (!res.ok) throw new Error(`storage.get başarısız: ${key}`);
  const data = await res.json();
  if (data === null) throw new Error(`anahtar bulunamadı: ${key}`);
  return data; // { key, value, shared }
}

async function apiSet(key, value, shared) {
  const res = await fetch(`${API_URL}/storage.php`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action: "set", key, value, shared: !!shared }),
  });
  if (!res.ok) throw new Error(`storage.set başarısız: ${key}`);
  return res.json();
}

async function apiDelete(key, shared) {
  const res = await fetch(`${API_URL}/storage.php`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action: "delete", key, shared: !!shared }),
  });
  if (!res.ok) throw new Error(`storage.delete başarısız: ${key}`);
  return res.json();
}

async function apiList(prefix, shared) {
  const res = await fetch(
    `${API_URL}/storage.php?action=list&prefix=${encodeURIComponent(prefix || "")}&shared=${shared ? 1 : 0}`,
    { credentials: "include" }
  );
  if (!res.ok) throw new Error("storage.list başarısız");
  return res.json();
}

window.storage = {
  get: apiGet,
  set: apiSet,
  delete: apiDelete,
  list: apiList,
};
