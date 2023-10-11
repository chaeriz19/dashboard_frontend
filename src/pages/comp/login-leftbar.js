import React from 'react'
import { Button } from 'react-native-web'

export default function LoginLeftbar(user) {

    function logout() {
        console.log("Clicked");
    }

    return (
    <div className="w-1/6 bg-grey-500">
        <div className="p-5">
            <p className="font-bold text-gray-400">Welkom,</p>
            <h1 className="text-white font-bold text-2xl">{user.user.name}</h1>
        </div>
        <div className="flex">
            <Button onPress={() => logout()} title="Log uit" />
        </div>
    </div>
)}