export async function predictFakeFacebookProfile(data: any): Promise<string> {
  const formattedData = [
    data.name_id,
    data.profile_picture,
    data.likes,
    data.groups,
    data.mutual_friends,
    data.education,
    data.work,
    data.living_place,
    data.relationship_family,
    data.checkin,
    data.posts,
    data.tags,
    data.intro
  ];

  const response = await fetch("http://localhost:8000/facebook_predict", {
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
