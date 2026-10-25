import checkBase from "./base/index.js";
import checkOptions from "./options/index.js";
import checkShowLog from "./showLog/index.js";
import checkReturnLog from "./returnLog/index.js";

const checkGuards = ({ options, base, showLog, returnLog }) => {
    return {
        base: checkBase(base, showLog, returnLog),
        options: checkOptions(options, showLog, returnLog),
        showLog: checkShowLog(showLog, showLog, returnLog),
        returnLog: checkReturnLog(returnLog, showLog, returnLog)
    };
};

export { checkBase, checkOptions, checkShowLog, checkReturnLog, checkGuards };
export default checkGuards;
