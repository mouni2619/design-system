import { Collapse as AntCollapse } from "antd";
import { DEFAULT_ACCORDION_VARIANT } from "@components/Accordion/constants";

function buildLabel(icon, title) {
  if (!icon) return title;
  return (
    <span className="d-flex align-items-center gap-2">
      {icon}
      {title}
    </span>
  );
}

export function Accordion({
  variant = DEFAULT_ACCORDION_VARIANT,
  items = [],
  accordion = true,
  defaultActiveKey,
  activeKey,
  onChange,
  ...rest
}) {
  const panels = items.map((item) => ({
    key: item.key,
    label: buildLabel(item.icon, item.title),
    children: item.content,
  }));

  if (variant === "separated") {
    return (
      <div className="d-flex flex-column gap-3">
        {panels.map((panel) => {
          // Check if this specific panel key is included in active keys
          const activeKeys = defaultActiveKey || activeKey;
          const isItemActive = Array.isArray(activeKeys)
            ? activeKeys.includes(panel.key)
            : activeKeys === panel.key;

          return (
            <AntCollapse
              key={panel.key}
              bordered
              accordion={accordion}
              expandIconPosition="end"
              items={[panel]}
              {...(isItemActive && { defaultActiveKey: [panel.key] })}
              {...rest}
            />
          );
        })}
      </div>
    );
  }

  return (
    <AntCollapse
      bordered
      accordion={accordion}
      expandIconPosition="end"
      items={panels}
      defaultActiveKey={defaultActiveKey}
      activeKey={activeKey}
      onChange={onChange}
      {...rest}
    />
  );
}

export default Accordion;