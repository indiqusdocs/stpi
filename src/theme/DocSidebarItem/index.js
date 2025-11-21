import React from 'react';
import OriginalDocSidebarItem from '@theme-original/DocSidebarItem';

const icons = {
  category: "📁",   // For folders
  link: "📄",       // For external links
  doc: "🔗",        // For individual docs
};

export default function DocSidebarItem(props) {
  const type = props.item.type;
  const icon = icons[type] || "📄";

  // Add icon before the label
  const newItem = {
    ...props.item,
    label: `${icon} ${props.item.label}`,
  };

  return <OriginalDocSidebarItem {...props} item={newItem} />;
}
