const checkReturnLog = (returnLog, showLog, internalReturnLog) => {
    const passed = Array.isArray(returnLog);
    const message = `guards/returnLog: ${passed ? "passed" : "failed"}`;
    if (passed) returnLog.push(message);
    else if (Array.isArray(internalReturnLog)) internalReturnLog.push(message);
    if (showLog) console.log(message);
    return passed;
};

export default checkReturnLog;
