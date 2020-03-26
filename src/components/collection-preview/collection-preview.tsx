import React from "react";

import { ICollection } from "../../models/collection";

// Components
import { CollectionItem } from "../collection-item";

import "./collection-preview.scss";

export const CollectionPreview: React.FC<ICollection> = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((_, index) => index < 4)
          .map(({ id, ...itemProps }) => (
            <CollectionItem key={id} id={id} {...itemProps} />
          ))}
      </div>
    </div>
  );
};
