import buildOptions from "../../../docs/dist/v3/min.js";

import "https://keshavsoft.github.io/json-to-dom/dist/v42/min.js";

import base from "./base.json" with { type: "json" };

const container = document.getElementById("dom-render-container");

const showLog = false;
const returnLog = [];

const start = () => {
    try {
        const spec = buildOptions({
            options: {
                showSerial: true,
                showOptions: true
            }, base
        });

        window.ks.jsonToDom.appendToDom({
            jsonSpec: spec,
            targetHtmlId: "dom-render-container",
            options: {},
            classToApply: "",
            appendPosition: "append",
        });

    } catch (err) {
        console.error("Render error:", err);
        container.innerHTML = `<div class="alert alert-danger font-monospace small">${err.message}</div>`;
    }
};

start();
