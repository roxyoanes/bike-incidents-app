export const bikeApi = async () => {
  try{
    const response = await fetch(
      `http://bikewise.org/api/v2/incidents`
    );
    const data = await response.json();
    return data;
  } catch(error){
    throw error;
  }
}