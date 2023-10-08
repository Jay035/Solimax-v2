export default function VerifyURL(url: string) {
  const urlRegex =
    /^(https?|ftp):\/\/(([a-z\d]([a-z\d-]*[a-z\d])?\.)+[a-z]{2,}|localhost)(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i;
  let status;
  if (urlRegex.test(url)) {
    status = true;
  } else {
    status = false;
  }
  return status;
}
