import React, { Children } from "react";

import cx from "classnames";

const Widget = ({ children, className, img, ...rest }) => (
  <div className="blog">
    <img className={className} src={img} />
    <div className="blogcard">{children}</div>
  </div>
);

export default Widget;
