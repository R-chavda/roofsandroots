import React, { useContext, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import UserDetailContext from "../context/UserDetailContext";
import { useMutation } from "react-query";
import { createUser } from "../utils/api";
import useFavourites from "../hooks/useFavourites";
import useBookings from "../hooks/useBookings";

const Layout = () => {
  useFavourites();
  useBookings();

  const { isAuthenticated, user, getAccessTokenWithPopup } = useAuth0();
  const { setUserDetails } = useContext(UserDetailContext);

  // Define your mutation
  const createUserMutation = useMutation({
    mutationKey: ["createUser", user?.email],
    mutationFn: (token) => createUser(user?.email, token),
    onSuccess: (data) => {
      console.log("User created successfully:", data);
    },
    onError: (error) => {
      console.error("Failed to create user:", error);
    },
  });

  useEffect(() => {
    const getTokenAndRegister = async () => {
      try {
        if (!isAuthenticated || !user?.email) return;

        console.log("Getting token for:", user.email);

        const token = await getAccessTokenWithPopup({
          authorizationParams: {
            audience: "http://localhost:8000",
            scope: "openid profile email",
          },
        });

        console.log("Token acquired successfully", token);

        // Store token in localStorage
        localStorage.setItem("access_token", token);

        // Update user context with token
        setUserDetails((prev) => ({ ...prev, token }));

        // Execute the mutation with the token
        console.log("Executing createUser mutation");
        createUserMutation.mutate(token);
      } catch (error) {
        console.error("Error in authentication flow:", error);
      }
    };

    if (isAuthenticated && user?.email) {
      getTokenAndRegister();
    }
  }, [isAuthenticated]);

  return (
    <>
      <div style={{ background: "var(--black)", overflow: "hidden" }}>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
