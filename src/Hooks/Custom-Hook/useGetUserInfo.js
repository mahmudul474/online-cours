import { useQuery } from "@tanstack/react-query";

function useGetUserInfo(email) {
  const { isLoading, data, error, refetch } = useQuery(
    ["userInfo", email],
    async () => {
      const response = await fetch(
        `http://localhost:5000/userinfo?email=${email}`
      );
      const data = await response.json();
      return data;
    }
  );

  return { isLoading, data, error, refetch };
}

export default useGetUserInfo;
