const checkBase = (base, showLog, returnLog) => {
    const passed = Boolean(base && typeof base === "object" && !Array.isArray(base));
    const message = `guards/base: ${passed ? "passed" : "failed"}`;
    if (Array.isArray(returnLog)) returnLog.push(message);
    if (showLog) console.log(message);
    return passed;
};

export default checkBase;
