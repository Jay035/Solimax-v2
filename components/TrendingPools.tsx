import Image from "next/image";

type Props = {};

export default function TrendingPools({}: Props) {
  return (
    <section className="text-white">
      <div className="mb-[1.88rem] flex justify-between items-center">
        <div className="flex items-center gap-1">
          <Image
            width={24}
            height={24}
            src="/icons/rocket.svg"
            alt="rocket icon"
          />
          <h3 className="text-[#F3CE92] text-2xl tracking-[-0.015rem]">
            Trending pools
          </h3>
        </div>
        <div className="flex items-center gap-1">
          <h3>All pools</h3>
          <Image
            className="-rotate-90"
            width={14}
            height={14}
            src="/icons/chevron-down.svg"
            alt="caret"
          />
        </div>
      </div>
      {/* table */}
      <table className="overflow-x-scroll w-full" cellPadding={20}>
        <tr>
          <th>PROJECT</th>
          <th>SALE TYPE</th>
          <th>PRICE</th>
          <th>MIN BUY</th>
          <th>MAX BUY</th>
          <th>TOTAL SUPPLY</th>
          <th>DATE OF SUPPLY</th>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
        </tr>
        <tr>
          <td>Catdashian</td>
          <td>Catdashian</td>
          <td>Catdashian</td>
          <td>Catdashian</td>
          <td>Catdashian</td>
        </tr>
        <tr>
          <td>Public</td>
          <td>Public</td>
          <td>Public</td>
          <td>Public</td>
          <td>Public</td>
        </tr>
        <tr>
          <td>$0.001</td>
          <td>$0.001</td>
          <td>$0.001</td>
          <td>$0.001</td>
          <td>$0.001</td>
        </tr>
      </table>
    </section>
  );
}
