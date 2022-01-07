export async function getAddress(ip = '8.8.8.8') {
  const response = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=at_JgesgXYjw3aN1we2IAx5U5mHiP9WL&ipAddress=${ip}`
  );
  return await response.json();
}
