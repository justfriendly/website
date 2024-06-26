import countryListAlpha2 from "./all-countries";

const API_URL = "/api";

export interface Participant {
  name: string;
  country: keyof typeof countryListAlpha2;
}

export const addParticipant = async (
  participant: Participant
): Promise<any> => {
  const response = await fetch(`${API_URL}/list`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(participant),
  });
  return response.json();
};

export const getParticipants = async (
  limit?: number,
  offset?: number
): Promise<Participant & { id: number; createdAt: string }[]> => {
  const response = await fetch(
    `${API_URL}/list?limit=${limit}&offset=${offset}`
  );
  return response.json();
};
