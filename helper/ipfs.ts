import axios from "axios";

const JWT = process.env.NEXT_PUBLIC_PINATA_JWT;

const extensionsToRemove = [".jpg", ".gif", ".pdf", ".png", ".jpeg", ".avif"];

export async function uploadfileToPinata(file: File) {
  const formData = new FormData();

  formData.append("file", file);

  const metadata = JSON.stringify({
    name: file.name,
  });
  formData.append("pinataMetadata", metadata);

  const options = JSON.stringify({
    cidVersion: 0,
  });
  formData.append("pinataOptions", options);

  try {
    const response = await axios.post(
      "https://api.pinata.cloud/pinning/pinFileToIPFS",
      formData,
      {
        headers: {
          "Content-Type": `multipart/form-data`,
          Authorization: `Bearer ${JWT}`,
        },
      }
    );
    return response.data.IpfsHash;
  } catch (error) {
    console.log(error);
  }
}

export async function uploadJsonToPinata(json: JSON) {
  try {
    const response = await axios.post(
      "https://api.pinata.cloud/pinning/pinJSONToIPFS",
      json,
      {
        headers: {
          accept: "application/json",
          "Content-Type": `application/json`,
          Authorization: `Bearer ${JWT}`,
        },
      }
    );
    return response.data.IpfsHash;
  } catch (error) {
    console.log(error);
  }
}
