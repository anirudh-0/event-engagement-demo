import axios from "axios";

const token = `eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJhUUdXQjNOZ05Yb1dTWUQzdmhEYllvN1RCUTJieDZ0MkJxUGt0UEJSMmI4In0.eyJleHAiOjE2ODk3NDcwODksImlhdCI6MTY4OTc0NjQ4OSwianRpIjoiZmZjZjU4NTQtNjJkZS00ZTU4LWI1ODMtMWFkYmI5YWYyMTYzIiwiaXNzIjoiaHR0cDovL2FwaS51cC1haS5pbi9hdXRoL3JlYWxtcy9zdW5iaXJkLXJjIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6ImFhZjM0YjkxLTAyZTYtNGQ0NC1iMTA2LWYwNjUwMDgzNzdkNCIsInR5cCI6IkJlYXJlciIsImF6cCI6InJlZ2lzdHJ5LWZyb250ZW5kIiwic2Vzc2lvbl9zdGF0ZSI6Ijc1MTcwMTVhLWFjNmItNDcwYy1iYzA2LTQxOWNmYjNmZjBjYSIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cHM6Ly9sb2NhbGhvc3Q6NDIwMiIsImh0dHA6Ly9sb2NhbGhvc3Q6NDIwMiIsImh0dHBzOi8vbG9jYWxob3N0OjQyMDAiLCJodHRwczovL25kZWFyLnhpdi5pbiIsImh0dHA6Ly8xMDYuNTEuODYuMjQiLCIqIiwiaHR0cDovL2xvY2FsaG9zdDo0MjAwIiwiaHR0cDovL25kZWFyLnhpdi5pbiIsImh0dHA6Ly8yMC4xOTguNjQuMTI4IiwiaHR0cDovL2xvY2FsaG9zdDo1MTczIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJWaXNpdG9yIiwib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiIsImRlZmF1bHQtcm9sZXMtbmRlYXIiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInByZWZlcnJlZF91c2VybmFtZSI6IjgyMDk3NDc5MDYiLCJlbnRpdHkiOlsiVmlzaXRvciJdLCJlbWFpbCI6ImFiY0BnbWFpbC5jb20ifQ.Xfne7gk1JbueWOWmbc7dPWTpyLIa7224haNirO3tJ6nHr1yc1MnxncmqyZvoh1hTbn3ebtOrW93G-1JD_oqdpV6IPOK0DAwVceu-6FOPYQDA5HVP2_E2iY-sisirrqHzF8U3zdJHxa_Swa23xHKNFZtu7nnatjiCLii4XkVRFz5jSplKvfr1k5njpkgJ3DBFrS6dX-i-nZyvLZZtUaxwmGH7TJegPHFKjOi9H6bmRIEkQMNryvkvChW67UBoU0hX6hqOVAvk_sqrgNbpw_UIHMD22hZioPAv8XLfZlQ_flNDkjGhWGrInuL7fDe9nvneI0y_hpg_B4j6S2soMhOJjA`;

export const axiosInst = axios.create({
  baseURL: import.meta.env.PROD ? "https://api.up-ai.in" : undefined,
  headers: { Authorization: `bearer ${token}` },
});

export const config = {
  headers: { Authorization: `Bearer ${token}` },
};
