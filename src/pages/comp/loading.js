import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native"

export default function Loading() {
    return (
        <div className="fixed inset-0 flex items-center justify-center">
        <div className="text-center">
          <ActivityIndicator size="large" color="#000000" />
          <p>Loading</p>

        </div>
      </div>
    )
}