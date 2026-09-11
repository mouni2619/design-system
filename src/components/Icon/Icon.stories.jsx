import { Flex } from "antd";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

import { Icon } from "@components/Icon/Icon";
import { ICON_SIZES } from "@components/constants";
import { MediumPurple, ThemeColors } from "@tokens/color";

const CAPTION_CLASS = "caption text-secondary";

// Colour swatches used by the colour control and the Colors story.
const DEMO_COLORS = [
  ThemeColors.primary,
  ThemeColors.success,
  ThemeColors.warning,
  ThemeColors.danger,
  MediumPurple["purple-700"],
  ThemeColors.secondary,
];

// Placeholder handler for stories that only need the clickable rendering.
function handleNoop() {}

// Strips the story-only wrapper out of the generated docs snippet.
function transformSource(code) {
  return code
    .replace(/icon=\{\{[\s\S]*?\}\}/g, "icon={Eye}")
    .replace(/<IconDemo/g, "<Icon")
    .replace(/\s+onClick=\{false\}/g, "");
}

// Caption under each demo icon.
function DemoTile({ label = "", children = null }) {
  return (
    <Flex vertical align="center" gap="small">
      {children}
      <small className={CAPTION_CLASS}>{label}</small>
    </Flex>
  );
}

// The `onClick` control is a boolean, so turn it into a real handler.
function IconDemo({ icon = Eye, onClick = false, title = "", ...rest }) {
  const isVisibilityIcon = icon === Eye || icon === EyeOff;
  const [visible, setVisible] = useState(icon === EyeOff);

  function handleToggle() {
    setVisible(function (currentVisible) {
      return !currentVisible;
    });
  }

  const displayedIcon = isVisibilityIcon ? (visible ? EyeOff : Eye) : icon;
  const displayedTitle = isVisibilityIcon && onClick ? (visible ? "Hide" : "Show") : title;

  return (
    <Icon
      {...rest}
      icon={displayedIcon}
      title={displayedTitle}
      onClick={onClick ? (isVisibilityIcon ? handleToggle : handleNoop) : null}
    />
  );
}

export default {
  title: "Components/Icon",
  component: Icon,
  tags: ["autodocs"],
  args: {
    icon: Eye,
    size: "md",
    title: "",
    loading: false,
    disabled: false,
    onClick: false,
  },
  argTypes: {
    size: {
      control: "select",
      options: Object.keys(ICON_SIZES),
      description: "A token name, or a raw pixel number for one-off sizes.",
    },
    title: {
      control: "text",
      description:
        "Accessible name, and the tooltip's text. Plain text only — for a richer tooltip, use Tooltip directly.",
    },
    loading: {
      control: "boolean",
      description: "Replaces the icon with a spinner and disables the button.",
    },
    disabled: {
      control: "boolean",
      description: "Dims the icon and disables the button.",
    },
    color: {
      control: { type: "color", presetColors: DEMO_COLORS },
      description: "Any CSS colour. Leave empty to inherit the surrounding text colour.",
      table: { type: { summary: "string" } },
    },
    onClick: {
      control: "boolean",
      description: "Tick to make the icon a button. In code, pass a function.",
      table: { type: { summary: "func" } },
    },
    icon: {
      control: false,
      description: "Pass an icon component, such as Eye, Search, or ChevronRight.",
      table: { type: { summary: "IconComponent" } },
    },
  },
  parameters: {
    docs: { source: { transform: transformSource } },
  },
  render: function (args) {
    return <IconDemo {...args} />;
  },
};

export const Default = {};

export const Sizes = {
  render: function (args) {
    return (
      <Flex align="center" gap="medium" wrap>
        {Object.keys(ICON_SIZES).map(function (name) {
          return (
            <DemoTile key={name} label={`${name} · ${ICON_SIZES[name]}`}>
              <Icon {...args} onClick={undefined} size={name} />
            </DemoTile>
          );
        })}
      </Flex>
    );
  },
};

export const Colors = {
  render: function (args) {
    return (
      <Flex align="center" gap="medium" wrap>
        {DEMO_COLORS.map(function (value) {
          return (
            <DemoTile key={value} label={value}>
              <Icon {...args} onClick={undefined} size="lg" color={value} />
            </DemoTile>
          );
        })}
      </Flex>
    );
  },
};

export const ClickableVsDecorative = {
  render: function (args) {
    return (
      <Flex align="center" gap="large">
        <DemoTile label="with onClick">
          <Icon {...args} title="Clickable" onClick={handleNoop} />
        </DemoTile>
        <DemoTile label="without — same colour, not tabbable">
          <Icon {...args} onClick={undefined} />
        </DemoTile>
      </Flex>
    );
  },
};

export const Disabled = {
  render: function (args) {
    return (
      <Flex align="center" gap="large">
        <DemoTile label="with onClick, disabled">
          <Icon {...args} title="Clickable" onClick={handleNoop} disabled />
        </DemoTile>
        <DemoTile label="decorative, disabled">
          <Icon {...args} onClick={undefined} disabled />
        </DemoTile>
      </Flex>
    );
  },
};

export const Loading = {
  render: function (args) {
    return (
      <Flex vertical gap="medium" align="start">
        <Flex align="center" gap="medium">
          <small className={CAPTION_CLASS}>idle</small>
          {Object.keys(ICON_SIZES).map(function (size) {
            return <Icon key={size} {...args} onClick={undefined} size={size} />;
          })}
        </Flex>
        <Flex align="center" gap="medium">
          <small className={CAPTION_CLASS}>loading</small>
          {Object.keys(ICON_SIZES).map(function (size) {
            return <Icon key={size} {...args} onClick={undefined} size={size} loading />;
          })}
        </Flex>
      </Flex>
    );
  },
};

export const WithTooltip = {
  render: function (args) {
    return (
      <Flex align="center" gap="medium">
        <Icon {...args} icon={Eye} title="Show value" onClick={handleNoop} />
        <Icon {...args} icon={EyeOff} title="Hide value" onClick={handleNoop} />
      </Flex>
    );
  },
};

function PasswordField() {
  const [visible, setVisible] = useState(false);

  function handleToggle() {
    setVisible(function (currentVisible) {
      return !currentVisible;
    });
  }

  return (
    <Flex align="center" gap="small">
      <span className="body text-body">{visible ? "hunter2" : "••••••••"}</span>
      <Icon icon={visible ? EyeOff : Eye} title={visible ? "Hide" : "Show"} onClick={handleToggle} />
    </Flex>
  );
}

export const Clickable = {
  render: function () {
    return <PasswordField />;
  },
};
