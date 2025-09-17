import React from "react";
import { Button } from "react-native";
import { useAuth } from "../context/AuthContext";

export default function LogOutButton () {
    const { logout } = useAuth();
    return (
        <Button title="Cerrar Secion" onPress={logout} />
    )
}