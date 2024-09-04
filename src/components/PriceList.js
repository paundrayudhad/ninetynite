import Image from "next/image";

const priceList = [
  {
    id: 1,
    name: "Cursed Edition",
    price: 200000,
    imageFront: "/t-shirt/hitam-depan.svg",
    imageBack: "/t-shirt/hitam-belakang.svg",
    link: "https://api.whatsapp.com/send?phone=6281228291117&text=Halo%2C%20saya%20mau%20membeli%20t-shirt%20LOVE%20OPINION%20%22Cursed%20Edition%22"
  },
  {
    id: 2,
    name: "Typography OG Logo",
    price: 200000,
    imageFront: "/t-shirt/putih-depan.png",
    imageBack: "/t-shirt/putih-belakang.png",
    link: "https://api.whatsapp.com/send?phone=6281228291117&text=halo%2C%20saya%20mau%20membeli%20t-shirt%20LOVE%20OPINION%20%22Typography%20OG%20Logo%22"
  }
];

export default function PriceList() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="mx-auto max-w-xl text-center my-24">
            <h1 className="lg:text-7xl font-extrabold text-5xl">
              LOVE OPINION
            </h1>
          </div>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {priceList.map((item) => (
              <li key={item.id}>
                <a  className="group block overflow-hidden">
                  <div className="relative h-[350px] sm:h-[450px]">
                    <div className="relative h-full w-full">
                      <Image
                        src={item.imageFront}
                        alt={`${item.name} front`}
                        layout="fill"
                        objectFit="cover"
                        className="absolute inset-0 opacity-100 group-hover:opacity-0 transition-opacity duration-300"
                      />
                      <Image
                        src={item.imageBack}
                        alt={`${item.name} back`}
                        layout="fill"
                        objectFit="cover"
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  </div>

                  <div className="relative bg-white pt-3">
                    <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                      {item.name}
                    </h3>
                    <p className="mt-1.5 tracking-wide text-gray-900">
                      IDR {item.price}
                    </p>
                    <div className="mt-4">
                      <a
                        href={item.link}
                        className="inline-block px-6 py-2 text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-800"
                      >
                        Shop Now
                      </a>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
