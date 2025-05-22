export async function predictFakeInstagramProfile(data: any): Promise<string> {
  const formattedData = [
    data.profile_pic,
    data.username_length,        // Attention : tu as nommé "username_length", mais le back attend "username_nums_ratio"
    data.fullname_words,
    0,                         // Ajoute fullname_nums_ratio manquant ? Tu ne l’as pas dans l’interface
    data.name_eq_username,
    data.description_length,
    data.external_url,
    data.private,
    data.posts,
    data.followers,
    data.follows
  ];

  const response = await fetch("http://localhost:8000/instagram_predict", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data: formattedData }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Erreur HTTP ${response.status} : ${errorText}`);
  }

  const result = await response.json();
  return result.prediction;
}
