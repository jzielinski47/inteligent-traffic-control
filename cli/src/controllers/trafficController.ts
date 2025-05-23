import { routeGroupDTO } from "../types/interfaces/routeGroupDTO.interface";
import { getPriorityVehicle } from "../utils/assignPriority";
import { assignMatchingRouteGroup, setGreenLightsForPattern } from "./trafficLogic";

export const resolveTrafficPattern = () => {
    const priorityVehicle = getPriorityVehicle();
    console.log("priority assigned to", priorityVehicle ? priorityVehicle?.vehicleId : "no vehicles");

    const dataSet: routeGroupDTO = {};

    assignMatchingRouteGroup(priorityVehicle, dataSet);

    if (dataSet.selectedPattern != undefined && dataSet.selectedManoeuvre != undefined)
        setGreenLightsForPattern(dataSet.selectedPattern, dataSet.selectedManoeuvre);
};
