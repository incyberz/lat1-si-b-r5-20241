function RowRiwayat(props: any) {
  return (
    <div className="border-2 border-indigo-500/75 rounded-lg bg-gray-800 p-2 my-5">
      <div className="container mx-auto ">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-4 ">{props.jenjang}</div>
          <div className="col-span-12 md:col-span-4 ">{props.sekolah}</div>
          <div className="col-span-12 md:col-span-4 ">{props.tahun}</div>
        </div>
      </div>
    </div>
  );
}

export default function RiwayatPendidikan() {
  return (
    <div className="container mx-auto p-2 text-center pt-20">
      <h2 className="text-2xl">Riwayat Pendidikan</h2>
      <RowRiwayat jenjang="SD" sekolah="SDN 1 Tjs" tahun="1999" />
      <RowRiwayat jenjang="SLTP" sekolah="SLTP 1 Tjs" tahun="2002" />
      <RowRiwayat jenjang="SMA" sekolah="SMA 1 Tjs" tahun="2005" />
      <RowRiwayat jenjang="Sarjana" sekolah="M.U" tahun="2008" />
    </div>
  );
}
