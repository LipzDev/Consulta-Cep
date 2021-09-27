import React, { useState } from "react";
import * as Styles from "./styles";

export type BreadCrumbProps = {
  page_1?: string;
  page_2?: string;
  active?: boolean;
  children?: React.ReactNode;
};

const BreadCrumb = ({ children }: BreadCrumbProps) => {
  return <Styles.BreadCrumb>{children}</Styles.BreadCrumb>;
};

export default BreadCrumb;
