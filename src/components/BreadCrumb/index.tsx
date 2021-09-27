import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import * as Styles from "./styles";

export type BreadCrumbProps = {
  page_1?: string;
  page_2?: string;
  active?: boolean;
};

const BreadCrumb = ({ page_1, page_2 }: BreadCrumbProps) => {
  const { pathname } = useRouter();

  return (
    <Styles.BreadCrumb>
      <Styles.Li active={pathname === "/"}>
        <Link href={page_1 ? page_1 : ""}>Início</Link>
      </Styles.Li>

      <div>{">"}</div>

      <Styles.Li active={pathname === "/favoritos"}>
        <Link href={page_2 ? page_2 : ""}>Favoritos</Link>
      </Styles.Li>
    </Styles.BreadCrumb>
  );
};

export default BreadCrumb;
