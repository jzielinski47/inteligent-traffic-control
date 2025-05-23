import LeftArrow from "../assets/LeftArrow";
import StraightRightArrow from "../assets/StraightRightArrow";
import DirectionComponentProps from "../types/interfaces/directionComponentProps.interface";
import decodeColor from "../utils/decodeColor";

const DirectionComponent = ({ name, direction }: DirectionComponentProps) => {
    return (
        <div>
            <h3>{name}</h3>
            <p className="text-white/60">Queue: {direction.queue.length}</p>
            <div className="flex flex-row space-between gap-1 mt-1">
                <LeftArrow className={`${decodeColor(direction.priorityLeftSignalLight)} size-8`} />
                <StraightRightArrow className={`${decodeColor(direction.straightRightSignalLight)} size-8`} />
            </div>
        </div>
    );
};

export default DirectionComponent;
