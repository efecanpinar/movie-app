## Movie Search App

Bu ödevde OMDb API kullanarak film araması yapabilme ve filmleri favorilere ekleyebilme fonksiyonları olan bir React uygulaması geliştireceğiz.

### Home Page

<p align="center">
  <img src="movie-search-app.jpeg" alt="Movie Search"/>
</p>

### Favorites Page

<p align="center">
  <img src="favorites.jpeg" alt="Favorites"/>
</p>

### Detail Page

<p align="center">
  <img src="detail.jpeg" alt="Detail"/>
</p>


### Proje Nasıl Çalıştırılır

- Projeyi fork'ladıktan ya da indirdikten sonra projenin bulunduğu klasörde "npm install" komutu ile gerekli paketlerin yüklenmesi gerekiyor.
- OMDb API kullanabilmek için bir API key'e ihtiyacımız var. Email adresinizle [buradan](http://www.omdbapi.com/apikey.aspx) alabilirsiniz. API key'i MovieContext component'i içerisinde constant olarak tanımlanmış API_KEY'e atadıktan sonra OMDb API'ı kullanmaya başlayabilirsiniz.
- Daha sonra "npm run start" komutu ile uygulama başlatılabilir.

### Proje Hakkında

Bu projede filmler ile alakalı anahtar kelimeyi arama kutucuğuna yazdıktan sonra OMDb API'ya atılan istek sayesinde film listeleme yapılıyor. Film kartlarının sağ üst köşesinde bulunan yıldız ikonu sayesinde filmleri favorilere ekleyebiliyoruz. Favoriler route'unda eklenilen bu filmleri listeleyebiliyoruz. Film kartına tıkladığımızda ise filme ait daha detaylı bilgiye ulaşabildiğimiz detay sayfası görüntüleniyor.

### Yapılacaklar

- Router.js'de routes içine favorite route'u için config objesi oluşturunuzu. (Hazır olan home route objesine benzer şekilde)
- Film detay sayfasını görüntülemek için Home page içinde bulunan Link component'inde gerekli olan film id'sine göre dinamik routing işlemini gerçekleştiriniz.
- Home sayfasından gönderilen film id'sini Detail sayfasında yakalayabilmek için React Router'ın useParams fonksiyonunu kullanınız.

### NOT
- Dinamik routing ödev olarak beklendiği için her film için sabit id'li bir film detay sayfası görüntülenmektedir. Görevler tamamlandıktan sonra dinamik bir routing yapısı olacaktır. 
