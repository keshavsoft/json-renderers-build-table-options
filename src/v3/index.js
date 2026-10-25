import { runSingleInstructions } from "json-instructions";

import checkGuards from "./guards/index.js";
import insertSearch from "./insertSearch/index.js";

import serialInstructions from "./instructionsForSerial.json" with { type: "json" };
import optionInstructions from "./instructionsForOptions.json" with { type: "json" };

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
        runSingleInstructions(serialInstructions, { base: localBase }, localShowLog, localReturnLog);
    }

    if (localOptions.showOptions || localOptions.options) {
        runSingleInstructions(optionInstructions, { base: localBase }, localShowLog, localReturnLog);
    }

    if (localOptions.showSearch) {
        insertSearch();
    }

    return localBase;
};

export default startFunc;
