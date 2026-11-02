import runSingleInstructions from "json-instruction-single";

import checkGuards from "./guards/index.js";
import insertSearch from "./insertSearch/index.js";

import serialInstructions from "./instructionsForSerial.json" with { type: "json" };
import optionInstructions from "./instructionsForOptions.json" with { type: "json" };

import instructionsWithTargets from "./instructionsWithTargets/index.js";

const startFunc = ({ options = {}, base, showLog = false, returnLog = [] } = {}) => {
    const guards = checkGuards({ options, base, showLog, returnLog });

    if (!Object.values(guards).every(Boolean)) {
        return base;
    }

    const localOptions = options;
    const localBase = base;
    const localShowLog = showLog;
    const localReturnLog = returnLog;

    if (localOptions.showSerial || localOptions.serial) {
        runSingleInstructions(
            instructionsWithTargets(serialInstructions, localBase),
            { base: localBase },
            localShowLog,
            localReturnLog
        );
    }

    if (localOptions.showOptions || localOptions.options) {
        runSingleInstructions(
            instructionsWithTargets(optionInstructions, localBase),
            { base: localBase },
            localShowLog,
            localReturnLog
        );
    }

    if (localOptions.showSearch) {
        insertSearch();
    }

    return localBase;
};

export default startFunc;
