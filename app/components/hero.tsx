import foto from "../foto.jpg";

function Profile() {
  return <img src={foto.src} alt="Iin Sholihin" className="fotoku" />;
}

export default function Hero() {
  return (
    <div className="container mx-auto p-2 text-center">
      <h1 className="text-gray-400 font-bold ">CV ONLINE</h1>
      <h2 className="text-3xl">Iin Sholihin</h2>
      <Profile />
      <p>
        Saya adalah seorang Web Developer, IT Trainer, dan juga Hobbies Farmer!
        Cita-cita ingin menjadi programmer internasional. Saya ingin masuk
        syurga tanpa hisab sekeluarga.
      </p>
    </div>
  );
}
