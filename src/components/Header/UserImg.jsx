import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db, storage } from '../../firebase';

const UserImg = () => {
  const [userData, setUserData] = useState({
    isim: 'Mimi Lovely',
    resimUrl: '/images/userImg.jpg', // Varsayılan resim URL'si
  });

  useEffect(() => {
    const veriGetir = async () => {
      try {
        const docRef = doc(db, 'profil');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          console.log('Doküman verisi:', data);

          // Dokümandaki resim URL'sini içeren alan varsayılan olarak 'resimUrl' olarak kabul edilmektedir.
          if (data && data.resimUrl) {
            setUserData({
              ...userData,
              resimUrl: data.resimUrl,
              isim: data.isim || 'Mimi Lovely', // Eğer isim verisi yoksa varsayılan bir isim belirlenmiştir.
            });
          }
        } else {
          console.log('Böyle bir doküman bulunamadı!');
        }
      } catch (hata) {
        console.error('Doküman getirme hatası:', hata);
      }
    };

    veriGetir();
  }, []);

  return (
    <div className='userImg'>
      <img src={userData.resimUrl} alt={userData.isim} />
      <h2>{userData.isim}</h2>
    </div>
  );
};

export default UserImg;