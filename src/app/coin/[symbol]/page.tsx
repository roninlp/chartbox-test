import { Card, CardHeader } from "@/app/_components/card";
import Image from "next/image";
import { notFound } from "next/navigation";

type SymbolData = {
  id: string;
  symbol: string;
  name: string;
  image: {
    large: string;
  };
  description: {
    en: string;
  };
  market_data: {
    current_price: {
      usd: number;
    };
  };
};

async function getSymbolData(symbol: string): Promise<SymbolData> {
  try {
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${symbol}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export default async function SymbolPage({
  params,
}: {
  params: { symbol: string };
}) {
  try {
    const symbolData = await getSymbolData(params.symbol);

    const formattedPrice = Intl.NumberFormat("en-US", {
      style: "decimal",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(symbolData.market_data.current_price.usd);

    const getFirstThreeSentences = (text: string): string => {
      const sentences = text.match(/[^\.!\?]+[\.!\?]+/g);

      if (!sentences || sentences.length === 0) {
        return text;
      }

      const firstFive = sentences.slice(0, 4).join(" ");

      return firstFive.replace(/<[^>]*>?$/g, "");
    };

    return (
      <Card className="">
        <CardHeader>{symbolData.name}</CardHeader>
        <div className="w-full flex justify-center items-center">
          <Image
            src={symbolData.image.large}
            alt={symbolData.name}
            width={104}
            height={104}
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <p>Name</p>
            <p className="font-medium">{symbolData.name}</p>
          </div>
          <div className="flex justify-between">
            <p>Symbol</p>
            <p className="font-medium uppercase">{symbolData.symbol}</p>
          </div>
          <div className="flex justify-between">
            <p>Price</p>
            <p className="font-medium">{formattedPrice}$</p>
          </div>
          <div className="flex flex-col gap-3">
            <p>Description</p>
            <p className="font-medium">
              {getFirstThreeSentences(symbolData.description.en)}
            </p>
          </div>
        </div>
      </Card>
    );
  } catch (error) {
    console.log(error);
    notFound();
  }
}
