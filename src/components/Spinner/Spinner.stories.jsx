import { Spinner } from "@components/Spinner/Spinner";
import { SPINNER_TYPES } from "@components/Spinner/constants";

const CAPTION_CLASS = "caption";
const ROW_CLASS = "d-flex align-items-center gap-3 flex-wrap";

const TYPES = Object.keys(SPINNER_TYPES);

function LabelledRow({ label = "", children = null }) {
  return (
    <div className="row align-items-center">
      <div className="col-5">
        <small className={CAPTION_CLASS}>{label}</small>
      </div>
      <div className="col ps-4">
        <div className={ROW_CLASS}>{children}</div>
      </div>
    </div>
  );
}

export default {
  title: "Components/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  args: {
    type: "secondary",
  },
  argTypes: {
    type: { control: "select", options: TYPES },
  },
};

export const Default = {
  render: function (args) {
    return (
      <div className="d-inline-flex align-items-center justify-content-center bg-black p-5">
        <Spinner {...args} />
      </div>
    );
  },
};

export const Types = {
  render: function (args) {
    return (
      <div className="d-inline-grid gap-3 bg-black text-white p-4">
        {TYPES.map(function (type) {
          return (
            <LabelledRow key={type} label={type}>
              <Spinner {...args} type={type} />
            </LabelledRow>
          );
        })}
      </div>
    );
  },
};
