import React from "react";

import "./menu-item.scss";

interface IMenuItemProps {
  id: number;
  title: string;
  imageUrl: string;
  size?: string;
}

export const MenuItem = (props: IMenuItemProps) => {
  const { title, imageUrl, size } = props;
  return (
    <div className={`${size ? size : ""} menu-item`}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};
