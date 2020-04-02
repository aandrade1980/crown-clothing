import React from "react";

// Redux
import { connect } from "react-redux";

// Components
import MenuItem from "../menu-item";

// Redux
import { selectSections } from "../../redux/directory/directory.selectors";

import { ISection } from "../../models/section";
import { IRootState } from "../../redux/types";

import "./directory.scss";

interface IProps {
  sections: ISection[];
}

const Directory = ({ sections }: IProps) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} id={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = (state: IRootState) => ({
  sections: selectSections(state)
});

export default connect(mapStateToProps)(Directory);
