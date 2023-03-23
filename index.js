const orijinalTatlar = [
  "Muz",
  "Vişne",
  "Ceviz",
  "Kestane",
  "Kiraz",
  "Çikolata",
  "Fındık Çikolata",
  "Fıstık Çikolata",
  "Badem Çikolata",
  "Franbuaz",
  "Yaban Mersini",
  "Tarçın",
  "Badem",
  "Kahve",
  "Fındık",
  "Anten Fıstık",
  "Limon",
  "Misket Limon",
  "Akçaağaç Şurubu",
  "Şeftali",
  "Nane",
  "Ananas",
  "Ahududu",
  "Çilek",
  "Vanilya",
];

function kopyala(dizi){
  return dizi.slice()
}
const allTastes = kopyala(orijinalTatlar);


function dizi25Cesitmi(dizi){
    console.log(dizi.length);
    if(dizi.length == 25){
      return true;
    }
  }
dizi25Cesitmi(allTastes);


function cesitEkle(dizi,malzeme){
  dizi.unshift(malzeme);
  return dizi;
}
cesitEkle(allTastes,"Kakule");
console.log(cesitEkle(allTastes,"Kakule"));

function sonCesitiKaldir(dizi){
  dizi.pop();
  return dizi;
}
sonCesitiKaldir(allTastes);
console.log(sonCesitiKaldir(allTastes));


function indekstekiCesitiGetir(dizi,i){
  return dizi[i]
}
console.log(indekstekiCesitiGetir(allTastes,2));


function ismeGoreCesitCikar(dizi,malzeme){
  dizi.splice(dizi.indexOf(malzeme),1);
  return dizi;
}
ismeGoreCesitCikar(allTastes,"Tarçın");


function ismeGoreFiltrele(dizi,malzeme){
  const cikti = []
  for ( let i = dizi.length - 1 ; i >= 0 ; i-- ){
    if(dizi[i].includes(malzeme))
    cikti.unshift(dizi[i]);
  }
  return cikti
}
ismeGoreFiltrele(allTastes,"Çikolata")
console.log(ismeGoreFiltrele(allTastes,"Çikolata"));


/* ALIŞTIRMA */

/* ALIŞTIRMA 1: Bir dizideki ortalama kelime sayısını döndüren bir fonksiyon yazın. Bu işlevi orijinalTatlar dizisinde test etmelisiniz, ancak bunu herhangi bir dizi için de kullanabilmelisiniz.

Aşağıdakileri yapmak için ortalamaKelimeSayisi işlevini kullanın:
   1. orijinalTatlar dizisini alın
   2. Dizideki öğe başına kaç kelime sayın
   3. Dizideki öğe başına ortalama kelime sayısını döndürün

   Örneğin: ortalamaKelimeSayisi(orijinalTatlar) 0 ile 2 arasında bir sayı döndürmelidir.
*/

function ortalamaKelimeSayisi(/*kod buraya*/){
  /*kod buraya*/
}


/* ALIŞTIRMA 2:
Firma mevcut tatların yanında artık mevsimlik lezzetler ve hatta bölgesel lezzetler de sunmaktadır. Toplam 25 lezzet aromasını
orijinalTatlar, yeniTatlar, mevsimlikTatlar ve bolgeselTatlar'dan rastgele seçecek ve bunu rastgeleTatlar adlı bir dizide saklayan bir fonksiyon yazın.

Aşağıdakileri yapmak için rastgeleTatlar işlevini ve yeni dizileri kullanın:
   1. Tüm farklı tatlara sahip dört diziyi alın (orijinalTatlar yukarıda, diğerleri aşağıda)
   2. Dört diziden rastgele tatlar seçin
   3. Uzunluğu 25 olan rastgeleTatlar adlı yeni bir dizi döndürün

  Örneğin: rastgeleTatlar(orijinalTatlar, yeniTatlar, mevsimlikTatlar, bolgeselTatlar) çalıştırıldığında ["Kestane", "Ballı Badem,"..."Hindistan Cevizi", "Kuru üzüm"].
*/


function rastgeleTatlar(/*kod buraya*/){
  /*kod buraya*/
}

// NEW DATA ARRAYS FOR STRETCH 2 ⬇️
// const yeniTatlar = [
//   "Badem",
//   "Ballı Badem",
//   "Fıstık Ezmesi",
//   "Profiterol",
//   "Madlen Çikolata"
// ]

// const mevsimlikTatlar = [
// "Pekan",
// "Kaju",
// "Çikolatalı Mousse",
// "Fransız Vanilyası",
// "Yumurta",
// "Alman çikolatası",
// "Kek üzerine krema",
// "Hindistan Cevizi",
// "Kaymaklı Biskuvi",
// "Beyaz Çikolata",
// "Mango"
// ]

// const bolgeselTatlar = [
// "Kaymak",
// "Karpuz",
// "Karadut",
// "Turunç",
// "Portakal",
// "Yogurt",
// "Krem Peynir",
// "Kakao",
// "Karamel macchiato",
// "Kuru üzüm",
// "Peynir",
// "Karamel"
// ]


/* Lütfen bu satırın altındaki hiçbir şeyi değiştirmeyin */
function sa(){
  console.log('Calışıyor');
  return 'as';
}
sa();
module.exports = {
  sa,
  dizi25Cesitmi,
  cesitEkle,
  sonCesitiKaldir,
  indekstekiCesitiGetir,
  ismeGoreCesitCikar,
  kopyala,
  ismeGoreFiltrele,
  ortalamaKelimeSayisi,
  rastgeleTatlar
}

