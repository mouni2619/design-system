import { Tabs as AntTabs } from "antd";

import {
  DEFAULT_TABS_SIZE,
  DEFAULT_TABS_VARIANT,
  TABS_VARIANTS,
} from "@components/Tabs/constants";
import "./Tabs.scss";

export function Tabs({
  variant = DEFAULT_TABS_VARIANT,
  size = DEFAULT_TABS_SIZE,
  items = [],
  className = "",
  ...rest
}) {
  return (
    <AntTabs
      type={TABS_VARIANTS[variant]}
      size={size}
      items={items}
      className={`design-system-tabs design-system-tabs--${variant} ${className}`.trim()}
      {...rest}
    />
  );
}

export default Tabs;
