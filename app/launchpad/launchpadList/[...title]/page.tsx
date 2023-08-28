import { Metadata } from "next";


// export async function generateMetadata({
//     params: { id },
//   }: any): Promise<Metadata> {
//     // const hospitalData = getHospital(id);
//     // const hospital = await hospitalData;
  
//     return {
//     //   title: hospital?.name,
//       description: ``,
//     };
//   }

export default function page({ params }: { params: { title: string } }) {
  return (
    <div className="text-white">page {params.title}</div>
  )
}