import React from "react";
import TOCOriginal from "@theme-original/TOC";

const levelIcons = {
  2: "🔗", // H2
  3: "🔗", // H3
  4: "🔗", // H4
};

function addIcons(toc) {
  return toc.map((item) => ({
    ...item,
    value: `${levelIcons[item.level] || "🔹"} ${item.value}`,
    children: item.children ? addIcons(item.children) : [],
  }));
}

export default function TOC(props) {
  const modified = addIcons(props.toc);
  return <TOCOriginal {...props} toc={modified} />;
}
