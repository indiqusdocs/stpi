import React from 'react';
import OriginalDocSidebarItem from '@theme-original/DocSidebarItem';

const icons = {
  category: "📁",
  link: "📄",
  doc: "🔗",
};

export default function DocSidebarItem(props) {
  const type = props.item.type;
  const icon = icons[type] || "📄";

  const newItem = {
    ...props.item,
    label: (
      <span className="sidebar-label-wrapper">
        <span className="sidebar-icon">{icon}</span>
        <span className="sidebar-text">{props.item.label}</span>
      </span>
    ),
  };

  return <OriginalDocSidebarItem {...props} item={newItem} />;
}
