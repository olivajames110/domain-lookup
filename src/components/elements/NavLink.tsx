import React, { FunctionComponent } from "react";
import Link from "next/link";
import {
  SvgIconProps,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";

interface Props {
  to: string;
  icon?: (props: SvgIconProps) => JSX.Element;
  label?: string;
  className?: string;
}

const NavLink: FunctionComponent<Props> = (props) => (
  <Link href={props.to} passHref>
    <ListItemButton className={props.className}>
      {props.icon && (
        <ListItemIcon>
          <props.icon />
        </ListItemIcon>
      )}
      <ListItemText primary={props.label ?? props.children} />
    </ListItemButton>
  </Link>
);

export default NavLink;
