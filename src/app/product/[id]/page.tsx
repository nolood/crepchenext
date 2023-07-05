import fetchItem from "@/app/lib/fetchItem";
import Product from "@/components/screens/product/Product";

type Props = {
  params: { id: string };
};

const ProductPageId = async ({ params }: Props) => {
  const item = await fetchItem(params.id);
  return <Product item={item} />;
};

export async function generateMetadata({ params }: Props) {
  const item = await fetchItem(params.id);
  return {
    title: item.title,
    description: `${item.title} выполнен из качественных и надёжных материалов, можно заказать в любом количестве. Доставка по Челябинску и всей России`,
    openGraph: {
      title: item.title,
      siteName: "КРЕП-ЧЕ",
      description: `${item.title} выполнен из качественных и надёжных материалов, можно заказать в любом количестве. Доставка по Челябинску и всей России`,
    },
  };
}

export default ProductPageId;
