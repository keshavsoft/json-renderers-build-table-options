const checkOptions = (options, showLog, returnLog) => {
    const passed = Boolean(options && typeof options === "object" && !Array.isArray(options));
    const message = `guards/options: ${passed ? "passed" : "failed"}`;
    if (Array.isArray(returnLog)) returnLog.push(message);
    if (showLog) console.log(message);
    return passed;
};

export default checkOptions;
