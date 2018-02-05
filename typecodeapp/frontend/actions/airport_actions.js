export const getAirports = () => {
  return $.ajax({
    method: "GET",
    url: "api/airports"
  });
};
