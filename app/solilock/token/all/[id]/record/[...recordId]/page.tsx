
export default function SingleLockRecord({
  params,
}: {
  params: { recordId: number};
}) {
  console.log(params.recordId)
  return (
    <main>
      <p>Record {params.recordId}</p>
    </main>
  )
}