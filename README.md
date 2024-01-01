# Fimple Final Project

Demo [Netlify](https://main--beautiful-alpaca-73a131.netlify.app/)

## Başvuru/Ticket Yönetim Sistemi        

###  Technologies to be used : 

- React Hooks
- Router (react-router/ reach router / etc)
- Context API
- Form Management Library (react-hook-form(önerilen) / formik / etc)
- Validation Library (yup(önerilen), joi, etc)
- Uygulamanız kesinlikle bir servise deploy edilmiş olacak ve public link readme içinde yer alacak (netlify, vercel gibi)
- Open source
- Eslint

### Case Details

Uygulamamız herkese açık bir başvuru formunun son kullanıcı tarafından doldurulması ile başlıyor. Formu dolduran kullanıcıya başvurusunu takip edebilecegi bir kod veriliyor. Kullanıcı başvuru durumu sayfasından bu kod ile başvurusunun çözülüp çözülmediğini kontrol edebiliyor.

Kullanıcı adı ve şifre ile girilebilen bir ekrandan da yetkili kullanıcılar gelen başvuruları görüntüleyebiliyor cevaplanmamış başvurulara cevap yazıp durumunu çözüldü / iptal edildi / bekliyor vb gibi güncelleyebiliyor. Gerekirse eski kayıtlara ulaşabilir.

### Routes/Paths

#### /basvuru-olustur (default)

- Public endpoint.
- Başvuru formunu herhangi bir kullanıcının doldurmasına imkan verir.
- Başvuru formunda [Ad, Soyad, Yaş, TC, Başvuru Nedeni, Adres Bilgisi, Fotograflar/Ekler, Gönder] butonu yer alır.

#### /basvuru-basarili (Basvuru formu doldurulduktan sonra gelen sayfa)
- Ekranda bir teşekkür mesajı yer alır ve kullanıcıya başvuru detayları ile birlikte başvuru kodu verilir.

#### /basvuru-sorgula
- Ekranda başvuru kodu girilebilen bir input ve sorgula butonu vardır.

#### /basvuru/{basvuruNo}

- Ekranda başvuru varsa bilgileri, son durumu ve verilen cevap(lar) yer alır.
- Başvuru numarası hatalıysa 404(bulunamadı) mesajı çıkar.

#### /admin
- Ekranda kullanıcı giriş formu vardır. (Rahat test edebilmemiz için u:kodluyoruz, p:bootcamp109 bilgileri ile giriş yapabilmeliyim.)

#### /admin/basvuru-listesi
- Başarılı giriş sonrası bekleyen (çözülmemiş/cevaplanmamış) başvuruların listesi yer alır ve basit bilgiler sunar. (Başvuru yapan, tarih)
- Başvuru listesinde her elemenda başvuruyu görüntüle butonu vardır.

#### /admin/basvuru/{basvuruNo}

- Başvurunun durumu güncellenebilir ve başvuruya cevap yazılabilir.
- Burada yazılan cevap son kullanıcı tarafından basvuru/{basvuruNo} kısmından görüntülenebilmelidir.


### Requirements

- Tüm formlarda gerekli validasyonlar olsun.
- Back-end yazmak zorunda değilsiniz, back-end olarak firebase ya da mock bir api kullanabilirsiniz.
- Admin paneline u:kodluyoruz, p:bootcamp109 bilgileri ile giriş yapabilmeliyim.
- Mümkünse admin paneline bir menü ekleyelim (başvuru listesi, çıkıs gibi işlemleri kapsasın)

### Bonus

- Service worker ile offline render destegi
- Mobil uyumlu guzel bir tasarim
- Kullanılabilir UX
