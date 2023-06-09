// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token =
  "BQBTGZ5FA27yLRhd6EzeGpOMdlA7Et0jxBK6y69DpnOsbbEDqUhaze7tvyk5yI-D-KYBeqBjxhIxFk75j95QcXtqwj1THObm_s38_3GtewTmGoyIqPYpmP9V0QG4ZhhVelY5xbrxhpoJKKMRsofTzl6hI8QFY65twCe4j9uc88mboHFODFfqZLAZiMfiQznAqPgTFvtOsfQN8sHxVMjn2oyo1ae6018kSvOwrkToz1k7ktxp7TvY47jtehl3NCMJBSWxk3-c7ExImKtoZ6Qqmzbu";
async function fetchWebApi(endpoint: any, method: any, body?: any) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body: JSON.stringify(body),
  });
  return await res.json();
}

export async function getTopTracks() {
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
  return (
    await fetchWebApi("v1/me/top/tracks?time_range=short_term&limit=3", "GET")
  ).items;
}
