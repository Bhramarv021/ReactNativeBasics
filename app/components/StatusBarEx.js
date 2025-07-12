import React, { useState } from "react";
import { Button, StatusBar } from "react-native";

const StatusBarEx = () => {
    const [changeStatusBar, setChangeStatusbar] = useState(true);
    return (
        <>
            <Button title={"Change Status Bar"} onPress={()=>{setChangeStatusbar(!changeStatusBar)}}/>
            <StatusBar backgroundColor={"cadetBlue"} hidden={changeStatusBar} barStyle={"default"} animated/>
        </>
    )
}

export default StatusBarEx;