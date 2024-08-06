import { Container, Filters, ProductCard, ProductsGroupList, Title, TopBar } from "@/components/shared";

export default function Home() {
  return <>
    <Container className="mt-10">
      <Title text="Все пиццы" size="lg" className="font-extrabold" />

    </Container>

    <TopBar />

    <Container className="mt-10 pb-14">
      <div className="flex gap-[80px]">

        {/* Фильтрация */}
        <div className="w-[250px]">
          <Filters />
        </div>

        {/* Список товаров */}
        <div className="flex-1">
          <div className="flex flex-col gap-16">
            <ProductsGroupList
              title="Пиццы"
              categoryId={1}
              items={[
                {
                  id: 1,
                  name: 'Чисбургер пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D611ADF5AAD898B8B651186E023.avif',
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 2,
                  name: 'Чисбургер пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D611ADF5AAD898B8B651186E023.avif',
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 3,
                  name: 'Чисбургер пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D611ADF5AAD898B8B651186E023.avif',
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 4,
                  name: 'Чисбургер пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D611ADF5AAD898B8B651186E023.avif',
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 5,
                  name: 'Чисбургер пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D611ADF5AAD898B8B651186E023.avif',
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 6,
                  name: 'Чисбургер пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D611ADF5AAD898B8B651186E023.avif',
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 7,
                  name: 'Чисбургер пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D611ADF5AAD898B8B651186E023.avif',
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 8,
                  name: 'Чисбургер пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D611ADF5AAD898B8B651186E023.avif',
                  price: 550,
                  items: [{ price: 550 }],
                },
              ]} />

            <ProductsGroupList
              title="Комбо"
              categoryId={2}
              items={[
                {
                  id: 9,
                  name: 'Чисбургер пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D611ADF5AAD898B8B651186E023.avif',
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 10,
                  name: 'Чисбургер пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D611ADF5AAD898B8B651186E023.avif',
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 11,
                  name: 'Чисбургер пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D611ADF5AAD898B8B651186E023.avif',
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 12,
                  name: 'Чисбургер пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D611ADF5AAD898B8B651186E023.avif',
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 13,
                  name: 'Чисбургер пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D611ADF5AAD898B8B651186E023.avif',
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 14,
                  name: 'Чисбургер пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D611ADF5AAD898B8B651186E023.avif',
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 15,
                  name: 'Чисбургер пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D611ADF5AAD898B8B651186E023.avif',
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 16,
                  name: 'Чисбургер пицца',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D611ADF5AAD898B8B651186E023.avif',
                  price: 550,
                  items: [{ price: 550 }],
                },
              ]} />
          </div>
        </div>
      </div>
    </Container>
  </>;
}
