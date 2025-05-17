export async function predictFakeProfile(data: number[]): Promise<string> {
    const response = await fetch("http://localhost:8000/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data }),
    });
  
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Erreur HTTP ${response.status} : ${errorText}`);
    }
  
    const result = await response.json();
    return result.prediction;  // "REAL 👤" ou "FAKE ✅"
  }
  