"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
function Home() {
    return (React.createElement("ion-grid", null,
        React.createElement("ion-row", null, new Array(8).fill('').map(function (k, i) { return (React.createElement("ion-col", { key: i, size: "3" },
            React.createElement("ion-card", null,
                React.createElement(image_1["default"], { src: "/cat.jpg", alt: "Picture of the author", width: 500, height: 500 }),
                React.createElement("ion-card-header", null,
                    React.createElement("ion-card-subtitle", null, "Destination"),
                    React.createElement("ion-card-title", null, "Madison, WI")),
                React.createElement("ion-card-content", null,
                    React.createElement("ion-icon", { name: "pin", slot: "start" }),
                    "Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean.")))); }))));
}
exports["default"] = Home;
