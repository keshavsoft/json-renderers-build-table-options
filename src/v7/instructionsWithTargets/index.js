import hasDataRole from "../hasDataRole/index.js";

const instructionsWithTargets = (instructions, base) => {
    const returnFilter = instructions.filter(({ destinationPath }) =>
        hasDataRole(base, destinationPath?.dataRole)
    );
    // console.log(" : ", returnFilter);

    return returnFilter;
};

export default instructionsWithTargets;
