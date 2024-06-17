const API_URL = "http://localhost:62023";

export interface Participant {
  name: string;
  country: string;
}

export const addParticipant = async (
  participant: Participant
): Promise<any> => {
  const response = await fetch(`${API_URL}/list-befriendly`, {
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
    `${API_URL}/list-befriendly?limit=${limit}&offset=${offset}`
  );
  return response.json();
};
