
import { View, Text } from "react-native";
import LogOutButton from "../components/LogOutButton";

export default () => {
    return (
        <View className="flex-1 justify-center items-center bg-gray-100">
            <Text className="text-2xl">Student DashBard</Text>
            <LogOutButton />
        </View>
    )
}