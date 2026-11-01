import hasDataRole from "../hasDataRole/index.js";

const instructionsWithTargets = (instructions, base) => {
    return instructions.filter(({ destinationPath }) =>
        hasDataRole(base, destinationPath?.dataRole)
    );
};

export default instructionsWithTargets;
