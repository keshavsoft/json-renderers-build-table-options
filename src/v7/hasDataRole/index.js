const hasDataRole = (node, targetRole) => {
    if (!node || typeof node !== "object") return false;

    if (node.attributes?.["data-role"] === targetRole) {
        return true;
    }

    return Array.isArray(node.children) && node.children.some((child) => hasDataRole(child, targetRole));
};

export default hasDataRole;
