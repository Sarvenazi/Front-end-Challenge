export function sendRequest(url, data) {
  return fetch(url, {
    method: "POST",
    credentials: "include",
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
      mode: "cors",
      cache: "no-cache",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
}
