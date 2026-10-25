const checkShowLog = (showLog, internalShowLog, returnLog) => {
    const passed = typeof showLog === "boolean";
    const message = `guards/showLog: ${passed ? "passed" : "failed"}`;
    if (Array.isArray(returnLog)) returnLog.push(message);
    if (internalShowLog) console.log(message);
    return passed;
};

export default checkShowLog;
